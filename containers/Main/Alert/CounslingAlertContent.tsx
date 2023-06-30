import React, { useState } from "react";
import {
  Box,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  FormLabel,
} from "@mui/material";
import { red } from "@mui/material/colors";
import InputBox from "@component/common/InputBox";
import { CounslingItemType } from "@utils/dto";
import { isEmptyObject } from "@utils/common";

const MainFrameBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: 20,
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  gridTemplateColumns: "1fr",
  paddingBottom: "10px",
  overflow: "auto",
}));

const InputLineBox = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    gridColumn: "1 / 3",
  },
  gridColumn: "1",
}));

const RequireFormLabel = styled(FormLabel)(({ theme }) => ({
  "::after": {
    content: '""',
    position: "absolute",
    top: "3px",
    marginLeft: "5px",
    width: "7px",
    height: "7px",
    borderRadius: "7px",
    backgroundColor: "red",
  },
}));

const CombineItemText = (param: CounslingItemType) => {
  return `${param.itemInfo?.title} ${param.itemInfo?.subtitle || ""}\n${
    param.itemInfo?.price
  } * ${param.kgNumber} kg = ${
    (param.itemInfo?.price as number) * (param.kgNumber as number)
  } 원`;
};

const CounslingAlertContent = (props: { value?: CounslingItemType }) => {
  const { value } = props;

  const theme = useTheme();
  const upperSm = useMediaQuery(theme.breakpoints.up("sm"));

  const [counslingContent, setCounslingContent] = useState<string>(
    value && !isEmptyObject(value) ? CombineItemText(value) : ""
  );

  return (
    <MainFrameBox>
      <Typography
        sx={{
          gridColumn: upperSm ? "1 / 3" : "1",
          "::before": {
            content: '""',
            position: "absolute",
            left: "calc(100% - 115px)",
            top: "5px",
            width: "7px",
            height: "7px",
            borderRadius: "7px",
            backgroundColor: "red",
          },
        }}
        textAlign="right"
        component={"div"}
        variant="caption"
        color={red[400]}
      >
        필수 입력사항입니다.
      </Typography>
      <FormControl>
        <RequireFormLabel>업체명</RequireFormLabel>
        <InputBox placeholder="업체명을 입력해주세요." />
      </FormControl>
      <FormControl>
        <RequireFormLabel>담당자 (직급)</RequireFormLabel>
        <InputBox placeholder="담당자를 입력해주세요." />
      </FormControl>
      <FormControl>
        <FormLabel>TEL</FormLabel>
        <InputBox type="tel" />
      </FormControl>
      <FormControl>
        <FormLabel>FAX</FormLabel>
        <InputBox />
      </FormControl>
      <FormControl>
        <RequireFormLabel>H.P</RequireFormLabel>
        <InputBox type="tel" placeholder="010-1234-1234" />
      </FormControl>
      <FormControl>
        <FormLabel>EMAIL</FormLabel>
        <InputBox type="email" placeholder="abcdef@naver.com" />
      </FormControl>
      <InputLineBox>
        <RequireFormLabel>견적문의</RequireFormLabel>
        <InputBox
          value={counslingContent}
          onChange={(e) => setCounslingContent(e.target.value)}
          multiline
          rows={3}
          type="text"
        />
      </InputLineBox>
    </MainFrameBox>
  );
};

export default CounslingAlertContent;
