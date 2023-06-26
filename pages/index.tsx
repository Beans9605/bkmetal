import Alert from "@component/common/display/Alert";
import InfoCount from "@component/common/display/InfoCount";
import SlideToggleButtonGroup from "@component/common/input/SlideToggleButtonGroup";
import StyledButton from "@component/common/input/StyledButton";
import StyledToggleButtonGroup from "@component/common/input/StyledToggleButtonGroup";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  ImageListItem,
  ImageListItemBar,
  Paper,
  PaperProps,
  Typography,
  styled,
} from "@mui/material";
import { useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import BKMetalImage from "../assets/img/bkimg/bkmetal_1.jpeg";
import BKMetalImage2 from "../assets/img/bkimg/bkmetal_2.jpeg";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import AlarmIcon from "@mui/icons-material/Alarm";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba( 50, 50, 50, 0)",
  textAlign: "center",
  textShadow: "black 1px 0 3px",
  color: "white",
}));

const CarouselItem = styled(
  (props: PaperProps & { backgroundImage?: string }) => {
    const { backgroundImage, ...rest } = props;

    return (
      <Paper
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        {...rest}
      />
    );
  }
)(() => ({
  width: "100vw",
  height: "100vh",
}));

const StyledCarouselImage = styled(Image)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
}));

export default function Home() {
  const toggleValues = useMemo<Array<{ key: string; value: any }>>(
    () => [
      {
        key: "day",
        value: "일",
      },
      {
        key: "week",
        value: "주",
      },
      {
        key: "month",
        value: "월",
      },
      {
        key: "self",
        value: "직접",
      },
    ],
    []
  );

  const [excludsiveToggleValue, setExcludsiveToggleValue] = useState("day");
  const [toggleValue, setToggleValue] = useState(["day"]);

  const excludsiveHandleToggles = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    setExcludsiveToggleValue(newValue);
  };

  const handleToggles = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string[]
  ) => {
    setToggleValue(newValue);
  };

  console.log(BKMetalImage);

  const [Chicken, setChickenCount] = useState(1);

  const [openAlert, setOpenAlert] = useState(false);

  return (
    <Box>
      <Carousel animation="slide" autoPlay={false} swipe indicators={false}>
        <CarouselItem square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignContent: "center",
              height: "100vh",
            }}
          >
            {/* <Image src={BKMetalImage} alt="BKMetal" sizes="cover" /> */}
            <StyledCard elevation={0} square>
              <CardContent>
                <Typography variant="h2">Select your bussiness</Typography>
                {/* <Typography variant="h4">Choose the best trade</Typography> */}
              </CardContent>
            </StyledCard>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  width: "25%",
                  padding: "10px",
                }}
              >
                <Avatar>
                  <AlarmIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="body2">비철이란?</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  textAlign: "center",
                  width: "25%",
                  padding: "10px",
                }}
              >
                <Avatar>
                  <AlarmIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="body2">비철이란?</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  textAlign: "center",
                  width: "25%",
                  padding: "10px",
                }}
              >
                <Avatar>
                  <AlarmIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="body2">비철이란?</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </CarouselItem>
        <CarouselItem square backgroundImage={BKMetalImage2.src}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              height: "100vh",
            }}
          >
            <StyledCard elevation={0} square>
              <CardContent>
                <Typography variant="h2">BK Metal</Typography>
                <Typography variant="h4">Infomation</Typography>
              </CardContent>
            </StyledCard>
          </Box>
        </CarouselItem>
      </Carousel>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 2,
          paddingBottom: "30px",
        }}
      >
        <Box>
          <StyledButton fullWidth>버튼 예시</StyledButton>
        </Box>
        <Box>
          <StyledToggleButtonGroup
            value={excludsiveToggleValue}
            toggleValues={toggleValues}
            onChange={excludsiveHandleToggles}
            exclusive
          />
        </Box>
        <Box>
          <StyledToggleButtonGroup
            value={toggleValue}
            toggleValues={toggleValues}
            onChange={handleToggles}
          />
        </Box>
        <InfoCount
          name="앙념치킨"
          value={"35,000"}
          unitName="원"
          count={Chicken}
          onCountChange={setChickenCount}
        />
        <Box>
          <SlideToggleButtonGroup toggleValues={toggleValues} />
        </Box>
        <Box>
          <StyledButton
            onClick={() => {
              setOpenAlert((pre) => !pre);
            }}
            fullWidth
            variant="outlined"
          >
            얼럿창 띄우기
          </StyledButton>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible>
          <Paper>
            <h2>테스트1</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트2</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>

          <Paper>
            <h2>테스트3</h2>
            <p>asdfasdf</p>
            <StyledButton>Check it out!</StyledButton>
          </Paper>
        </Carousel>
      </Box>
      <Alert
        open={openAlert}
        onClose={() => setOpenAlert((pre) => !pre)}
        // onAccess={() => setOpenAlert((pre) => !pre)}
        // accessButtonText="확인"
        // contentTitle="확인"
        // \n 개행 문자 사용 가능
        contentText={`저장 되었습니다.`}
        closeButtonText="확인"
      />
    </Box>
  );
}
