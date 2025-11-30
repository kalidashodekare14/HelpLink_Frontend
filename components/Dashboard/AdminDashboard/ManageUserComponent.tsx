"use client"

import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useTotalUserManageQuery, useUserRoleManageMutation, useUserStatusManageMutation } from "@/state/services/adminService/adminService";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const paginationModel = { page: 0, pageSize: 5 };
import Swal from 'sweetalert2'

const ManageUserComponent = () => {

    const [roleFilter, setRoleFilter] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<boolean | undefined>();
    const [search, setSearch] = useState<string>("")

    // total user fetched
    const query = {
        search: search,
        role: roleFilter,
        status: statusFilter
    }
    const { data: totalUserManage, isLoading, error } = useTotalUserManageQuery(query);
    const userRows = totalUserManage?.data?.map((user: any) => ({
        id: user._id,
        joinDate: new Date(user.createdAt).toLocaleDateString(),
        lastActive: new Date(user.updatedAt).toLocaleDateString(),
        ...user
    }))


    // user role change
    const [userRoleManage, { isLoading: roleLoading, isSuccess, error: roleError }] = useUserRoleManageMutation()
    // user status change
    const [userStatusManage, { isLoading: statusLoading, error: statusError }] = useUserStatusManageMutation()

    const columns: GridColDef[] = [
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

                const handleRoleAccess = async (datas: any) => {
                    try {
                        const { id, role } = datas
                        console.log('chekcing id', id);
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You want to change roles.",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Change it!"
                        }).then(async (result) => {
                            if (result.isConfirmed) {

                                const result = await userRoleManage({ id: id, role: role })
                                if ("data" in result) {
                                    Swal.fire({
                                        title: "Updated!",
                                        text: "Your role change successfully.",
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
                            <MenuItem onClick={() => handleRoleAccess({ role: "receiver", id: params.row._id })}>Receiver</MenuItem>
                            <MenuItem onClick={() => handleRoleAccess({ role: "donor", id: params.row._id })}>Donor</MenuItem>
                            <MenuItem onClick={() => handleRoleAccess({ role: "volunteer", id: params.row._id })}>Volunteer</MenuItem>
                            <MenuItem onClick={() => handleRoleAccess({ role: "admin", id: params.row._id })}>Admin</MenuItem>
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

                const handleStatusChange = async (datas: any) => {
                    try {
                        const { id, status } = datas;

                        Swal.fire({
                            title: "Are you sure?",
                            text: "Do you want to change status?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Change it!"
                        }).then(async (result) => {
                            if (result.isConfirmed) {

                                const result = await userStatusManage({ id: id, status: status })
                                if ("data" in result) {
                                    Swal.fire({
                                        title: "Updated!",
                                        text: "Your status change successfully.",
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
                            <MenuItem onClick={() => handleStatusChange({ status: true, id: params.row._id })}>Active</MenuItem>
                            <MenuItem onClick={() => handleStatusChange({ status: false, id: params.row._id })}>Unactive</MenuItem>
                        </Menu>
                    </>
                )
            }
        },

    ];


    const handleRoleFilter = (value: any) => {
        console.log('checking data', value);
        setRoleFilter(value);
    }
    const handleStatusFilter = (value: any) => {
        setStatusFilter(value);
    }


    return (
        <Box sx={{ p: "20px" }}>
            <Typography fontSize={25}>User Management</Typography>
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
                <TextField sx={{ width: { xs: "100%", lg: "30%" } }} onChange={(event) => setSearch(event?.target.value)} size="small" id="outlined-basic" label="Search..." variant="outlined" />
                <FormControl sx={{ width: { xs: "100%", lg: "15%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={roleFilter}
                        label="role"
                        onChange={(event) => handleRoleFilter(event.target.value)}
                    >
                        <MenuItem value={"receiver"}>Receiver</MenuItem>
                        <MenuItem value={"donor"}>Donor</MenuItem>
                        <MenuItem value={"volunteer"}>Volunteer</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: { xs: "100%", lg: "15%" } }} size='small'>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={(event) => handleStatusFilter(event.target.value)}
                    >
                        <MenuItem value={"true"}>Active</MenuItem>
                        <MenuItem value={"false"}>Unactive</MenuItem>
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