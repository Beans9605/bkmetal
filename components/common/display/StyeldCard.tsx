import React, { useEffect } from "react";
import { Card, styled, CardProps, CardTypeMap, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const PreStyledCard = styled(
  (props: CardProps & { disabled?: boolean; usedisable?: boolean }) => (
    <Card {...props} />
  )
)(({ theme, disabled, usedisable }) => ({
  borderRadius: "34px",
  padding: "1rem",
  backgroundColor: usedisable && disabled ? grey[400] : "transparent",
  pointerEvents: usedisable && disabled ? "none" : "auto",
  msUserSelect: usedisable && disabled ? "none" : "inherit",
  MozUserSelect: usedisable && disabled ? "-moz-none" : "-moz-initial",
  WebkitUserSelect: usedisable && disabled ? "none" : "inherit",
  userSelect: usedisable && disabled ? "none" : "inherit",
  animation: usedisable
    ? disabled
      ? "fadeIN 0.2s ease-in"
      : "fadeOUT 0.2s ease-in"
    : "none",

  "@keyframes fadeIN": {
    "0%": {
      backgroundColor: "transparent",
    },
    "100%": {
      backgroundColor: grey[400],
    },
  },
  "@keyframes fadeOUT": {
    "0%": {
      backgroundColor: grey[400],
    },
    "100%": {
      backgroundColor: "transparent",
    },
  },
}));

const StyeldCard = (
  props: CardProps & { disabled?: boolean; useDisable?: boolean }
) => {
  const { disabled = false, useDisable = false, ...rest } = props;

  return (
    <PreStyledCard
      variant="outlined"
      disabled={disabled}
      usedisable={useDisable}
      {...rest}
    />
  );
};

export default StyeldCard;
