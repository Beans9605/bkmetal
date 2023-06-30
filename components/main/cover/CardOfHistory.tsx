import React from "react";
import { styled, Box } from "@mui/material";

const CardOfHistory = styled(Box)(({ theme }) => ({
  position: "absolute",

  [theme.breakpoints.up("md")]: {
    top: "21vh",
    right: "10%",
  },
  [theme.breakpoints.up("sm")]: {
    right: "7%",
  },
  right: "5%",
  top: "21px",
}));

export default CardOfHistory;
