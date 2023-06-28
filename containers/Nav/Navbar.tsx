import {
  IconButton,
  Toolbar,
  styled,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React, { useState, useEffect, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilState } from "recoil";
import { sidebarOpenState } from "../../utils/recoil";

import { useRouter } from "next/router";
import FactoryIcon from "@mui/icons-material/Factory";
import BKIcon from "@assets/icon/bk_iron.png";
import Image from "next/image";

const drawerWidth = 240;

type NavbarType = {
  onSidebarHandler?: Function;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled((props: AppBarProps & { scrolled?: boolean }) => {
  return <MuiAppBar {...props} />;
})<AppBarProps>(({ theme, scrolled }) => ({
  ...(scrolled
    ? {
        animation: `close 1000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-200%)",
      }
    : {
        animation: `open 1000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 1,
      }),

  "@keyframes close": {
    from: {
      opacity: 1,
      transform: "translateY(0)",
    },
    to: {
      opacity: 0,
      transform: "translateY(-200%)",
    },
  },

  "@keyframes open": {
    from: {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Navbar = (props: NavbarType) => {
  const { onSidebarHandler } = props;

  const router = useRouter();

  const [sideOpen, setSideOpen] = useRecoilState(sidebarOpenState);
  const [scrollYNum, setScrollYNum] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const onHomeClickHandler = (e: any) => {
    e.preventDefault();
    setSideOpen((prestate) => !prestate);
  };

  const handleScroll = useCallback(() => {
    if (window) {
      const scrollnumber = window?.scrollY;
      if (scrollnumber && scrollnumber > scrollYNum) {
        setScrolled(true);
      } else if (scrolled) {
        setScrolled(false);
      }
      setScrollYNum(scrollnumber);
    }
  }, [scrolled, scrollYNum]);

  const theme = useTheme();
  const upperSize = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    onSidebarHandler && onSidebarHandler(sideOpen);
  }, [sideOpen, onSidebarHandler]);

  return (
    <AppBar
      elevation={0}
      scrolled={scrolled}
      color={"inherit"}
      position="sticky"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<Image src={BKIcon} alt="bkicon" width={40} />}
          color="inherit"
          onClick={() => router.push("/")}
          sx={{
            height: "64px",
          }}
          size="large"
        >
          <Typography variant="h4" color="primary">
            BK
          </Typography>
        </Button>
        <IconButton onClick={onHomeClickHandler}>
          {sideOpen ? (
            <CloseIcon fontSize="small" />
          ) : (
            <MenuIcon fontSize="small" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
