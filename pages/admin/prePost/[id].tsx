import {
  Container,
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { PrePost } from "../../../server/setting-post/models/pre-post.entity";
import dayjs from "dayjs";
import StyledButton from "@component/common/input/StyledButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Alert from "@component/common/display/Alert";

const PrePostContent = () => {
  const router = useRouter();

  const id = router.query.id as string;
  const [postContent, setPostContent] = useState<PrePost | null>(null);
  const [postId, setPostId] = useState<string>();
  const [alertOpen, setAlertOpen] = useState(false)

  const callContent = useCallback(() => {
    postId &&
      axios.get(`/api/setting-post/get/one?id=${postId}`).then((res) => {
        setPostContent(res.data);
      });
  }, [postId]);

  const deleteCall = () => {
    postId && axios.delete(`/api/setting-post/delete/byid?id=${postId}`).finally(() => {
        router.push(`/admin/8Fn2JgUWUn57lPGk7L2b3`)
    })
  }

  useEffect(() => {
    callContent();
  }, [postId]);

  useEffect(() => {
    id && setPostId(id);
  }, [id]);

  return (
    <Container>
      <IconButton onClick={() => router.push(`/admin/8Fn2JgUWUn57lPGk7L2b3`)}>
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
              {postContent?.item_type}
              <Typography variant="body2" component={"span"}>
                {postContent?.item_comment}
              </Typography>
            </Typography>
            <Typography variant="h5" fontWeight={600} component="div">
              {postContent?.type}
            </Typography>
          </Box>
          <Typography variant="h5" fontWeight={600} component="div">
            {postContent?.price}₩
          </Typography>
          <Typography>
            생성 시간 -{" "}
            {postContent?.create_at &&
              dayjs(postContent?.create_at).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
          <Typography>
            수정 시간 -{" "}
            {postContent?.update_at &&
              dayjs(postContent?.update_at).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              paddingTop: "10px",
              gap: 1,
            }}
          >
            <StyledButton
              onClick={() => router.push(`/admin/prePost/modify/${postId}`)}
            >
              수정
            </StyledButton>
            <StyledButton onClick={() => setAlertOpen(true)}>삭제</StyledButton>
          </Box>
        </CardContent>
      </Card>
      <Alert
        contentTitle="경고"
        contentText="정말 삭제하시겠습니까?"
        open={alertOpen}
        closeButtonText="취소"
        accessButtonText="삭제"
        onAccess={() => deleteCall()}
        onClose={() => setAlertOpen(false)}
      />
    </Container>
  );
};

export default PrePostContent;
