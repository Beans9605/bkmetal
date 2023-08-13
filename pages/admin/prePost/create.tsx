import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { PrePost } from "../../../server/setting-post/models/pre-post.entity";
import {
  Container,
  Card,
  CardContent,
  Box,
  FormControl,
  OutlinedInput,
  FormLabel,
} from "@mui/material";
import StyledButton from "@component/common/input/StyledButton";

const PrePostCreateContent = () => {
  const router = useRouter();

  const [postContent, setPostContent] = useState<PrePost>({
    type: "",
    item_type: "",
    item_comment: "",
    price: 0,
  });

  const [typeError, setTypeError] = useState(false)
  const [itemTypeError, setItemTypeError] = useState(false)
  const [itemCommentError, setItemCommentError] = useState(false)
  const [priceError, setPriceError] = useState(false)

  const setContent = () => {
    if (
      postContent.item_comment &&
      postContent.item_type &&
      postContent.type &&
      postContent.price
    ) {
      axios
        .post("/api/setting-post/set", postContent)
        .then((res) => {
          router.push(`/admin/prePost/${res.data.data.id}`);
        })
        .catch((err) => {
          alert(`오류 발생 ${(err as Error).message}`);
        });
    }
    setTypeError(!!!postContent.type)
    setItemTypeError(!!!postContent.item_type)
    setItemCommentError(!!!postContent.item_comment)
    setPriceError(!!!postContent.price)
  };

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
                setPostContent((pre) => ({ ...pre, type: e.target.value }));
              }}
              placeholder="비철 / 고철"
              error={typeError}
            />
          </FormControl>
          <FormControl>
            <FormLabel>상품 이름</FormLabel>
            <OutlinedInput
              value={postContent?.item_type}
              onChange={(e) => {
                setPostContent((pre) => ({
                  ...pre,
                  item_type: e.target.value,
                }));
              }}
              placeholder="상품 이름"
              error={itemTypeError}
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
                setPostContent((pre) => ({
                  ...pre,
                  item_comment: e.target.value,
                }));
              }}
              placeholder="상품 설명"
              error={itemCommentError}
            />
          </FormControl>
          <FormControl>
            <FormLabel>가격</FormLabel>
            <OutlinedInput
              value={postContent?.price?.toString()}
              onChange={(e) => {
                setPostContent((pre) => ({
                  ...pre,
                  price: Number(e.target.value),
                }));
              }}
              placeholder="kg당 가격"
              error={priceError}
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
            <StyledButton onClick={setContent}>생성</StyledButton>
            <StyledButton onClick={() => router.push('/admin/8Fn2JgUWUn57lPGk7L2b3')} >취소</StyledButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PrePostCreateContent;
