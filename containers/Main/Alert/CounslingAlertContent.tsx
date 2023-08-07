import React, { useCallback, useEffect, useState } from "react";
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
import axios from "axios";

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

const CounslingAlertContent = (props: {
    value?: CounslingItemType;
    onSubmit?: boolean;
    onSubmitFunction: Function;
    onSubSubmit: Function;
}) => {
    const { value, onSubmit, onSubmitFunction, onSubSubmit } = props;

    const theme = useTheme();
    const upperSm = useMediaQuery(theme.breakpoints.up("sm"));

    const [comapnyName, setComapnyName] = useState("");
    const [customerInfo, setCustomerInfo] = useState("");
    const [tel, setTel] = useState("");
    const [fax, setFax] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [counslingContent, setCounslingContent] = useState<string>(
        value && !isEmptyObject(value) ? CombineItemText(value) : ""
    );

    useEffect(() => {
        if (typeof onSubmit === "boolean" && onSubmit) {
            if (typeof onSubmitFunction === "function") {
                if (
                    comapnyName &&
                    customerInfo &&
                    phoneNumber &&
                    counslingContent
                ) {
                    onSubmitFunction({
                        company_name: comapnyName,
                        customer_info: customerInfo,
                        phone_tel: phoneNumber,
                        tel,
                        fax,
                        email,
                        content: counslingContent,
                    });
                } else {
                    onSubSubmit(false);
                    alert("필수 입력 값이 미기입 돼있습니다.");
                }
            }
        }
    }, [
        comapnyName,
        counslingContent,
        customerInfo,
        email,
        fax,
        onSubmit,
        onSubmitFunction,
        phoneNumber,
        tel,
        onSubSubmit,
    ]);

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
                <InputBox
                    value={comapnyName}
                    onChange={(e) => setComapnyName(e.target.value)}
                    placeholder="업체명을 입력해주세요."
                />
            </FormControl>
            <FormControl>
                <RequireFormLabel>담당자 (직급)</RequireFormLabel>
                <InputBox
                    value={customerInfo}
                    onChange={(e) => setCustomerInfo(e.target.value)}
                    placeholder="담당자를 입력해주세요."
                />
            </FormControl>
            <FormControl>
                <FormLabel>TEL</FormLabel>
                <InputBox
                    type="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>FAX</FormLabel>
                <InputBox
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <RequireFormLabel>H.P</RequireFormLabel>
                <InputBox
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="010-1234-1234"
                />
            </FormControl>
            <FormControl>
                <FormLabel>EMAIL</FormLabel>
                <InputBox
                    type="email"
                    placeholder="abcdef@naver.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
