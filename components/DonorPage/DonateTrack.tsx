"use client"

import { Box,  Container, Paper,  Typography } from "@mui/material";
import { useDonateTrackQuery } from "@/state/services/donorService/donorService";
import { useSession } from "next-auth/react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from "next/link";

const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Image',
        width: 70,
        renderCell: (params) => {
            console.log("checking params value", params)
            return (
                <>
                    <Link href={`/campaigns/${params.id}`}>
                        <img
                            src={params.value}
                            alt="Campaign"
                            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                    </Link>

                </>
            )
        }
    },
    { field: 'campaign_name', headerName: 'Campaign Name', width: 250 },
    { field: 'category', headerName: 'Category', width: 130 },
    {
        field: 'amount',
        headerName: 'Amount',
        type: 'number',
        width: 100,
        renderCell: (params) => {
            console.log(params.value);
            return (
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "5px", mb: "5px" }}>
                        {Array.isArray(params.value) ? (
                            params.value.map((value: number, index: number) => (
                                <Typography key={index}>৳ {value}</Typography>
                            ))
                        ) : (
                            <span>৳ {params.value}</span>
                        )}
                    </Box>
                </div>
            )
        }
    },
    {
        field: 'payment_status',
        headerName: 'Payment Status',
        width: 130,
        renderCell: (params) => (
            <div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "5px", mb: "5px" }}>
                    {Array.isArray(params.value) ? (
                        params.value.map((value: string, index: number) => (
                            <>
                                {
                                    value === "Paid" && (
                                        <Box sx={{ display: "flex" }}>
                                            <CheckCircleIcon sx={{ color: "#00B400" }} />
                                            <Typography key={index}>{value}</Typography>
                                        </Box>
                                    )
                                }
                                {
                                    value === "Unpaid" && (
                                        <Box sx={{ display: "flex" }}>
                                            <CancelIcon sx={{ color: "#ef233c" }} />
                                            <Typography key={index}>{value}</Typography>
                                        </Box>
                                    )
                                }

                                {
                                    value === "Pending" && (
                                        <Box sx={{ display: "flex" }}>
                                            <CancelIcon sx={{ color: "#ef233c" }} />
                                            <Typography key={index}>{value}</Typography>
                                        </Box>
                                    )
                                }
                            </>
                        ))
                    ) : (
                        <span>{params.value}</span>
                    )}
                </Box>
            </div>
        )
    },
    {
        field: 'payment_method',
        headerName: 'Payment Method',
        width: 200,
        renderCell: (params) => (
            <div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "5px", mb: "5px" }}>
                    {Array.isArray(params.value) ? (
                        params.value.map((value: string, index: number) => (
                            <>
                                {
                                    value === "SSLCommerz" && (
                                        <Typography sx={{ bgcolor: "#2859A6", color: "white", px: "5px" }}>{value}</Typography>
                                    )
                                }
                                {
                                    value === "Bikash" && (
                                        <Typography sx={{ bgcolor: "#CA1F50", color: "white", px: "5px" }}>{value}</Typography>
                                    )
                                }
                                {
                                    value === "Nagad" && (
                                        <Typography sx={{ bgcolor: "#ED872B", color: "white", px: "5px" }}>{value}</Typography>
                                    )
                                }
                            </>
                            // <Typography key={index}>{value}</Typography>
                        ))
                    ) : (
                        // <>
                        //     {
                        //         params.value === "SSLCommerz" && (
                        //             <Typography sx={{bgcolor: "#2859A6", color: "white"}}>{params.value}</Typography>
                        //         )
                        //     }

                        // </>
                        <span>{params.value}</span>
                    )}
                </Box>
            </div>
        )
    },
    {
        field: 'donate_date',
        headerName: 'Donate Date',
        width: 130,
        renderCell: (params) => (
            <div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "5px", mb: "5px" }}>
                    {Array.isArray(params.value) ? (
                        params.value.map((value: string, index: number) => (
                            <Typography key={index}>{value}</Typography>
                        ))
                    ) : (
                        <span>{params.value}</span>
                    )}
                </Box>
            </div>
        )
    },
];

const paginationModel = { page: 0, pageSize: 5 };

const DonateTrack = () => {

    // User Session
    const { data: session } = useSession();
    // Donate Track Data Fetched 
    const { data: donateTrack, isLoading: donateTracLoading, error } = useDonateTrackQuery(session?.user?.email);
    const donateData = donateTrack?.data
    // Data Grid Rows
    const rows = donateData?.map((data: any, index: number) => ({
        id: data._id,
        image: data.image,
        campaign_name: data.title,
        category: data.category,
        amount: data.donationDetails.map((d: any) => d.amount) || 0,
        payment_status: data.donationDetails.map((d: any) => d.payment_status) || "N/A",
        payment_method: data.donationDetails.map((d: any) => d.payment_method) || "N/A",
        donate_date: data.donationDetails.map((d: any) => d.date ? new Date(d.date).toLocaleDateString() : "N/A"),
    })) || [];


    return (
        <Container>
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url('/Profile/profile.jpg')",
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
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Donate Track</Typography>
            </Box>
            {/* Table */}
            <Paper sx={{ height: 400, width: '100%', my: "20px" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={donateTracLoading}
                    localeText={{
                        noRowsLabel: "No Donate Data Found",
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

export default DonateTrack;