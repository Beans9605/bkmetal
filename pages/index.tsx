import React, { useState } from "react";
import { Box } from "@mui/material";

import MainCover from "@container/Main/MainCover";
import MainDefinition from "@container/Main/MainDefinition";
import MainInfomation from "@container/Main/MainInfomation";
import MainFooterTip from "@container/Main/MainFooterTip";
import Alert from "@component/common/display/Alert";
import CounslingAlertContent from "@container/Main/Alert/CounslingAlertContent";
import { CounslingItemType } from "@utils/dto";

export default function Home() {
  const [counslingReq, setCounslingReq] = useState<CounslingItemType | false>(
    false
  );

  return (
    <Box>
      <MainCover />
      <MainDefinition onCounslingHandler={setCounslingReq} />
      <MainInfomation />
      <MainFooterTip />
      <Alert
        open={!!counslingReq}
        contentTitle="견적문의"
        contentNode={
          <CounslingAlertContent
            value={counslingReq !== false ? counslingReq : undefined}
          />
        }
        closeButtonText="닫기"
        accessButtonText="문의하기"
        onAccess={() => setCounslingReq(false)}
        onClose={() => setCounslingReq(false)}
        fullWidth
      />
    </Box>
  );
}
