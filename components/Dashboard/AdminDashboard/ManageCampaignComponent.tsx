"use client"

import { useCampaignDeliveryStatusManageMutation, useCampaignRequestStatusManageMutation, useTotalCamgaignManageQuery } from "@/state/services/adminService/adminService";
import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { GridMoreVertIcon } from "@mui/x-data-grid";
import Swal from 'sweetalert2';


const paginationModel = { page: 0, pageSize: 5 };


const ManageCampaignComponent = () => {

    const [search, setSearch] = useState<string>("");
    const [requestStatus, setRequestStatus] = useState<string>("");
    const [deliveryStatus, setDeliveryStatus] = useState<string>("");

    const query = {
        search: search,
        request_status: requestStatus,
        delivery_status: deliveryStatus
    }

    // total campaign data fatched
    const { data: totalCampaign, isLoading, error } = useTotalCamgaignManageQuery(query);
    // campaign request status change api
    const [campaignRequestStatusManage, { isLoading: requestLoading, error: requestError }] = useCampaignRequestStatusManageMutation()
    // campaign delivery status change api
    const [campaignDeliveryStatusManage, { isLoading: deliveryLoading, error: deliveryError }] = useCampaignDeliveryStatusManageMutation()

    const campaignRows = totalCampaign?.data?.map((campaign: any) => ({
        id: campaign._id,
        ...campaign,
        createdDate: campaign?.createdAt
    }))

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        {
            field: 'location',
            headerName: 'Location',
            width: 150,
            renderCell: (params) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span>{params?.row.location?.division}</span>
                    <ArrowRightIcon />
                    <span>{params?.row.location?.district}</span>
                    <ArrowRightIcon />
                    <span>{params?.row.location?.upazila}</span>
                </Box>
            )
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 130,
            renderCell: (params) => (
                <span>{params?.row.location?.address}</span>
            )
        },
        {
            field: 'createdAt',
            headerName: 'Created Date',
            width: 130,
            renderCell: (params) => (
                <span>{new Date(params?.row?.createdAt).toDateString()}</span>
            )
        },
        {
            field: 'request_status',
            headerName: 'Request Status',
            width: 130,
            renderCell: (params) => (
                <>
                    {
                        params.value === "Pending" && (
                            <span className="bg-[#bfd200] p-2 rounded-full text-white">Pending</span>
                        )
                    }
                    {
                        params.value === "Approved" && (
                            <span className="bg-[#2a9d8f] p-2 rounded-full text-white">Approved</span>
                        )
                    }
                    {
                        params.value === "Rejected" && (
                            <span className="bg-[#e76f51] p-2 rounded-full text-white">Rejected</span>
                        )
                    }
                </>
            )
        },
        {
            field: 'delivery_status',
            headerName: 'Delivery Status ',
            width: 130,
            renderCell: (params) => (
                <>
                    {
                        params.value === "Assigned" && (
                            <span className="bg-[#bc6c25] p-2 rounded-full text-white">Assigned</span>
                        )
                    }
                    {
                        params.value === "Picked Up" && (
                            <span className="bg-[#219ebc] p-2 rounded-full text-white">Picked Up</span>
                        )
                    }
                    {
                        params.value === "Delivered" && (
                            <span className="bg-[#1d3557] p-2 rounded-full text-white">Delivered</span>
                        )
                    }
                    {
                        params.value === "Cancelled" && (
                            <span className="bg-[#dc2f02] p-2 rounded-full text-white">Cancelled</span>
                        )
                    }
                </>
            )
        },
        {
            field: 'Request Action',
            headerName: 'Request Action',
            width: 100,
            renderCell: (params) => {
                const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
                const open = Boolean(anchorEl);
                const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = () => {
                    setAnchorEl(null);
                };

                const handleRequestStatus = async (datas: any) => {
                    try {
                        const { id, request_status } = datas;
                        Swal.fire({
                            title: "Are you sure?",
                            text: "Do you want to change the request status?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Change it!"
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                const result = await campaignRequestStatusManage({ id, request_status })
                                if ('data' in result) {
                                    Swal.fire({
                                        title: "Update!",
                                        text: "Your request status update successfully",
                                        icon: "success"
                                    });
                                }
                            }
                        });
                        handleClose()
                    } catch (error) {
                        console.log(error)
                    }
                }

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
                            <MenuItem onClick={() => handleRequestStatus({ request_status: "Pending", id: params.row._id })}>Pending</MenuItem>
                            <MenuItem onClick={() => handleRequestStatus({ request_status: "Approved", id: params.row._id })}>Approved</MenuItem>
                            <MenuItem onClick={() => handleRequestStatus({ request_status: "Rejected", id: params.row._id })}>Rejected</MenuItem>
                        </Menu>
                    </>
                )
            }
        },
        {
            field: 'Delivery Action',
            headerName: 'Delivery Action',
            width: 100,
            renderCell: (params) => {
                const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
                const open = Boolean(anchorEl);
                const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = () => {
                    setAnchorEl(null);
                };

                const handleDelivaryStatus = async (datas: any) => {
                    try {
                        const { id, delivery_status } = datas;
                        console.log('checking delivery status', delivery_status);
                        Swal.fire({
                            title: "Are you sure?",
                            text: "Do you want to change the delivery status?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Change it!"
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                const result = await campaignDeliveryStatusManage({ id, delivery_status })
                                if ('data' in result) {
                                    Swal.fire({
                                        title: "Update!",
                                        text: "Your delivery status update successfully",
                                        icon: "success"
                                    });
                                }
                            }
                        });

                        handleClose()
                    } catch (error) {
                        console.log(error)
                    }
                }

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
                            <MenuItem onClick={() => handleDelivaryStatus({ delivery_status: "Assigned", id: params.row._id })}>Assigned</MenuItem>
                            <MenuItem onClick={() => handleDelivaryStatus({ delivery_status: "Picked Up", id: params.row._id })}>Picked Up</MenuItem>
                            <MenuItem onClick={() => handleDelivaryStatus({ delivery_status: "Delivered", id: params.row._id })}>Delivered</MenuItem>
                            <MenuItem onClick={() => handleDelivaryStatus({ delivery_status: "Cancelled", id: params.row._id })}>Cancelled</MenuItem>
                        </Menu>
                    </>
                )
            }
        },
    ];


    const handleRequestStatus = (value: any) => {
        console.log('checking requst status', value);
        setRequestStatus(value);
    }
    const handleDeliveryStatus = (value: any) => {
        console.log('checking delivery status', value);
        setDeliveryStatus(value)
    }


    return (
        <Box sx={{ p: "20px" }}>
            <Typography fontSize={25}>User Campaign</Typography>
            <Typography>Manage all users in one place. Control access, assign roles, and monitor activity across your platform.</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: "20px",
                border: "1px solid #bbbb",
                p: "10px",
                my: "10px"
            }}>
                <TextField sx={{ width: { xs: "100%", lg: "30%" } }} onChange={(event) => setSearch(event?.target.value)} size="small" id="outlined-basic" label="Search (title, category, location)" variant="outlined" />
                <FormControl sx={{ width: { xs: "100%", lg: "15%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Request Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={requestStatus}
                        label="role"
                        onChange={(event) => handleRequestStatus(event.target.value)}
                    >
                        <MenuItem value={"Pending"}>Pending</MenuItem>
                        <MenuItem value={"Approved"}>Approved</MenuItem>
                        <MenuItem value={"Rejected"}>Rejected</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: { xs: "100%", lg: "15%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Delivery Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={deliveryStatus}
                        onChange={(event) => handleDeliveryStatus(event.target.value)}
                    >
                        <MenuItem value={"Assigned"}>Assigned</MenuItem>
                        <MenuItem value={"Picked Up"}>Picked Up</MenuItem>
                        <MenuItem value={"Delivered"}>Delivered</MenuItem>
                        <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* Table */}
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={campaignRows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
};

export default ManageCampaignComponent;