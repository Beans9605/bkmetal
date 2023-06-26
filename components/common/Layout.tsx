import React, { useState } from "react";
import Navbar from "@container/Nav/Navbar";
import Sidebar from "@container/Nav/Sidebar";
import styles from "@styles/Home.module.css";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import { sidebarOpenState } from "@utils/recoil";
import { useRecoilState } from "recoil";
import { Box } from "@mui/material";

const drawerWidth = 240;

type LayoutProps = {
  children: any;
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Layout = ({ children }: LayoutProps) => {
  const [sideOpen, setSideOpen] = useRecoilState(sidebarOpenState);

  // const [sideOpen, setSideOpen] = useState(false);

  const theme = useTheme();
  const upperSize = useMediaQuery(theme.breakpoints.up("md"));

  const onSidebarHandler = (open: boolean) => {
    setSideOpen(open);
  };

  return (
    <div className={styles.layout}>
      <Navbar onSidebarHandler={onSidebarHandler} />
      <Sidebar />
      <Main open={upperSize && sideOpen}>
        <Box sx={{ marginLeft: "240px" }}>{children}</Box>
      </Main>
    </div>
  );
};

export default Layout;
