import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Container,
  styled,
  Box,
  Typography,
  BoxProps,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { brown, grey } from "@mui/material/colors";
import Switch from "@component/common/input/Switch";
import Carousel from "react-material-ui-carousel";
import InputBox from "@component/common/InputBox";

const AnimationCardContent = styled(CardContent)(({ theme }) => ({
  animation: `aniopacity 1000ms ${theme.transitions.easing.easeInOut}`,

  "@keyframes aniopacity": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

const PriceOfService = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const RequireProcessTitleBox = styled(
  (props: BoxProps & { open?: boolean }) => {
    return <Box {...props} />;
  }
)(({ theme, open }) => ({
  // padding: "0 30px",
  display: "flex",
  animation: open
    ? `aniopen 1000ms ${theme.transitions.easing.easeInOut}`
    : "inherit",
  "@keyframes aniopen": {
    from: {
      opacity: 0,
      transform: "translate(0, -20px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  },
  "@keyframes aniscaleup": {
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  },
  "::before": {
    animation: open
      ? `aniscaleup 1000ms ${theme.transitions.easing.easeInOut}`
      : "inherit",
    width: "24px",
    height: "24px",
    borderRadius: "24px",
    backgroundColor: "gray",
    content: '""',
    marginRight: "10px",
  },
}));

const RequreProcessContentBox = styled(
  (props: BoxProps & { open?: boolean }) => {
    return <Box {...props} />;
  }
)(({ theme, open }) => ({
  animation: open
    ? `contentOpen 1000ms ${theme.transitions.easing.easeInOut}`
    : "inherit",
  "@keyframes contentOpen": {
    from: {
      opacity: 0,
      transform: "translate(0, 200px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  },
  "@keyframes aniscaleup": {
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  },
  padding: "10px 0",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "24px 0",
  backgroundColor: grey["100"],
  borderRadius: "10px",
}));

const StyledCardTitle = styled(Box)(({ theme }) => ({
  padding: "20px 15px",
}));

const MainDefinition = () => {
  const [switchNum, setSwitchNum] = useState(0);
  const [hideElement, setHideElement] = useState(false);
  const scrollRef: React.RefObject<HTMLDivElement> = useRef(null);
  const theme = useTheme();

  const yScrollEvent = (innerHeight: number) => {
    const scroll =
      scrollRef?.current && scrollRef.current.getBoundingClientRect();
    setHideElement(scroll !== null && innerHeight > scroll.top);
  };

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
            Our Service
          </Typography>
        </RequireProcessTitleBox>
        <RequreProcessContentBox open={hideElement}>
          <Typography paddingLeft="34px">
            BK 에서는 모든 폐 자재를 취급합니다. 주로 비철 / 고철 자재를
            취급하여 구매합니다.
          </Typography>
          <StyledCard
            sx={{
              padding: "10px",
            }}
            elevation={0}
          >
            <CardContent>
              <Switch
                onState={switchNum}
                onChange={(number: any) => setSwitchNum(number)}
                onLabel={
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={switchNum === 0 ? 700 : 400}
                      lineHeight={0.8}
                    >
                      비철
                    </Typography>
                    <Typography color="primary.light">
                      non-ferrous metal
                    </Typography>
                  </Box>
                }
                offLabel={
                  <Box>
                    <Typography
                      fontWeight={switchNum === 1 ? 700 : 400}
                      variant="subtitle1"
                    >
                      고철
                    </Typography>
                    <Typography color="primary.light" lineHeight={0.8}>
                      scrap metal
                    </Typography>
                  </Box>
                }
              />
              <Box
                sx={{
                  display: "grid",
                  [theme.breakpoints.up("md")]: {
                    gridTemplateColumns: "1fr 1fr",
                  },
                  gridTemplateColumns: "1fr",
                  gap: 2,
                }}
              >
                <StyledCard elevation={0}>
                  {switchNum === 0 ? (
                    <AnimationCardContent>
                      <Typography variant="h6" fontWeight={600}>
                        비철 시세
                      </Typography>
                      <StyledCard
                        sx={{
                          backgroundColor: "white",
                        }}
                        variant="outlined"
                      >
                        <Carousel animation="slide" autoPlay indicators={false}>
                          <PriceOfService>
                            <Box>
                              <Typography variant="h6">A동(꽈베기)</Typography>
                              <Typography variant="subtitle1">
                                (도착도, vat별도)
                              </Typography>
                            </Box>
                            <Typography variant="h5" fontWeight={600}>
                              ￦ 10,100
                            </Typography>
                          </PriceOfService>
                          <PriceOfService>
                            <Typography variant="h6">
                              상동
                              <Typography variant="subtitle1">
                                (도착도, vat별도)
                              </Typography>
                            </Typography>
                            <Typography variant="h5" fontWeight={600}>
                              ￦ 9,600
                            </Typography>
                          </PriceOfService>
                        </Carousel>
                      </StyledCard>
                    </AnimationCardContent>
                  ) : (
                    <AnimationCardContent>
                      <Typography variant="h6" fontWeight={600}>
                        고철 시세
                      </Typography>
                      <StyledCard
                        sx={{
                          backgroundColor: "white",
                        }}
                        variant="outlined"
                      >
                        <Carousel animation="slide" autoPlay indicators={false}>
                          <PriceOfService>
                            <Box>
                              <Typography variant="h6">
                                중량b (도착도)
                              </Typography>
                              <Typography variant="subtitle1">
                                (단일 20ton 이상 +@)
                              </Typography>
                            </Box>
                            <Typography variant="h5" fontWeight={600}>
                              ￦ 440
                            </Typography>
                          </PriceOfService>
                          <PriceOfService>
                            <Box>
                              <Typography variant="h6">
                                경량a (도착도)
                              </Typography>
                              <Typography variant="subtitle1">
                                (단일 20ton 이상 +@)
                              </Typography>
                            </Box>
                            <Typography variant="h5" fontWeight={600}>
                              ￦ 420
                            </Typography>
                          </PriceOfService>
                        </Carousel>
                      </StyledCard>
                    </AnimationCardContent>
                  )}
                </StyledCard>
                <StyledCard elevation={0}>
                  <CardContent>
                    <StyledCard
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                      }}
                    >
                      <StyledCardTitle>
                        <Typography variant="h5" fontWeight={800}>
                          미리 계산
                        </Typography>
                      </StyledCardTitle>
                      <CardContent>
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 2,
                          }}
                        >
                          <FormControl>
                            <FormLabel>품목</FormLabel>
                            <InputBox placeholder="품목을 입력해주세요" />
                          </FormControl>
                          <FormControl>
                            <FormLabel>중량</FormLabel>
                            <InputBox
                              placeholder="중량을 입력해주세요"
                              endAdornment={"kg"}
                              type="number"
                            />
                          </FormControl>
                        </Box>
                      </CardContent>
                    </StyledCard>
                  </CardContent>
                </StyledCard>
              </Box>
            </CardContent>
          </StyledCard>
        </RequreProcessContentBox>
      </Box>
    </Container>
  );
};

export default MainDefinition;
