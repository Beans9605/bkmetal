import React from "react";
import { styled, BoxProps, Box } from "@mui/material";

const RequreProcessContentBox = styled(
  (props: BoxProps & { open?: boolean }) => {
    return <Box {...props} />;
  }
)(({ theme, open }) => ({
  animation: open
    ? `contentOpen 1000ms ${theme.transitions.easing.easeInOut}`
    : "inherit",
  "@keyframes contentOpen": {
    from: {
      opacity: 0,
      transform: "translate(0, 200px)",
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
  padding: "10px 0",
}));

export default RequreProcessContentBox;
