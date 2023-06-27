import React from "react";
import { styled, Typography } from "@mui/material";

const CatchPrize = styled(Typography)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  bottom: "10%",
  textAlign: "center",
  textShadow: "1px 1px 1px white",
}));
export default CatchPrize;
