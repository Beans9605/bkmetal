import React, { useState } from "react";
import Navbar from "@container/Nav/Navbar";
import Sidebar from "@container/Nav/Sidebar";
import styles from "@styles/Home.module.css";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import { sidebarOpenState } from "@utils/recoil";
import { useRecoilState } from "recoil";
import { Box } from "@mui/material";
import SubMenu from "@container/Nav/SubMenu";
import Footer from "./display/Footer";

const drawerWidth = 240;

type LayoutProps = {
  children: any;
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
}));

const Layout = ({ children }: LayoutProps) => {
  const [_, setSideOpen] = useRecoilState(sidebarOpenState);

  const theme = useTheme();
  const upperSize = useMediaQuery(theme.breakpoints.up("md"));

  const onSidebarHandler = (open: boolean) => {
    setSideOpen(open);
  };

  return (
    <>
      <Navbar onSidebarHandler={onSidebarHandler} />
      {/* <SubMenu /> */}
      {/* <Sidebar /> */}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
