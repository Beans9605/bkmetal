import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@utils/theme";
import { Box, Divider } from "@mui/material";

const ChangeTabFirst = keyframes`
    from {
        transform: translate(0, 3rem);
    }
    to {
        transform: translate(0, 0);
    }
`;

const ChangeTabSecond = keyframes`
    from {
        transform: translate(0, -3rem);
    }
    to {
        transform: translate(0, 0);
    }
`;

const StyledSwitch = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.palette.primary.light};
  background-color: ${theme.palette.primary.light};
  border-radius: 0.5rem;
  height: 6rem;
  width: 1.8rem;
`;

const OnTabBox = styled.div<{ onClickTab?: boolean }>`
  width: 1.7rem;
  height: 3rem;
  background-color: ${theme.palette.primary.main};
  border-radius: 0.5rem;
  animation: ${(props) => (props.onClickTab ? ChangeTabFirst : "inherit")}
    1000ms ${theme.transitions.easing.easeInOut};
  opacity: ${(props) => (props.onClickTab ? "1" : "0")};
  cursor: ${(props) => (props.onClickTab ? "initial" : "pointer")};
`;

const OffTabBox = styled.div<{ onClickTab?: boolean }>`
  width: 1.7rem;
  height: 3rem;
  background-color: ${theme.palette.primary.main};
  border-radius: 0.5rem;
  animation: ${(props) => (props.onClickTab ? ChangeTabSecond : "inherit")}
    1000ms ${theme.transitions.easing.easeInOut};
  opacity: ${(props) => (props.onClickTab ? "1" : "0")};
  cursor: ${(props) => (props.onClickTab ? "initial" : "pointer")};
`;

const Switch = (props: {
  onChange?: Function;
  onLabel?: any;
  offLabel?: any;
  onState?: number;
}) => {
  const { onChange, onLabel, offLabel, onState } = props;

  const [tabState, setTabState] = useState(onState || 0);

  const onClickHandler = (num: number) => {
    setTabState(num);
  };

  useEffect(() => {
    if (onChange) {
      onChange(tabState);
    }
  }, [tabState, onChange]);

  return (
    <Box sx={{ display: "flex" }}>
      <StyledSwitch>
        <OnTabBox
          onClickTab={tabState === 0}
          onClick={() => onClickHandler(0)}
        />

        <OffTabBox
          onClickTab={tabState === 1}
          onClick={() => onClickHandler(1)}
        />
      </StyledSwitch>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "10px",
        }}
      >
        <Box>{onLabel}</Box>
        <Divider />
        <Box>{offLabel}</Box>
      </Box>
    </Box>
  );
};

export default Switch;
