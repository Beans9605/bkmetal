import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Box, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import dayjs from 'dayjs';
import StyledButton from "@component/common/input/StyledButton";

const reqPostColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: '#',
        width: 50
    },
    {
        field: 'company_name',
        headerName: '업체 명',
        width: 200
    },
    {
        field: 'customer_info',
        headerName: '담당자(직급)',
        width: 200
    },
    {
        field: 'phone_tel',
        headerName: '핸드폰 번호',
        width: 200
    },
    {
        field: 'create_at',
        headerName: '문의 날짜',
        width: 250,
        valueGetter: (value) => {
            return dayjs(value.value).format('YYYY-MM-DD HH:mm:ss')
        }
    }
]

const prePostColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: '#',
        width: 50
    },
    {
        field: 'type',
        headerName: '문의 타입',
        width: 200
    },
    {
        field: 'item_type',
        headerName: '품목명',
        width: 200
    },
    {
        field: 'item_comment',
        headerName: '품목 정보',
        width: 200
    },
    {
        field: 'price',
        headerName: 'kg당 가격',
        width: 200
    },
    {
        field: 'update_at',
        headerName: '최종 수정시간',
        width: 250,
        valueGetter: (value) => {
            return dayjs(value.value).format('YYYY-MM-DD HH:mm:ss')
        }
    }
]

const AdminBoard = () => {

    const [callRows, setCallRows] = useState<[any[], number]>([[], 0]);
    const [pageNumber, setPageNumber] = useState(0);
    const [rateByPage, setRateByPage] = useState(10);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchType, setSearchType] = useState('');
    const [selectGet, setSelectGet] = useState('req-post')

    const rows = useMemo(() => {
        return callRows[0].map((value) => {
            return value;
        })
    }, [callRows])

    const callRowFunc = useCallback(() => {
        axios.post(`/api/${selectGet}/get`, {
            searchKeyword,
            searchType,
            rateByPage,
            pageNumber,
        }).then((res) => {
            setCallRows(res.data);
            console.log(res.data[1])
        });
    }, [pageNumber, rateByPage, searchKeyword, searchType, selectGet]);

    useEffect(() => {
        callRowFunc();
    }, [callRowFunc, pageNumber, rateByPage]);
    
    return (
        <Container>
            <Box
                sx={{
                    padding: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h4" fontWeight={600}>
                    {selectGet === "req-post" ? "문의 내역" : "상품 설정"}
                </Typography>
                <StyledButton
                    onClick={() => setSelectGet(pre => pre === 'req-post' ? 'setting-post' : 'req-post')}
                >
                    {selectGet === "req-post"
                        ? "상품 설정 전환"
                        : "문의 내역 전환"}
                </StyledButton>
            </Box>
            <Box
                sx={{
                    height: "80vh",
                }}
            >
                <DataGrid
                    rows={rows}
                    paginationMode="server"
                    rowCount={callRows[1]}
                    onPaginationModelChange={(model) => {
                        setPageNumber(model.page)
                        setRateByPage(model.pageSize)
                    }}
                    columns={
                        selectGet === "req-post"
                            ? reqPostColumns
                            : prePostColumns
                    }
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: rateByPage,
                                page: callRows[1]
                            },
                        },
                    }}
                    pageSizeOptions={[10, 25, 50]}
                    disableRowSelectionOnClick
                />
            </Box>
        </Container>
    );
};

export default AdminBoard;
