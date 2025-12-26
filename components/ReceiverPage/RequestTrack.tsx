"use client"
import { Box, Button, Container, Menu, MenuItem, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useCampaignRequestDeleteMutation, useRequestTrackQuery } from "@/state/services/receiverService/receiverService";
import { useSession } from "next-auth/react";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import Link from "next/link";
import toast from "react-hot-toast";
import Swal from "sweetalert2";



const paginationModel = { page: 0, pageSize: 5 };

const RequestTrack = () => {

    // User Session
    const { data: session } = useSession();
    // Request Track Data 
    const { data: reqTrackData, isLoading: reqTrackLoading, error } = useRequestTrackQuery(session?.user?.email);
    const requestData = reqTrackData?.data
    // Campaign Request Delete
    const [campaignRequestDelete, { isLoading: campaignDeleteLoading, error: campaignDeleteError }] = useCampaignRequestDeleteMutation();

    const rows = requestData?.map((data: any, index: number) => ({
        id: data._id,
        image: data.image,
        title: data.title,
        category: data.category,
        division: data.location.division,
        district: data.location.district,
        upazila: data.location.upazila,
        address: data.location.address,
        request_status: data.request_status,
        delivery_status: data.delivery_status
    })) || [];



    const columns: GridColDef[] = [
        {
            field: 'image', headerName: 'Image', width: 80, renderCell: (params) => (
                <img src={params.value} alt="Request" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            )
        },
        { field: 'title', headerName: 'Request Title', width: 120 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'division', headerName: 'Division', width: 110 },
        { field: 'district', headerName: 'District', width: 110 },
        { field: 'upazila', headerName: 'Upazila', width: 110 },
        { field: 'address', headerName: 'Address', width: 120 },
        {
            field: 'request_status',
            headerName: 'Request Status',
            width: 120,
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
            width: 120,
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
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                // Menu DropDown
                const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
                const open = Boolean(anchorEl);
                const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = () => {
                    setAnchorEl(null);
                };

                const handleDeleteCampaign = async (id: string) => {
                    handleClose()
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You want to delete the campaign?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            const res = await campaignRequestDelete(id).unwrap();
                            console.log('checking delete data', res.data)
                            if ("data" in res) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your campaign has been deleted.",
                                    icon: "success"
                                });
                            }

                        }
                    });



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
                            <Link href={`/request_track/${params.id}`}>
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                            </Link>
                            <MenuItem onClick={() => handleDeleteCampaign(String(params.id))}>Delete</MenuItem>
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
                    loading={reqTrackLoading}
                    localeText={{
                        noRowsLabel: "No Campaigns Found",
                    }}
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