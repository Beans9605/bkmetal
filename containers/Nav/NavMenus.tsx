import Alert from "@component/common/display/Alert";
import { Box, Button, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";

const NavMenusBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavMenus = () => {


  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertContet, setAlertContet] = useState('');


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <NavMenusBox>
      <Button color="inherit" href="#introduce">
        회사소개
      </Button>
      <Button color="inherit" href="#scrap-table">
        스크랩 분류 기준표
      </Button>
      <Button color="inherit" href="#order-tip">
        자주하는 질문
      </Button>
      <Button color="inherit" onClick={handleClick}>
        고객 센터
      </Button>
      <Menu
        id="고객센터"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onClickByTel}>전화하기</MenuItem>
        <MenuItem onClick={handleCopyClipBoard}>전화번호 복사</MenuItem>
      </Menu>
      <Alert
        open={alertOpen}
        contentTitle={alertTitle}
        contentText={alertContet}
        closeButtonText="닫기"
        onClose={() => {
          setAlertOpen(false);
          setAlertTitle("");
          setAlertContet("");
        }}
      />
    </NavMenusBox>
  );
};

export default NavMenus;
