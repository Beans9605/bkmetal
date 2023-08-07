import React, { useCallback, useState } from "react";
import { Box } from "@mui/material";

import MainCover from "@container/Main/MainCover";
import MainDefinition from "@container/Main/MainDefinition";
import MainInfomation from "@container/Main/MainInfomation";
import MainFooterTip from "@container/Main/MainFooterTip";
import Alert from "@component/common/display/Alert";
import CounslingAlertContent from "@container/Main/Alert/CounslingAlertContent";
import { CounslingItemType } from "@utils/dto";
import axios from "axios";

export default function Home() {
    const [counslingReq, setCounslingReq] = useState<
        CounslingItemType | boolean
    >(false);
    const [submit, setSubmit] = useState(false);

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
                        value={
                            typeof counslingReq !== "boolean"
                                ? counslingReq
                                : undefined
                        }
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
        </Box>
    );
}
