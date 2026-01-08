"use client"
import { Box, Button, Card, Container, Divider, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
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
                                    <Image
                                        src={campaign?.image[0]}
                                        alt={campaign?.title}
                                        width={500}
                                        height={300}
                                        className="h-52 w-full object-cover"
                                    />
                                    <Box sx={{
                                        p: "10px"
                                    }}>
                                        <Typography gutterBottom fontWeight={"bold"} fontSize={"18px"} component="div">
                                            {campaign?.title}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary', fontSize: "16px" }}>
                                            {campaign?.description.slice(0, 80)}...
                                        </Typography>
                                        <Divider></Divider>
                                        <Box sx={{

                                        }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", my: "5px" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    <LocationOnIcon sx={{ fontSize: "21px", color: "#FB8500" }} />
                                                    <Typography sx={{ fontSize: "16px" }}>Location</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    {/* <LabelIcon sx={{ fontSize: "21px", color: "#FB8500" }} /> */}
                                                    <Stack direction="row" alignItems={"center"} spacing={"5px"}>
                                                        <Typography>Severity:</Typography>
                                                        <Typography sx={{ color: 'text.secondary' }}>{campaign?.situation?.severity}</Typography>
                                                        {
                                                            campaign?.situation?.severity === "High" && (
                                                                <Typography className="h-5 w-5 rounded-full bg-red-500"></Typography>
                                                            )
                                                        }
                                                        {
                                                            campaign?.situation?.severity === "Medium" && (
                                                                <Typography className="h-5 w-5 rounded-full bg-[#ffb703]"></Typography>
                                                            )
                                                        }
                                                        {
                                                            campaign?.situation?.severity === "Low" && (
                                                                <Typography className="h-5 w-5 rounded-full bg-[#0077b6]"></Typography>
                                                            )
                                                        }
                                                    </Stack>
                                                </Box>

                                            </Box>
                                            <Box>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                        <Typography sx={{ fontSize: "15px" }}>Division:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px", }}>{campaign.location.division}</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                        <Typography>District:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px" }}>{campaign.location.district}</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", color: 'text.secondary' }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                                        <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                        <Typography>Upazila:</Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: "15px" }}>{campaign.location.upazila}</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: 'text.secondary' }}>
                                                    <ArrowRightIcon sx={{ fontSize: "20px" }} />
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