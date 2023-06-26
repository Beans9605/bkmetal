import React, { useState } from "react";
import {
  styled,
  Paper,
  Tabs,
  Tab,
  Box,
  BoxProps,
  TabsProps,
} from "@mui/material";

const StyledTextBox = styled((props: BoxProps & { isselected?: boolean }) => (
  <Box {...props} />
))(({ theme, isselected }) => ({
  color: isselected ? "white" : "inherit",
  animation:
    typeof isselected === "boolean"
      ? isselected
        ? "selected 0.1s ease-in"
        : "unSelected 0.1s ease-in"
      : "none",

  "@keyframes selected": {
    "0%": {
      color: "inherit",
    },
    "100%": {
      color: "white",
    },
  },
  "@keyframes unSelected": {
    "0%": {
      color: "white",
    },
    "100%": {
      color: "inherit",
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: "2rem",
  height: "100%",
  zIndex: "3",
  borderRadius: 40,
  padding: "7px",
}));

const StyledTabs = styled(
  (
    props: TabsProps & {
      onChange?: Function;
    }
  ) => (
    <Tabs
      TabIndicatorProps={{
        sx: {
          minHeight: "inherit",
          height: "100%",
          zIndex: "1",
          borderRadius: 40,
        },
      }}
      sx={{
        minHeight: "inherit",
        height: "100%",
      }}
      variant="fullWidth"
      {...props}
    />
  )
)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    minHeight: "inherit",
    height: "100%",
  },
}));

const SlideToggleButtonGroup = (
  props: TabsProps & {
    toggleValues: Array<{ key: string; value: any }>;
    startIndex?: number;
    minHeight?: string;
  }
) => {
  const { toggleValues, startIndex = 0, onChange, minHeight, ...rest } = props;

  const [indexValue, setIndexValue] = useState(startIndex);

  const handleIndexChange = (event: React.SyntheticEvent, newValue: number) => {
    if (onChange && typeof onChange === "function")
      onChange(event, toggleValues[newValue].key);
    setIndexValue(newValue);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 40,
        padding: "4px",
        minHeight: minHeight || "2.3rem",
        height: "inherit",
      }}
    >
      <StyledTabs value={indexValue} onChange={handleIndexChange} {...rest}>
        {toggleValues?.length > 0 &&
          toggleValues.map((value, index) => (
            <StyledTab
              sx={{}}
              key={index}
              label={
                <StyledTextBox isselected={indexValue === index}>
                  {value.value}
                </StyledTextBox>
              }
            />
          ))}
      </StyledTabs>
    </Paper>
  );
};

export default SlideToggleButtonGroup;
