import React, { useCallback, useState } from "react";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Tooltip } from "@mui/material";

import MainCover from "@container/Main/MainCover";
import MainDefinition from "@container/Main/MainDefinition";
import MainInfomation from "@container/Main/MainInfomation";
import MainFooterTip from "@container/Main/MainFooterTip";
import Alert from "@component/common/display/Alert";
import CounslingAlertContent from "@container/Main/Alert/CounslingAlertContent";
import { CounslingItemType } from "@utils/dto";
import axios from "axios";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const actions = [{ icon: <LocalPhoneIcon />, name: "전화걸기" },
{ icon: <ContentCopyIcon />, name: "전화번호 복사하기" }];

export default function Home() {
  const [counslingReq, setCounslingReq] = useState<CounslingItemType | boolean>(
    false
  );
  const [submit, setSubmit] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertContet, setAlertContet] = useState('');

  const setReqPost = useCallback(
    ({
      company_name,
      customer_info,
      phone_tel,
      tel,
      fax,
      email,
      content,
    }: {
      company_name: string;
      customer_info: string;
      phone_tel: string;
      tel: string;
      email: string;
      fax: string;
      content: string;
    }) => {
      axios
        .post("/api/req-post/set", {
          company_name,
          customer_info,
          phone_tel,
          tel,
          fax,
          email,
          content,
        })
        .then((result) => {
          console.log(result);
          alert("문의 성공했습니다.");
        })
        .finally(() => {
          setSubmit(false);
          setCounslingReq(false);
        });
    },
    []
  );

  const onClickByTel = () => {
    location.href = "tel:" + "010-7724-5895"
  }

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText("010-7724-5895");
      setAlertTitle("확인 창")
      setAlertContet("전화번호가 복사되었습니다.")
      setAlertOpen(true)
    } catch (e) {
        setAlertTitle("확인 창")
        setAlertContet("복사가 실패하였습니다.");
        setAlertOpen(true);
    }
  };

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
            value={typeof counslingReq !== "boolean" ? counslingReq : undefined}
            onSubmit={submit}
            onSubmitFunction={setReqPost}
            onSubSubmit={setSubmit}
          />
        }
        closeButtonText="닫기"
        accessButtonText="문의하기"
        onAccess={() => {
          setSubmit(true);
        }}
        onClose={() => {
          setCounslingReq(false);
          setSubmit(false);
        }}
        fullWidth
      />
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "sticky",  width: 'max-content', marginLeft: 'auto', bottom: 20, right: 20 }}
          icon={<Tooltip arrow sx={{ right: 20 }} disableInteractive open={true} placement="left" title="추가 문의"><SpeedDialIcon  /></Tooltip>}
        >
            <SpeedDialAction
              key={"전화걸기"}
              icon={<LocalPhoneIcon />}
              tooltipTitle={"전화걸기"}
              tooltipOpen
              onClick={onClickByTel}
            />
            <SpeedDialAction
              key={"전화번호 복사하기"}
              icon={<ContentCopyIcon />}
              tooltipTitle={"전화번호 복사하기"}
              tooltipOpen
              onClick={handleCopyClipBoard}
            />
        </SpeedDial>
        <Alert
            open={alertOpen}
            contentTitle={alertTitle}
            contentText={alertContet}
            closeButtonText="닫기"
            onClose={() => {
                setAlertOpen(false);
                setAlertTitle('')
                setAlertContet('');
              }}
        />
    </Box>
  );
}
