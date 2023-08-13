import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { PrePost } from "../../../../server/setting-post/models/pre-post.entity";
import {
  Container,
  Card,
  CardContent,
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  FormLabel,
} from "@mui/material";
import StyledButton from "@component/common/input/StyledButton";

const PrePostModifyContent = () => {
  const router = useRouter();

  const id = router.query.id as string;
  const [postContent, setPostContent] = useState<PrePost | null>(null);
  const [postId, setPostId] = useState<string>();

  const callContent = useCallback(() => {
    axios.get(`/api/setting-post/get/one?id=${postId}`).then((res) => {
      setPostContent(res.data);
    });
  }, [postId]);

  const setContent = () => {
    axios.post("/api/setting-post/set", postContent).finally(() => {
      router.push(`/admin/prePost/${postId}`);
    });
  };

  useEffect(() => {
    callContent();
  }, [postId]);

  useEffect(() => {
    setPostId(id);
  }, [id]);
  return (
    <Container>
      <Card>
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel>종류</FormLabel>
            <OutlinedInput
              value={postContent?.type}
              onChange={(e) => {
                setPostContent((pre) =>
                  pre ? { ...pre, type: e.target.value } : null
                );
              }}
              placeholder="비철 / 고철"
            />
          </FormControl>
          <FormControl>
            <FormLabel>상품 이름</FormLabel>
            <OutlinedInput
              value={postContent?.item_type}
              onChange={(e) => {
                setPostContent((pre) =>
                  pre ? { ...pre, item_type: e.target.value } : null
                );
              }}
              placeholder="상품 이름"
            />
          </FormControl>
          <FormControl
            sx={{
              gridColumn: "1 / 3",
            }}
          >
            <FormLabel>상품 설명</FormLabel>
            <OutlinedInput
              value={postContent?.item_comment}
              onChange={(e) => {
                setPostContent((pre) =>
                  pre ? { ...pre, item_comment: e.target.value } : null
                );
              }}
              placeholder="상품 설명"
            />
          </FormControl>
          <FormControl>
            <FormLabel>가격</FormLabel>
            <OutlinedInput
              value={postContent?.price?.toString()}
              onChange={(e) => {
                setPostContent((pre) =>
                  pre ? { ...pre, price: Number(e.target.value) } : null
                );
              }}
              placeholder="kg당 가격"
            />
          </FormControl>
          <Box
            sx={{
              gridColumn: "1 / 3",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            <StyledButton onClick={setContent}>수정</StyledButton>
            <StyledButton
              onClick={() => router.push(`/admin/prePost/${postId}`)}
            >
              취소
            </StyledButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PrePostModifyContent;
