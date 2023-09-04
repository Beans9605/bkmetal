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

const MainInfomation = () => {
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
      id="introduce"
    >
      <Box>
        <RequireProcessTitleBox open={hideElement}>
          <Typography variant="h5" fontWeight={600}>
            ILUN Indurstry Infomation
          </Typography>
        </RequireProcessTitleBox>
        <RequireProcessContentBox open={hideElement}>
          <Typography paddingLeft="34px">
            2012년부터 시작된 일운산업은 젊은 기업입니다. 젊은 힘으로 전국
            스크랩업체와 제휴하여 수 많은 일들을 해내고 있습니다.
          </Typography>
          <Card
            sx={{
              margin: "24px 0",
              borderRadius: "15px",
            }}
            variant="outlined"
          >
            <Carousel animation="slide" autoPlay={false}>
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
            </Carousel>
          </Card>
        </RequireProcessContentBox>
      </Box>
    </Container>
  );
};

export default MainInfomation;
