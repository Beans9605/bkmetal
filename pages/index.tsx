import { Box } from "@mui/material";

import MainCover from "@container/Main/MainCover";
import MainDefinition from "@container/Main/MainDefinition";
import MainInfomation from "@container/Main/MainInfomation";
import MainFooterTip from "@container/Main/MainFooterTip";

export default function Home() {
  return (
    <Box>
      <MainCover />
      <MainDefinition />
      <MainInfomation />
      <MainFooterTip />
    </Box>
  );
}
