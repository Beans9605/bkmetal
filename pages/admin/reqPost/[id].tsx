import React from "react";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

const ReqPostContent = () => {

    const router = useRouter();
    const id = router.query.id as string;

    return <Container>
        
    </Container>;
};

export default ReqPostContent;
