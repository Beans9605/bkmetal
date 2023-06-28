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
  Select,
  MenuItem,
  SelectChangeEvent,
  selectClasses,
  inputClasses,
  outlinedInputClasses,
} from "@mui/material";
import { brown, grey } from "@mui/material/colors";
import Switch from "@component/common/input/Switch";
import Carousel from "react-material-ui-carousel";
import InputBox from "@component/common/InputBox";
import { NonFerrousMetals, ScrapMetals } from "@utils/common";
import StyledButton from "@component/common/input/StyledButton";
import RequireProcessTitleBox from "@component/main/RequireProcessTitleBox";
import RequireProcessContentBox from "@component/main/RequireProcessContentBox";

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

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "24px 0",
  backgroundColor: grey["100"],
  borderRadius: "10px",
}));

const StyledSelect_ = styled(Select)(({ theme }) => ({
  [`.${outlinedInputClasses.notchedOutline}`]: {
    border: "0",
  },
  borderRadius: "10px",
  backgroundColor: grey[100],
}));

const MainDefinition = () => {
  const [switchNum, setSwitchNum] = useState(0);
  const [hideElement, setHideElement] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [kgNumber, setKgNumber] = useState("");
  const scrollRef: React.RefObject<HTMLDivElement> = useRef(null);
  const theme = useTheme();

  const yScrollEvent = (innerHeight: number) => {
    const scroll =
      scrollRef?.current && scrollRef.current.getBoundingClientRect();
    setHideElement(scroll !== null && innerHeight > scroll.top);
  };

  const handleSelectChange = (event: any) => {
    setSelectValue(event.target.value as string);
  };

  const handleSwtichChange = (num: number) => {
    setSwitchNum(num);
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

  useEffect(() => {
    setSelectValue("");
    setKgNumber("");
  }, [switchNum]);

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
        <RequireProcessContentBox open={hideElement}>
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
                onChange={handleSwtichChange}
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
                        <Carousel animation="slide" autoPlay>
                          {NonFerrousMetals.map((nonMetal, index) => (
                            <PriceOfService key={index}>
                              <Box>
                                <Typography variant="h6">
                                  {nonMetal.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                  {nonMetal.description}
                                </Typography>
                              </Box>
                              <Typography variant="h5" fontWeight={600}>
                                ￦ {nonMetal.price}
                              </Typography>
                            </PriceOfService>
                          ))}
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
                        <Carousel animation="slide" autoPlay>
                          {ScrapMetals.map((metal, index) => (
                            <PriceOfService key={index}>
                              <Box>
                                <Typography variant="h6">
                                  {metal.title} {metal.subtitle}
                                </Typography>
                                <Typography variant="subtitle1">
                                  {metal.description}
                                </Typography>
                              </Box>
                              <Typography variant="h5" fontWeight={600}>
                                ￦ {metal.price}
                              </Typography>
                            </PriceOfService>
                          ))}
                        </Carousel>
                      </StyledCard>
                    </AnimationCardContent>
                  )}
                </StyledCard>
                <StyledCard elevation={0}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {switchNum === 0 ? "비철" : "고철"} 미리 계산
                    </Typography>

                    <StyledCard
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                      }}
                    >
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
                            <StyledSelect_
                              size="small"
                              labelId="Select Item"
                              value={selectValue}
                              onChange={(e) => handleSelectChange(e)}
                            >
                              {switchNum === 0
                                ? NonFerrousMetals.map((nonMetal, index) => (
                                    <MenuItem key={index} value={nonMetal.id}>
                                      {nonMetal.title}
                                    </MenuItem>
                                  ))
                                : ScrapMetals.map((metal, index) => (
                                    <MenuItem key={index} value={metal.id}>
                                      {metal.title}
                                    </MenuItem>
                                  ))}
                            </StyledSelect_>
                          </FormControl>
                          <FormControl>
                            <FormLabel>중량</FormLabel>
                            <InputBox
                              placeholder="중량을 입력해주세요"
                              endAdornment={"kg"}
                              type="number"
                              value={kgNumber}
                              onChange={(e) =>
                                Number(e.target.value) >= 0 &&
                                setKgNumber(e.target.value)
                              }
                            />
                          </FormControl>
                          <Box
                            sx={{
                              gridColumn: "1 / 3",
                              justify: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                "::after": {
                                  content: '"(vat별도)"',
                                  paddingLeft: "10px",
                                  fontSize: "12px",
                                  color: "red",
                                },
                              }}
                              color={grey[700]}
                            >
                              총 금액
                            </Typography>
                            <Typography
                              variant="h6"
                              textAlign="center"
                              color="red"
                            >
                              {selectValue && Number(kgNumber) > 0
                                ? Number(kgNumber) *
                                  (switchNum === 0
                                    ? NonFerrousMetals.find(
                                        (non) => non.id === selectValue
                                      )?.price || 0
                                    : ScrapMetals.find(
                                        (metal) => metal.id === selectValue
                                      )?.price || 0)
                                : 0}
                              ￦
                            </Typography>
                            <Typography padding="14px 0" textAlign={"center"}>
                              운반비, 상차비 등이 제외된 금액으로
                              <br /> 결제금액은 달라질 수 있습니다.
                            </Typography>
                            <StyledButton fullWidth>상담신청</StyledButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </StyledCard>
                  </CardContent>
                </StyledCard>
              </Box>
            </CardContent>
          </StyledCard>
        </RequireProcessContentBox>
      </Box>
    </Container>
  );
};

export default MainDefinition;
