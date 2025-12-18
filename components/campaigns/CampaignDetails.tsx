"use client"

import { useGetCampaignDetailsQuery } from "@/state/services/publicService/campaignsService";
import { Box, Button, Container, Skeleton, Stack, Typography } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';

const CampaignDetails = () => {

    const { id } = useParams()
    const { data: campaignDetails, isLoading: campaignLoading, error: campaignError } = useGetCampaignDetailsQuery(id ? String(id) : skipToken);
    const detailsData = campaignDetails?.data




    return (
        <Container sx={{ py: 5 }}>
            {/* Main Content */}
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: "10px"
            }}>
                {/* Left Slide Content */}
                {
                    campaignLoading ? (
                        <Box sx={{ width: { sx: "100%", lg: "50%" } }}>
                            <Skeleton variant="rectangular" sx={{
                                width: { sx: "100%", lg: "50%" },
                                height: { xs: "250px", lg: "450px" },
                                borderRadius: "16px"
                            }} />
                        </Box>
                    ) : (
                        <Box sx={{
                            width: { sx: "100%", lg: "50%" },
                            border: "1px solid #bbb",
                            backgroundColor: "white",
                            boxShadow: 2,
                            borderRadius: "16px"
                        }}>
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                {
                                    detailsData?.image?.map((image: string) => (
                                        <SwiperSlide>
                                            <img className="w-full h-[250px] lg:h-[450px] rounded-2xl" src={image} alt="" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </Box>
                    )
                }
                {/* Right Info Content */}
                {
                    campaignLoading ? (
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"10px"}
                            sx={{
                                width: { sx: "100%", lg: "50%" },
                            }}
                        >
                            <Skeleton variant="rectangular" sx={{
                                width: { xs: "100%", lg: "100%" },
                                height: "30px"
                            }} />
                            <Skeleton variant="rectangular" sx={{
                                width: { xs: "100%", lg: "100%" },
                                height: "80px"
                            }}
                            />
                            <Skeleton variant="rectangular" sx={{
                                width: { xs: "100%", lg: "100%" },
                                height: "20px"
                            }} />
                            <Box>
                                <Skeleton variant="rectangular" sx={{
                                    width: { xs: "100%", lg: "100%" },
                                    height: "20px"
                                }}
                                />
                                <Box sx={{ ml: "10px", mt: "10px" }}>
                                    <Skeleton sx={{ my: "5px", width: { xs: "100%", lg: "50%" } }} variant="rectangular" />
                                    <Skeleton sx={{ my: "5px", width: { xs: "100%", lg: "50%" } }} variant="rectangular" />
                                    <Skeleton sx={{ my: "5px", width: { xs: "100%", lg: "50%" } }} variant="rectangular" />
                                    <Skeleton sx={{ my: "5px", width: { xs: "100%", lg: "50%" } }} variant="rectangular" />
                                </Box>
                            </Box>
                            <Skeleton variant="rectangular" width={200} sx={{ borderRadius: "5px" }} height={50} />
                        </Box>
                    ) : (
                        <Box sx={{
                            width: { sx: "100%", lg: "50%" },
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px"
                        }}>
                            <Typography fontSize={"30px"}>{detailsData?.title}</Typography>
                            <Typography fontSize={"16px"} color="#605F5F">{detailsData?.description}</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CategoryIcon />
                                <Typography fontSize={"16px"}>Category: {detailsData?.category}</Typography>
                            </Box>
                            {
                                detailsData?.location ? (
                                    <Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "500" }}>
                                            <LocationOnIcon />
                                            <Typography fontSize={"16px"}>Location</Typography>
                                        </Box>
                                        <Stack spacing={1} color="#605F5F" sx={{ ml: "20px", mt: "5px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                    <Typography sx={{ fontSize: "15px" }}>Division:</Typography>
                                                </Box>
                                                <Typography sx={{ fontSize: "15px" }}>{detailsData?.location?.division}</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", }}>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                    <Typography sx={{ fontSize: "15px" }}>District:</Typography>
                                                </Box>
                                                <Typography sx={{ fontSize: "15px" }}>{detailsData?.location?.district}</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", }}>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                    <Typography sx={{ fontSize: "15px" }}>Upazila:</Typography>
                                                </Box>
                                                <Typography sx={{ fontSize: "15px" }}>{detailsData?.location?.upazila}</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", }}>
                                                <Box sx={{ display: "flex", alignItems: "center", }}>
                                                    <ArrowRightIcon sx={{ fontSize: "20px" }} />
                                                    <Typography sx={{ fontSize: "15px" }}>Address:</Typography>
                                                </Box>
                                                <Typography sx={{ fontSize: "15px" }}>{detailsData?.location?.address}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                ) : (
                                    ""
                                )
                            }
                            <Button
                                variant='outlined'
                                sx={{
                                    width: "50%",
                                    bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                    color: "white",
                                    p: "10px 30px",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        borderColor: "#fb8500",
                                    },
                                    boxShadow: "5px 5px 10px #797979"
                                }}
                            >
                                Donate Now
                            </Button>
                        </Box>
                    )
                }

            </Box>

        </Container>
    );
};

export default CampaignDetails;