import React, { useReducer } from "react";
import {
  Card,
  Typography,
  CardContent,
  Paper,
  IconButton,
  styled,
  Box,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  "&.MuiCardContent-root": {
    "&:last-child": {
      padding: "16px",
    },
  },
}));

const TitledTypography = styled(Typography)(({ theme }) => ({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
}));

interface InfoCountProps {
  /**
   * fontSize
   * @description px, rem 등등 일반적인 사이즈 입력
   *
   * @example '1px'
   */
  unitName?: string;
  name: string;
  value: any;
  count?: number;
  onCountChange?: Function;
}

const InfoCount = (props: InfoCountProps) => {
  const { unitName, name, value, count = 0, onCountChange } = props;

  const theme = useTheme();

  const reducer = (
    state: number,
    action: { type: "INCREASE" | "DECREASE" }
  ) => {
    switch (action.type) {
      case "INCREASE":
        if (onCountChange && typeof onCountChange === "function")
          onCountChange(state + 1);
        return state + 1;
      case "DECREASE":
        if (state < 1) return state;
        if (onCountChange && typeof onCountChange === "function")
          onCountChange(state - 1);
        return state - 1;
      default:
        return state;
    }
  };

  const [countState, dispatch] = useReducer(reducer, count);

  return (
    <Card
      elevation={0}
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <StyledCardContent
        sx={{
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <TitledTypography color="primary">{name}</TitledTypography>
        <Paper
          elevation={0}
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1,
            padding: "8px",
          }}
        >
          <IconButton
            sx={{
              border: (theme) => `1px solid ${theme.palette.divider}`,
              flex: 1,
              aspectRatio: "1 / 1",
            }}
            onClick={() => dispatch({ type: "INCREASE" })}
            size="small"
          >
            <AddIcon fontSize={"inherit"} />
          </IconButton>
          <TitledTypography alignSelf="center" textAlign="center">
            {countState}
          </TitledTypography>
          <IconButton
            size="small"
            sx={{
              border: (theme) => `1px solid ${theme.palette.divider}`,
              aspectRatio: "1 / 1",
            }}
            onClick={() => dispatch({ type: "DECREASE" })}
          >
            <RemoveIcon fontSize={"inherit"} />
          </IconButton>
        </Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TitledTypography color="primary" fontWeight={600}>
            {value}
          </TitledTypography>

          {unitName && (
            <TitledTypography color={"primary"}>{unitName}</TitledTypography>
          )}
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default InfoCount;
