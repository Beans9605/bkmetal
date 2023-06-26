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

const drawerWidth = 240;

type NavbarType = {
  onSidebarHandler?: Function;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = (props: NavbarType) => {
  const { onSidebarHandler } = props;

  const router = useRouter();

  const [sideOpen, setSideOpen] = useRecoilState(sidebarOpenState);
  const [scrolled, setScrolled] = useState(false);

  const onHomeClickHandler = (e: any) => {
    e.preventDefault();
    setSideOpen((prestate) => !prestate);
  };

  const handleScroll = useCallback(() => {
    const scrollnumber = window?.scrollY;
    if (scrollnumber && scrollnumber > 0) {
      setScrolled(true);
    } else if (scrolled) {
      setScrolled(false);
    }
  }, [scrolled]);

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
      open={upperSize && sideOpen}
      color={scrolled ? "inherit" : "transparent"}
      elevation={scrolled ? 1 : 0}
      sx={{
        visibility: scrolled ? "visible" : "hidden",
      }}
      position="fixed"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<FactoryIcon color="primary" />}
          color="inherit"
          onClick={() => router.push("/")}
          sx={{
            height: "64px",
          }}
          size="large"
        >
          <Typography variant="h5" color="primary">
            BK Metal
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
