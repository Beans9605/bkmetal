import React from "react";
import { Typography, useTheme, useMediaQuery, SpeedDial, SpeedDialIcon, IconButton, Tooltip, Box, SpeedDialAction } from "@mui/material";
import BKMainImage from "@assets/img/bkimg/bk_mainframe_pic.png";
import MainFrame from "@component/main/cover/MainFrame";
import InnerMainFrame from "@component/main/cover/InnerMainFrame";
import MainCoverImage from "@component/main/cover/MainCoverImage";
import CatchPrize from "@component/main/cover/CatchPrize";
import LeftFrame from "@component/main/cover/LeftFrame";
import RightFrame from "@component/main/cover/RightFrame";
import CardOfHistory from "@component/main/cover/CardOfHistory";
import CardOfHistorySpan from "@component/main/cover/CardOfHistorySpan";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const actions = [
  { icon: <LocalPhoneIcon />, name: '문의번호' }
];

const MainCover = () => {
  const theme = useTheme();
  const upperSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <MainFrame>
      <InnerMainFrame>
        <MainCoverImage src={BKMainImage} alt="cover image" />
        <CatchPrize variant={upperSize ? "h2" : "h3"} fontWeight={300}>
          Reliable Metal <strong>Recycling</strong>
        </CatchPrize>
      </InnerMainFrame>
      <LeftFrame />
      <RightFrame>
        <CardOfHistory>
          <Typography variant="body2">
            고철/비철 자재 취급
            <br />
            많은 기업들과 함께합니다.
          </Typography>
          <CardOfHistorySpan>
            <Typography variant="h6">2012</Typography>
          </CardOfHistorySpan>
        </CardOfHistory>
      </RightFrame>
    </MainFrame>
  );
};

export default MainCover;
