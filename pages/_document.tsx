import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import { ServerStyleSheet } from "styled-components";

// meta 태그를 정의하거나, 전체 페이지에 관여하는 컴포넌트
export default class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="naver-site-verification" content="435e66ecc90201845690ae041959203259a0e709" />
          <link rel="shortcut icon" href="/recycling_all.png" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="description" content="일운산업 주식회사의 스크랩 기타자재 등 매입 문의 및 소개 사이트" />
          <meta name="viewport" content="initail-scale=1.0, width=device-width"/>
          <meta property="og:title" content="일운산업" />
          <meta property="og:type" content="website"/>
          <meta property="og:article:author" content="일운산업" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// _document는 서버사이드에 관여하는 로직 또는 static한 로직을 추가하는데 사용
// ssr 지원을 위해 _documnet.tsx 에 mui에 대한 사전 작업을 해야함.
// - 서버에서 받아온 html, css 와 클라이언트가 렌더링한 html, css가 다르면 next에서 warning을 띄우게 됨
// - 서버단에서 mui를 지원함으로 서버와 클라이언트간 간극을 맞추기 위해 구현
_document.getInitialProps = async (ctx) => {
  // styled-components 서버 스타일 시트 선언
  const sheet = new ServerStyleSheet();
  // 서버가 가진 스타일 시트 선언
  const materialSheets = new ServerStyleSheets();
  // 클라이언트가 렌더링하는 페이지
  const originalRenderPage = ctx.renderPage;

  try {
    // 실제로 렌더링할때 서버가 가진 스타일 시트를 붙여서 렌더링해줌
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(materialSheets.collect(<App {...props} />)),
      });

    // 서버 단에서 mui를 지원하게끔 해줌, 그리고 이 값을 클라이언트에 보여주는 과정
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
