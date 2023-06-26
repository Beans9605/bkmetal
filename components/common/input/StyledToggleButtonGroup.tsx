import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  styled,
  Paper,
  ToggleButtonGroupProps,
} from "@mui/material";

const PreStyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    // "&:not(:first-of-type)": {
    //   borderRadius: 40,
    // },
    // "&:first-of-type": {
    //   borderRadius: 40,
    // },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  // "&.Mui-selected": {
  //   backgroundColor: theme.palette.primary.main,
  //   color: "white",
  //   "&:hover": {
  //     backgroundColor: theme.palette.primary.main,
  //     color: "white",
  //   },
  // },
}));

const StyledToggleButtonGroup = (
  props: ToggleButtonGroupProps & {
    toggleValues: Array<{ key: string; value: any }>;
  }
) => {
  const { toggleValues, ...rest } = props;

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: "wrap",
        // borderRadius: 40,
      }}
    >
      <PreStyledToggleButtonGroup fullWidth size="small" {...rest}>
        {toggleValues.map((value, index) => (
          <StyledToggleButton color="primary" key={index} value={value.key}>
            {value.value}
          </StyledToggleButton>
        ))}
      </PreStyledToggleButtonGroup>
    </Paper>
  );
};

export default StyledToggleButtonGroup;
