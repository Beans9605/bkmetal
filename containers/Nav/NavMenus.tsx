import { Box, Button, styled } from "@mui/material";
import React from "react";

const NavMenusBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavMenus = () => {
  return (
    <NavMenusBox>
      <Button color="inherit" href="#introduce">회사소개</Button>
      <Button color="inherit" href="#scrap-table">스크랩 분류 기준표</Button>
      <Button color="inherit" href="#order-tip">자주하는 질문</Button>
      <Button color="inherit">고객 센터</Button>
    </NavMenusBox>
  );
};

export default NavMenus;
