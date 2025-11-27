"use client"

import { useGetCampaignDetailsQuery } from "@/state/services/publicService/campaignsService";
import { Box, Button, Container, List, ListItem, Typography } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CategoryIcon from '@mui/icons-material/Category';

const CampaignDetails = () => {

    const { id } = useParams()
    const { data: campaignDetails, isLoading, error } = useGetCampaignDetailsQuery(id ? String(id) : skipToken);
    const detailsData = campaignDetails?.data



    return (
        <Container sx={{ py: 10 }}>
            <Box sx={{
                display: "flex",
                gap: "10px"
            }}>
                <Box sx={{
                    width: "50%",
                    border: "1px solid #bbb",
                    backgroundColor: "white",
                    boxShadow: 2,
                    borderRadius: "16px"
                }}>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {
                            detailsData?.image?.map((image: string) => (
                                <SwiperSlide>
                                    <img className="w-full h-[400px] rounded-2xl" src={image} alt="" />
                                </SwiperSlide>
                            ))
                        }
                        

                    </Swiper>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <Typography fontSize={"25px"}>{detailsData?.title}</Typography>
                    <Typography fontSize={"16px"}>{detailsData?.description}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <CategoryIcon />
                        <Typography fontSize={"16px"}>Category: {detailsData?.category}</Typography>
                    </Box>

                    <Box
                        fontSize={"16px"}
                        sx={{
                            display: "flex",
                            gap: "5px"
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <LocationOnIcon />
                            <Typography>Location:</Typography>
                        </Box>
                        {
                            detailsData?.location ? (
                                <>
                                    <Typography>{detailsData?.location?.division}</Typography>
                                    <ArrowRightIcon />
                                    <Typography>{detailsData?.location?.district}</Typography>
                                    <ArrowRightIcon />
                                    <Typography>{detailsData?.location?.upazila}</Typography>
                                </>
                            ) : (
                                ""
                            )
                        }
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <MyLocationIcon />
                        <Typography fontSize={"16px"}>Addrress: {detailsData?.location?.address}</Typography>
                    </Box>
                    <Button variant='outlined'
                        sx={{
                            bgcolor: "#0048e8",
                            color: "white",
                            width: "40%"
                        }}>Donate Here</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CampaignDetails;