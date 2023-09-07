import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { DefaultSeo } from "next-seo";
import createTheme from "@mui/material/styles/createTheme";
import Layout from "../components/common/Layout";
import "../styles/font/font.css";
import { theme } from "@utils/theme";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const DEFAULT_SEO = {
  title: "일운산업",
  description: "일운산업 주식회사의 스크랩 기타자재 등 매입 문의 및 소개 사이트",
  canonical: "https://ilun.co.kr",
  // openGraph: {
  //   type: "website",
  //   locale: "ko_KR",
  //   url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
  //   title: "카카오톡, 페이스북에 링크 넣으면 올라올 타이틀",
  //   site_name: "Hyphen POS ASP",
  //   images: [
  //     {
  //       url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
  //       width: 285,
  //       height: 167,
  //       alt: "이미지",
  //     },
  //   ],
  // },
  // twitter: {
  //   handle: "@handle",
  //   site: "@site",
  //   cardType: "summary_large_image",
  // },
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
        <DefaultSeo {...DEFAULT_SEO} />
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </MuiThemeProvider>
  );
}
