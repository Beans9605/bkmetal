import React from "react";
import { styled, Box } from "@mui/material";

const InnerMainFrame = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "64px",
  left: 0,
  width: "100%",
  height: "calc(100% - 64px)",
}));

export default InnerMainFrame;
