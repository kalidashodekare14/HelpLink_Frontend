"use client"

import { Box, Container, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const SuccessProject = () => {




    const successPro = [
        {
            "id": 1,
            "image": "https://i.ibb.co.com/sdLxBz1G/img1.jpg"
        },
        {
            "id": 2,
            "image": "https://i.ibb.co.com/B5RTRL8y/img2.jpg"
        },
        {
            "id": 3,
            "image": "https://i.ibb.co.com/Q3JVk1g8/img3.jpg"
        },
        {
            "id": 4,
            "image": "https://i.ibb.co.com/bgky9fMh/fdfdf.jpg"
        },
        {
            "id": 5,
            "image": "https://i.ibb.co.com/sdXs4BQh/ph-61993-242130.jpg"
        },
        {
            "id": 6,
            "image": "https://i.ibb.co.com/svx09MT9/diverse-people-refugee-camps.jpg"
        },
        {
            "id": 7,
            "image": "https://i.ibb.co.com/qVryzw1/charity-foodbank-volunteer-group.jpg"
        },
    ]






    return (
        <Container maxWidth="lg" sx={{mb: "80px"}}>
            <Box>
                <Typography sx={{
                    color: "#fb8500",
                    textAlign: "center",
                    fontSize: "18px"
                }}>Complete Project</Typography>
                <Typography
                    sx={{
                        textAlign: "center",
                         fontSize: "30px",
                         fontWeight: "400",
                         my: "5px"
                    }}
                >Our Recent Project</Typography>
            </Box>
            <Box sx={{ my: "20px" }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        successPro.map(success => (
                            <SwiperSlide key={success.id}>
                                <Box>
                                    <img className="h-72 w-full rounded-2xl" src={success?.image} alt="" />
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    );
};

export default SuccessProject;