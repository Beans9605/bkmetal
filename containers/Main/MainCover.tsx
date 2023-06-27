import React from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import BKMainImage from "@assets/img/bkimg/bk_mainframe_pic.png";
import MainFrame from "@component/main/cover/MainFrame";
import InnerMainFrame from "@component/main/cover/InnerMainFrame";
import MainCoverImage from "@component/main/cover/MainCoverImage";
import CatchPrize from "@component/main/cover/CatchPrize";
import LeftFrame from "@component/main/cover/LeftFrame";
import RightFrame from "@component/main/cover/RightFrame";
import CardOfHistory from "@component/main/cover/CardOfHistory";
import CardOfHistorySpan from "@component/main/cover/CardOfHistorySpan";

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
            금속/비철 자재 취급
            <br />
            많은 기업들과 함께합니다.
          </Typography>
          <CardOfHistorySpan>
            <Typography variant="h6">2022</Typography>
          </CardOfHistorySpan>
        </CardOfHistory>
      </RightFrame>
    </MainFrame>
  );
};

export default MainCover;
