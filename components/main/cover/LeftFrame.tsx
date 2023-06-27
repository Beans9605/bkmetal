import React from "react";
import { styled, Box } from "@mui/material";
import BKCoverRusty from "@assets/img/bkimg/bk_mainframe_rusty.jpg";

const LeftFrame = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BKCoverRusty.src})`,
  backgroundSize: "cover",
  width: "50%",
}));

export default LeftFrame;
