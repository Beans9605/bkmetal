import React from "react";
import { styled } from "@mui/material";

const CardOfHistorySpan = styled("span")(({ theme }) => ({
  paddingLeft: "46px",
  position: "absolute",
  right: 0,
  "::before": {
    content: '"Since"',
    position: "absolute",
    left: 0,
    bottom: 0,
    fontSize: "0.875rem",
  },
}));

export default CardOfHistorySpan;
