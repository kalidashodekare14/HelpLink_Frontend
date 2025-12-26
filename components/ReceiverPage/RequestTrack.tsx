"use client"
import { Box, Button, Container, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRequestTrackQuery } from "@/state/services/receiverService/receiverService";
import { useSession } from "next-auth/react";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import Link from "next/link";



const paginationModel = { page: 0, pageSize: 5 };

const RequestTrack = () => {

    // User Session
    const { data: session } = useSession();
    // Request Track Data 
    const { data: reqTrackData, isLoading, error } = useRequestTrackQuery(session?.user?.email);
    const requestData = reqTrackData?.data

    const rows = requestData?.map((data: any, index: number) => ({
        id: data._id,
        image: data.image,
        title: data.title,
        category: data.category,
        division: data.location.division,
        district: data.location.district,
        upazila: data.location.upazila,
        address: data.location.address
    })) || [];



    const columns: GridColDef[] = [
        {
            field: 'image', headerName: 'Image', width: 100, renderCell: (params) => (
                <img src={params.value} alt="Request" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            )
        },
        { field: 'title', headerName: 'Request Title', width: 150 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'division', headerName: 'Division', width: 110 },
        { field: 'district', headerName: 'District', width: 110 },
        { field: 'upazila', headerName: 'Upazila', width: 110 },
        { field: 'address', headerName: 'Address', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                console.log('checking params', params);
                // Menu DropDown
                const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
                const open = Boolean(anchorEl);
                const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = () => {
                    setAnchorEl(null);
                };
                return (
                    <>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <GridMoreVertIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <Link href={`/request_track/${params.id}`}>
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </>
                )
            }
        }

    ];

    return (
        <Container>
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url('https://i.ibb.co.com/SwPChsW7/covid-concept-with-colorful-hands.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: "20%",
                    mb: "3%"
                }}
            >
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Request Track</Typography>
            </Box>
            {/* Table */}
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Container>
    );
};

export default RequestTrack;