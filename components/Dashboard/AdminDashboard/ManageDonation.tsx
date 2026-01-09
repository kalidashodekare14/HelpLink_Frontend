"use client"

import {useTotalDonationManageQuery } from "@/state/services/adminService/adminService";
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const paginationModel = { page: 0, pageSize: 5 };

// No Results Overlay Component
const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .no-results-primary': {
        fill: '#3D4751',
        ...theme.applyStyles('light', {
            fill: '#AEB8C2',
        }),
    },
    '& .no-results-secondary': {
        fill: '#1D2126',
        ...theme.applyStyles('light', {
            fill: '#E8EAED',
        }),
    },
}));
function CustomNoResultsOverlay() {
    return (
        <StyledGridOverlay>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={96}
                viewBox="0 0 523 299"
                aria-hidden
                focusable="false"
            >
                <path
                    className="no-results-primary"
                    d="M262 20c-63.513 0-115 51.487-115 115s51.487 115 115 115 115-51.487 115-115S325.513 20 262 20ZM127 135C127 60.442 187.442 0 262 0c74.558 0 135 60.442 135 135 0 74.558-60.442 135-135 135-74.558 0-135-60.442-135-135Z"
                />
                <path
                    className="no-results-primary"
                    d="M348.929 224.929c3.905-3.905 10.237-3.905 14.142 0l56.569 56.568c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0l-56.568-56.569c-3.905-3.905-3.905-10.237 0-14.142ZM212.929 85.929c3.905-3.905 10.237-3.905 14.142 0l84.853 84.853c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0l-84.853-84.853c-3.905-3.905-3.905-10.237 0-14.142Z"
                />
                <path
                    className="no-results-primary"
                    d="M212.929 185.071c-3.905-3.905-3.905-10.237 0-14.142l84.853-84.853c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-84.853 84.853c-3.905 3.905-10.237 3.905-14.142 0Z"
                />
                <path
                    className="no-results-secondary"
                    d="M0 43c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 53 0 48.523 0 43ZM0 89c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 99 0 94.523 0 89ZM0 135c0-5.523 4.477-10 10-10h74c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 181c0-5.523 4.477-10 10-10h80c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 227c0-5.523 4.477-10 10-10h100c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM523 227c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10ZM523 181c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 135c0 5.523-4.477 10-10 10h-74c-5.523 0-10-4.477-10-10s4.477-10 10-10h74c5.523 0 10 4.477 10 10ZM523 89c0 5.523-4.477 10-10 10h-80c-5.523 0-10-4.477-10-10s4.477-10 10-10h80c5.523 0 10 4.477 10 10ZM523 43c0 5.523-4.477 10-10 10H413c-5.523 0-10-4.477-10-10s4.477-10 10-10h100c5.523 0 10 4.477 10 10Z"
                />
            </svg>
            <Box sx={{ mt: 2 }}>No results found.</Box>
        </StyledGridOverlay>
    );
}

const ManageDonation = () => {

    const [search, setSearch] = useState<string>("");
    const [paymentStatus, setPaymentStatus] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");


    const query = {
        search: search,
        payment_status: paymentStatus,
        payment_method: paymentMethod,
    }

    // total campaign data fatched
    const { data: totalDonation, isLoading: donationLoading, error } = useTotalDonationManageQuery(query);


    const donationRows = totalDonation?.data?.map((donation: any) => ({
        id: donation._id,
        ...donation,
        createdDate: donation?.createdAt,
        email: donation?.donor_email,
        phone_number: donation?.phone_number,
        payment_status: donation?.payment_status,
        payment_method: donation?.payment_method
    }))

    const columns: GridColDef[] = [
        { field: 'paymentID', headerName: 'P_ID', width: 160 },
        { field: 'donor_name', headerName: 'Donor Name', width: 140 },
        {
            field: 'email',
            headerName: 'Email',
            width: 190,
            renderCell: (params) => (
                <span>{params?.value}</span>
            )
        },
        {
            field: 'phone_number',
            headerName: 'Phone Number',
            width: 130,
            renderCell: (params) => (
                <span>{params?.value}</span>
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
            field: 'payment_status',
            headerName: 'Payment Status',
            width: 130,
            renderCell: (params) => (
                <>{
                    params?.value === "Paid" && (
                        <Box sx={{ display: "flex", mt: "12px" }}>
                            <CheckCircleIcon sx={{ color: "#00B400" }} />
                            <Typography>{params?.value}</Typography>
                        </Box>
                    )
                }
                    {
                        params?.value === "Unpaid" && (
                            <Box sx={{ display: "flex", mt: "12px" }}>
                                <CancelIcon sx={{ color: "#ef233c" }} />
                                <Typography>{params?.value}</Typography>
                            </Box>
                        )
                    }

                    {
                        params?.value === "Pending" && (
                            <Box sx={{ display: "flex", mt: "12px" }}>
                                <CancelIcon sx={{ color: "#ef233c" }} />
                                <Typography>{params?.value}</Typography>
                            </Box>
                        )
                    }
                </>
            )
        },
        {
            field: 'payment_method',
            headerName: 'Delivery Status ',
            width: 130,
            renderCell: (params) => (
                <>
                    {
                        params?.value === "SSLCommerz" && (
                            <Typography sx={{ bgcolor: "#2859A6", color: "white", px: "5px", mt: "12px" }}>{params?.value}</Typography>
                        )
                    }
                    {
                        params?.value === "Bikash" && (
                            <Typography sx={{ bgcolor: "#CA1F50", color: "white", px: "5px", mt: "12px" }}>{params?.value}</Typography>
                        )
                    }
                    {
                        params?.value === "Nagad" && (
                            <Typography sx={{ bgcolor: "#ED872B", color: "white", px: "5px", mt: "12px" }}>{params?.value}</Typography>
                        )
                    }
                </>
            )
        },
    ];


    const handlePaymentStatus = (value: any) => {
        console.log('checking requst status', value);
        setPaymentStatus(value);
    }
    const handlePaymentMethod = (value: any) => {
        console.log('checking delivery status', value);
        setPaymentMethod(value)
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
                <TextField sx={{ width: { xs: "100%", lg: "30%" } }} onChange={(event) => setSearch(event?.target.value)} size="small" id="outlined-basic" label="Search (P_Id, name, email, phone_number)" variant="outlined" />
                <FormControl sx={{ width: { xs: "100%", lg: "18%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentStatus}
                        label="role"
                        onChange={(event) => handlePaymentStatus(event.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Pending"}>Pending</MenuItem>
                        <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
                        <MenuItem value={"Paid"}>Paid</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: { xs: "100%", lg: "18%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={paymentMethod}
                        onChange={(event) => handlePaymentMethod(event.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Bikash"}>Bikash</MenuItem>
                        <MenuItem value={"Nagad"}>Nagad</MenuItem>
                        <MenuItem value={"SSLCommerz"}>SSLCommerz</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* Table */}
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={donationRows}
                    columns={columns}
                    loading={donationLoading}
                    slots={{
                        noResultsOverlay: CustomNoResultsOverlay,
                    }}
                    localeText={{
                        noRowsLabel: "No Campaigns Found",
                    }}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
};

export default ManageDonation;