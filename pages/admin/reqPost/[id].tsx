import { Container, Card, Box, CardContent, Typography, IconButton } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { ReqPost } from "../../../server/req-post/models/req-post.entity";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReqPostContent = () => {
  const router = useRouter();

  const id = router.query.id as string;
  const [postContent, setPostContent] = useState<ReqPost>({
    company_name: "",
    content: "",
    customer_info: "",
    email: "",
    fax: "",
    phone_tel: "",
  });
  const [postId, setPostId] = useState<string>();

  const callContent = useCallback(() => {
    postId && axios.get(`/api/req-post/get/one?id=${postId}`).then((res) => {
      setPostContent(res.data);
    });
  }, [postId]);

  useEffect(() => {
    callContent();
  }, [postId]);

  useEffect(() => {
    setPostId(id);
  }, [id]);

  return (
    <Container>
        <IconButton
            onClick={() => router.push(`/admin/8Fn2JgUWUn57lPGk7L2b3`)}
        >
            <ArrowBackIcon />
        </IconButton>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" fontWeight={600} component="div">
              {postContent?.company_name}
              <Typography variant="body2" component={"span"}>
                {postContent?.customer_info}
              </Typography>
            </Typography>
            <Typography variant="h5" fontWeight={600} component="div">
              {postContent?.phone_tel}
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight={600} component="div">
            {postContent?.content}
          </Typography>
          <Typography variant="body2" fontWeight={600} component="span">
            {postContent?.email}
            <br />
            {postContent?.fax}
            <br />
            {postContent?.tel}
          </Typography>
          <Typography>
            생성 시간 -{" "}
            {postContent?.create_at && dayjs(postContent?.create_at).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
          <Typography>
            수정 시간 -{" "}
            {postContent?.create_at && dayjs(postContent?.update_at).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ReqPostContent;
