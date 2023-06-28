import React from "react";
import { styled, BoxProps, Box } from "@mui/material";

const RequireProcessTitleBox = styled(
  (props: BoxProps & { open?: boolean }) => {
    return <Box {...props} />;
  }
)(({ theme, open }) => ({
  display: "flex",
  animation: open
    ? `aniopen 1000ms ${theme.transitions.easing.easeInOut}`
    : "inherit",
  "@keyframes aniopen": {
    from: {
      opacity: 0,
      transform: "translate(0, -20px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  },
  "@keyframes aniscaleup": {
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  },
  "::before": {
    animation: open
      ? `aniscaleup 1000ms ${theme.transitions.easing.easeInOut}`
      : "inherit",
    width: "24px",
    height: "24px",
    borderRadius: "24px",
    backgroundColor: "gray",
    content: '""',
    marginRight: "10px",
  },
}));

export default RequireProcessTitleBox;
