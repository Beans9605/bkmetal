import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Box, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


const AdminBoard = () => {

    const [callRows, setCallRows] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [rateByPage, setRateByPage] = useState(5);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchType, setSearchType] = useState('');
    const [selectGet, setSelectGet] = useState('req-post')

    const rows = useMemo(() => {
        return callRows.map((value) => {
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
        });
    }, [pageNumber, rateByPage, searchKeyword, searchType, selectGet]);

    useEffect(() => {
        callRowFunc
    }, [callRowFunc]);
    
    return (
        <Container>
            <Box sx={{
                height: '80vh'
            }}>
                <DataGrid 
                    rows={rows}
                />
            </Box>
        </Container>
    );
};

export default AdminBoard;
