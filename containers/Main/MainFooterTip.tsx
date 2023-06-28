import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import RequireProcessTitleBox from "@component/main/RequireProcessTitleBox";
import RequireProcessContentBox from "@component/main/RequireProcessContentBox";
import BKCoverImage from "@assets/img/bkimg/bkmetal_1.jpeg";
import BKCoverImage2 from "@assets/img/bkimg/bkmetal_2.jpeg";

import { grey } from "@mui/material/colors";
import Carousel from "react-material-ui-carousel";

const MainFooterTip = () => {
  const theme = useTheme();
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
              image={BKCoverImage.src}
            />
            <CardContent
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={600}
                component="div"
              >
                주문 전 이용팁
              </Typography>
              <Typography component="div">
                1. 꼭, 계량은 공인 계량소에서 하기
              </Typography>
              <Typography component="div">
                2. 꼭, 공차, 총중량 계량 시 계량소에서 직접 확인하기
              </Typography>
              <Typography component="div">
                3. 꼭, 계량 증명서 받고 보관하기
              </Typography>
            </CardContent>
            {/* <Carousel animation="slide" autoPlay={false}>
              <Box>
                <CardMedia
                  sx={{
                    height: 500,
                  }}
                  image={BKCoverImage.src}
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                    비철
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    fontWeight={300}
                    color={theme.palette.primary.main}
                  >
                    Non-Ferrous Metal
                  </Typography>
                  <Typography variant="body2">
                    광의의 비철금속은 철 이외의 모든 금속을 말하며 그 종류가
                    대단히 많습니다. 대표적인 것으로는
                    구리(銅)·납(鉛)·아연(亞鉛)·주석(朱錫) 등을 들 수 있습니다.
                    구리광은 미국·칠레·러시아·잠비아·캐나다·콩고 등지에 편재해
                    있습니다. 미국은 세계 총생산고의 1／5을 생산하면서도 부족한
                    상태에 있습니다. 납과 아연은 일반적으로 함께 산출됩니다.
                    BK는 이 모든 비철 자재를 구매 및 처리하는 일을 빠르고
                    완벽하게 해냅니다.
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardMedia
                  sx={{
                    height: 500,
                  }}
                  image={BKCoverImage2.src}
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                    고철
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    fontWeight={300}
                    color={theme.palette.primary.main}
                  >
                    Scap Metal
                  </Typography>
                  <Typography variant="body2">
                    고철(scrap metal)은 차량 부품, 건물 부속, 잉여 물질 등 제품
                    제조와 소비를 통해 남은 재활용 가능한 물질들로 구성된다.
                    폐기물과 달리 고철은 금전적인 가치가 있습니다. 스크랩은 사업
                    및 주거 환경에서 기원한다. 일반적으로 스크래퍼는 스크랩
                    물질이 불필요한 사람들을 위해 스크랩 물질을 간편하게
                    제거해주는 서비스를 광고합니다. BK는 이 모든 고철 자재를
                    구매 및 처리하는 일을 빠르고 완벽하게 해냅니다.
                  </Typography>
                </CardContent>
              </Box>
            </Carousel> */}
          </Card>
        </RequireProcessContentBox>
      </Box>
    </Container>
  );
};

export default MainFooterTip;
