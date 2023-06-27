import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container, styled, Box, Typography, BoxProps } from "@mui/material";
// "@keyframes aniopen": {
//   from: {
//     transfrom: 'scale(0)'
//   },
//   to: {
//     transform: 'scale(1)'
//   }
// },
// "@keyframes aniclose": {

// }

const RequireProcessTitleBox = styled(
  (props: BoxProps & { open?: boolean }) => {
    return <Box {...props} />;
  }
)(({ theme, open }) => ({
  animation: open
    ? `aniopen 4000ms ${theme.transitions.easing.easeInOut}`
    : "inherit",
  "@keyframes aniopen": {
    from: {
      opacity: 0,
      transfrom: "translate(0, -100px)",
    },
    to: {
      opacity: 1,
      transfrom: "translate(0, 0)",
    },
  },
}));

const MainDefinition = () => {
  const [scrollNumber, setScrollNumber] = useState(0);
  const [hideElement, setHideElement] = useState(false);
  const scrollRef: React.RefObject<HTMLDivElement> = useRef(null);

  const yScrollEvent = () => {
    const scroll =
      scrollRef.current && scrollRef.current.getBoundingClientRect();
    setHideElement(scroll !== null && window.innerHeight > scroll.top);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    return () => {
      window.removeEventListener("scroll", yScrollEvent);
    };
  }, [scrollRef]);

  return (
    <Container ref={scrollRef}>
      <RequireProcessTitleBox open={hideElement}>
        <Typography>Hello Data</Typography>
      </RequireProcessTitleBox>
    </Container>
  );
};

export default MainDefinition;
