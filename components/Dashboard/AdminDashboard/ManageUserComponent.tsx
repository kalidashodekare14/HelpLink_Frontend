"use client"

import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useTotalUserManageQuery } from "@/state/services/adminService.tsx/adminService";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Noto_Sans_Imperial_Aramaic } from "next/font/google";
const paginationModel = { page: 0, pageSize: 5 };

const ManageUserComponent = () => {


    const { data: totalUserManage, isLoading, error } = useTotalUserManageQuery()
    const userRows = totalUserManage?.data?.map((user: any) => ({
        id: user._id,
        joinDate: new Date(user.createdAt).toLocaleDateString(),
        lastActive: new Date(user.updatedAt).toLocaleDateString(),
        ...user
    }))

    const columns: GridColDef[] = [
        // { field: '_id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Full Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'isActive',
            headerName: 'Status',
            width: 100,
            renderCell: (params) => (
                <>
                    {
                        params.value ? (
                            <span className="bg-[#219ebc] p-2 rounded-full text-white">Active</span>
                        ) : (
                            <span className="bg-[#1d3557] p-2 rounded-full text-white">Unactive</span>
                        )
                    }
                </>
            )
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 100,
            renderCell: (params) => (
                <>
                    {
                        params.value === "receiver" && (
                            <span className="bg-[#bfd200] p-2 rounded-full text-white">Receiver</span>
                        )
                    }
                    {
                        params.value === "donor" && (
                            <span className="bg-[#2a9d8f] p-2 rounded-full text-white">Donor</span>
                        )
                    }
                    {
                        params.value === "volunteer" && (
                            <span className="bg-[#e76f51] p-2 rounded-full text-white">Volunteer</span>
                        )
                    }
                    {
                        params.value === "admin" && (
                            <span className="bg-[#00bbf9] p-2 rounded-full text-white">Admin</span>
                        )
                    }
                </>
            )
        },
        { field: 'joinDate', headerName: 'Join Date', width: 130 },
        { field: 'lastActive', headerName: 'Last Active', width: 130 },
        {
            field: 'Role Access',
            headerName: 'Role Access',
            width: 130,
            sortable: false,
            renderCell: (params) => {
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
                            <MoreVertIcon />
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
                            <MenuItem onClick={handleClose}>Receiver</MenuItem>
                            <MenuItem onClick={handleClose}>Donor</MenuItem>
                            <MenuItem onClick={handleClose}>Volunteer</MenuItem>
                            <MenuItem onClick={handleClose}>Admin</MenuItem>
                        </Menu>
                    </>
                )
            }
        },
        {
            field: 'Status Change',
            headerName: 'Status Change',
            width: 100,
            sortable: false,
            renderCell: (params) => {
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
                            <MoreVertIcon />
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
                            <MenuItem onClick={handleClose}>Active</MenuItem>
                            <MenuItem onClick={handleClose}>Unactive</MenuItem>
                        </Menu>
                    </>
                )
            }
        },

    ];


    return (
        <Box sx={{ p: "20px" }}>
            <Typography fontSize={25}>User Management</Typography>
            <Typography>Manage all users in one place. Control access, assign roles, and monitor activity across your platform.</Typography>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #bbbb",
                p: "10px",
                my: "10px"
            }}>
                <TextField size="small" id="outlined-basic" label="Search..." variant="outlined" />
                <FormControl sx={{ width: "10%" }} size='small'>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: "10%" }} size='small'>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* Table */}
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userRows}
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

export default ManageUserComponent;