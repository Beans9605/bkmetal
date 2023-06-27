import React from "react";
import { styled } from "@mui/material";
import Image from "next/image";

const MainCoverImage = styled(Image)(({ theme }) => ({
  transform: "translate(-50%, -54%)",
  position: "absolute",
  left: "50%",
  top: "50%",
  animation: `setup 1000ms ${theme.transitions.easing.easeInOut}`,
  "@keyframes setup": {
    from: {
      opacity: 0,
      transform: "translate(-50%, -60%)",
    },
    to: {
      opacity: 1,
      transform: "translate(-50%, -54%)",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "16rem",
  },
  width: "12rem",
  objectFit: "contain",
}));

export default MainCoverImage;
