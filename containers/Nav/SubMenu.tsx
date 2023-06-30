import { sidebarOpenState } from "@utils/recoil";
import React from "react";
import { useRecoilState } from "recoil";
import {
  Paper,
  PaperProps,
  styled,
  MenuList,
  MenuItem,
  ListItemText,
} from "@mui/material";

const SubMenuBox = styled((props: PaperProps & { open?: boolean }) => {
  const { open, ...rest } = props;

  return (
    <Paper
      sx={{
        opacity: open ? 1 : 0,
      }}
      variant="outlined"
      {...rest}
    />
  );
})(({ theme, open }) => ({
    
    // display:  open ?'none', 
  animation: `${open ? "submenuopen" : "submenuclose"} 2000ms ${
    theme.transitions.easing.easeInOut
  }`,
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.light,
  color: "white",
  position: "fixed",
  top: "14px",
  zIndex: '1101',
  [theme.breakpoints.up("sm")]: {
    right: "24px",
  },
  right: "16px",
  "@keyframes submenuclose": {
    from: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
    to: {
      opacity: 0,
      transform: "tralsate(-200%, 0)",
      display: 'none',
    },
  },
  "@keyframes submenuopen": {
    from: {
      display: 'none',
      opacity: 0,
      transform: "tralsate(-200%, 0)",
    },
    to: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  },
}));

const SubMenu = () => {
  const [sideopen, setSideOpen] = useRecoilState(sidebarOpenState);

  return (
    <SubMenuBox onMouseLeave={() => setSideOpen(false)} open={sideopen}>
      <MenuList>
        <MenuItem>
          <ListItemText>회사소개</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>스크랩 분류 기준표</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>자주하는 질문</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>고객 센터</ListItemText>
        </MenuItem>
      </MenuList>
    </SubMenuBox>
  );
};

export default SubMenu;
