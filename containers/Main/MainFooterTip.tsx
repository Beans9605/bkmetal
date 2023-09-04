import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RequireProcessTitleBox from "@component/main/RequireProcessTitleBox";
import RequireProcessContentBox from "@component/main/RequireProcessContentBox";
import BKCoverImage2 from "@assets/img/bkimg/bkmetal_2.jpeg";

const MainFooterTip = () => {
  const theme = useTheme();
  const upperSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [hideElement, setHideElement] = useState(false);
  const yScrollEvent = (innerHeight: number) => {
    const scroll =
      scrollRef?.current && scrollRef.current.getBoundingClientRect();
    setHideElement(scroll !== null && innerHeight > scroll.top);
  };
  const scrollRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (!scrollRef?.current) return;

    document.addEventListener("scroll", () => yScrollEvent(window.innerHeight));

    return () => {
      document.removeEventListener("scroll", () =>
        yScrollEvent(window.innerHeight)
      );
    };
  }, [scrollRef]);

  return (
    <Container
      sx={{
        paddingTop: "24px",
      }}
      ref={scrollRef}
      id="order-tip"
    >
      <Box>
        <RequireProcessTitleBox open={hideElement}>
          <Typography variant="h5" fontWeight={600}>
            Order Tip
          </Typography>
        </RequireProcessTitleBox>
        <RequireProcessContentBox open={hideElement}>
          <Card
            sx={{
              margin: "0",
              borderRadius: "15px",
              display: "flex",
            }}
            variant="outlined"
            elevation={0}
          >
            <CardMedia
              sx={{
                width: "50%",
                height: 250,
              }}
              image={BKCoverImage2.src}
            />
            <CardContent
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            >
              <Typography
                gutterBottom
                variant={upperSm ? "h6" : "subtitle1"}
                fontWeight={600}
                component="div"
              >
                주문 전 이용팁
              </Typography>
              <Typography
                variant={upperSm ? "body1" : "caption"}
                component="div"
              >
                1. 꼭, 계량은 공인 계량소에서 하기
              </Typography>
              <Typography
                variant={upperSm ? "body1" : "caption"}
                component="div"
              >
                2. 꼭, 공차, 총중량 계량 시 계량소에서 직접 확인하기
              </Typography>
              <Typography
                variant={upperSm ? "body1" : "caption"}
                component="div"
              >
                3. 꼭, 계량 증명서 받고 보관하기
              </Typography>
            </CardContent>
          </Card>
        </RequireProcessContentBox>
      </Box>
    </Container>
  );
};

export default MainFooterTip;
