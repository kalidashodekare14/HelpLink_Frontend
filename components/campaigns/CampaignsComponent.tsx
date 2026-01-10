"use client"
import { Box, Button, Card, Container, Divider, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Image from "next/image";
type campaignChindren = {
    totalCampaign: any,
    setPage: (event: number) => void
}


const CampaignsComponent = ({ totalCampaign, campaignLoading, setPage }: any) => {

    const loadingCard: any = 10

    console.log("campaigns data", totalCampaign);

    return (
        <Container>
            <Box sx={{ width: "25%" }}>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr",
                },
                gap: "10px",
                my: "20px"
            }}>
                {
                    campaignLoading ? (
                        <>
                            {
                                [...Array(loadingCard)].map((_, index) => (
                                    <Card key={index} sx={{ border: "1px solid #bbbb" }}>
                                        <Skeleton variant="rectangular" sx={{
                                            width: "100%",
                                            height: "200px"
                                        }} />
                                        <Box sx={{ mx: "20px", my: "20px" }}>
                                            <Skeleton variant="rectangular" sx={{
                                                width: "100%",
                                                height: "30px",
                                                my: "10px"
                                            }} />
                                            <Skeleton variant="rectangular" sx={{
                                                width: "100%",
                                                height: "60px",
                                                my: "10px"
                                            }} />
                                            <Box>
                                                <Skeleton variant="rectangular" sx={{
                                                    width: "90%",
                                                    height: "20px",
                                                    my: "10px"
                                                }} />
                                                <Skeleton variant="rectangular" sx={{
                                                    width: "80%",
                                                    height: "20px",
                                                    my: "10px"
                                                }} />
                                                <Skeleton variant="rectangular" sx={{
                                                    width: "80%",
                                                    height: "20px",
                                                    my: "10px"
                                                }} />
                                                <Skeleton variant="rectangular" sx={{
                                                    width: "80%",
                                                    height: "20px",
                                                    my: "10px"
                                                }} />
                                            </Box>
                                            <Skeleton variant="rectangular" sx={{
                                                width: "100%",
                                                height: "50px",
                                                my: "10px",
                                                borderRadius: "5px"
                                            }} />
                                        </Box>
                                    </Card>
                                ))
                            }
                        </>
                    ) : (
                        totalCampaign?.data?.data && (
                            totalCampaign?.data?.data.map((campaign: any) => (
                                <Card key={campaign._id} sx={{ maxWidth: 345 }}>
                                    <Box sx={{ position: "relative" }}>
                                        <Box>
                                            <Image
                                                src={campaign?.image[0]}
                                                alt={campaign?.title}
                                                width={500}
                                                height={300}
                                                className="h-52 w-full object-cover"
                                            />
                                        </Box>
                                        <Box sx={{
                                            bgcolor: "#FB8500",
                                            color: "white",
                                            borderRadius: "10px",
                                            px: "5px",
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            position: "absolute",
                                            bottom: "5px",
                                            right: "5px"
                                        }}>
                                            <Typography>Severity:</Typography>
                                            <Typography>Low</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        p: "10px"
                                    }}>
                                        <Typography gutterBottom fontWeight={"bold"} fontSize={"18px"} component="div">
                                            {campaign?.title}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary', fontSize: "15px" }}>
                                            {campaign?.description.slice(0, 80)}...
                                        </Typography>
                                        <Divider sx={{ my: "5px" }} />
                                        <Box sx={{

                                        }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", my: "5px" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", my: "5px" }}>
                                                    {/* <LocationOnIcon sx={{ fontSize: "21px", color: "#FB8500" }} /> */}
                                                    <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>Location Details</Typography>
                                                </Box>


                                            </Box>
                                            <Box>
                                                <Box sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    color: 'text.secondary',

                                                }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <LocationPinIcon sx={{ fontSize: "22px" }} />
                                                        <Typography sx={{ fontSize: "15px" }}>Division:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px", }}>{campaign.location.division}</Typography>
                                                </Box>
                                                <Divider sx={{ my: "3px" }} />
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <PinDropIcon sx={{ fontSize: "20px" }} />
                                                        <Typography>District:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px" }}>{campaign.location.district}</Typography>
                                                </Box>
                                                <Divider sx={{ my: "3px" }} />
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <PinDropIcon sx={{ fontSize: "20px" }} />
                                                        <Typography>Upazila:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px" }}>{campaign.location.upazila}</Typography>
                                                </Box>
                                                <Divider sx={{ my: "3px" }} />
                                                <Box sx={{ display: "flex", flexDirection: "row", gap: "5px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <HomeIcon sx={{ fontSize: "20px" }} />
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px" }}>{campaign.location.address}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ my: "10px", mx: "10px" }}>
                                        <Link href={`/campaigns/${campaign?._id}`}>
                                            <Button
                                                variant='outlined'
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#fb8500",
                                                    borderColor: "#fb8500",
                                                    color: "white",
                                                    p: "10px 30px",
                                                    '&:hover': {
                                                        bgcolor: "#fb8500",
                                                        borderColor: "#fb8500",
                                                    }
                                                }}
                                            >
                                                Donate Now
                                            </Button>
                                        </Link>
                                    </Box>
                                </Card>
                            ))
                        )
                    )
                }
            </Box>
            {
                !totalCampaign?.data?.data && !campaignLoading && (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "400px"
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Data not found.</Typography>
                            <img className="w-60" src="/Campaign/no_data.png" alt="" />
                        </Box>
                    </Box>
                )
            }
            {
                totalCampaign?.data?.data.length < 1 && (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "400px"
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Data not found.</Typography>
                            <img className="w-60" src="/Campaign/no_data.png" alt="" />
                        </Box>
                    </Box>
                )
            }
            {/* Pagination */}
            {
                totalCampaign?.data?.data && totalCampaign?.data?.data.length > 0 && (
                    <Box sx={{
                        my: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Pagination
                            count={totalCampaign?.data.totalPages}
                            onChange={(e, value) => setPage(value)}
                            variant="outlined"
                            shape="rounded"
                            size="large"
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    // backgroundColor: '#e0e0e0',
                                    color: '#333',
                                    border: "1px solid #fb8500",
                                    '&:hover': {
                                        backgroundColor: '#C2833C',
                                        color: '#333'
                                    },
                                },
                                '& .Mui-selected': {
                                    backgroundColor: '#fb8500 !important',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#a37b27 !important',
                                    },
                                },
                            }}

                        />
                    </Box>
                )
            }
        </Container >
    );
};

export default CampaignsComponent;