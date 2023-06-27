import React from "react";
import { styled, Box } from "@mui/material";

const CardOfHistory = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "10%",
  [theme.breakpoints.up("md")]: {
    top: "21vh",
  },
  top: "21px",
}));

export default CardOfHistory;
