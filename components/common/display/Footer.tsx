import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Footer = () => {
  return (
    <Container
        sx={{
            backgroundColor: grey[800],
            color: 'white',
            width: '100vw',
            marginTop: '30px'
        }}
    >
        <Box
        sx={{
            padding: "30px 0"
        }}>
            <Typography variant='body2' component={'div'}>
            (주)일운산업 ㅣ 사업자 등록번호 134-87-02414 ㅣ대표자명 김봉국 ㅣ 경기도 화성시 우정읍 매바위로 9-39
            <br/>
            문의번호 - 010-7724-5895
            <br/>
            COPYRIGHT © Ilun, co. ALL RIGHTS RESERVED
            </Typography>
        </Box>
    </Container>
  )
}

export default Footer