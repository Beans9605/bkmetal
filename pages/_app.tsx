import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { DefaultSeo } from "next-seo";
import Layout from "../components/common/Layout";
import "../styles/font/font.css";
import { theme } from "@utils/theme";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import IlunTitleImg from '@assets/img/bkimg/bk_mainframe_pic.png'

const DEFAULT_SEO = {
  title: "일운산업",
  description: "일운산업 주식회사의 스크랩 기타자재 등 매입 문의 및 소개 사이트",
  canonical: "https://ilun.co.kr",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ilun.co.kr",
    title: "일운산업",
    site_name: "일운산업 고철/비철/기타자재 매입 사이트",
    images: [
      {
        url: `https://ilun.co.kr/${IlunTitleImg.src}`,
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
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
