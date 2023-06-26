import React from "react";
import { styled, Button, withStyles, ButtonProps } from "@mui/material";

const PreStyledButton = styled(Button)(({ theme, fullWidth, disabled }) => ({
  borderRadius: fullWidth ? "12px" : "8px",
  "&.Mui-disabled": {
    color: "white",
  },
  textTransform: "none",
}));

const StyledButton = (props: ButtonProps) => {
  return <PreStyledButton variant="contained" disableElevation {...props} />;
};

export default StyledButton;
