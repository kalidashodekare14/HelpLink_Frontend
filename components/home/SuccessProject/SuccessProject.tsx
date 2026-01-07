"use client"

import { Box, Container, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";

const SuccessProject = () => {









    const successPro = [
        {
            "id": 1,
            "image": "https://i.postimg.cc/cL3k6C5w/img1.jpg"
        },
        {
            "id": 2,
            "image": "https://i.postimg.cc/V5QMhf9n/img2.jpg"
        },
        {
            "id": 3,
            "image": "https://i.postimg.cc/Rq5fYS11/img3.jpg"
        },
        {
            "id": 4,
            "image": "https://i.postimg.cc/d1fG8mhQ/diverse-people-refugee-camps.jpg"
        },
        {
            "id": 5,
            "image": "https://i.postimg.cc/gJ73vqx0/fdfdf.jpg"
        },
    ]






    return (
        <Container maxWidth="lg" sx={{ mb: "80px" }}>
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
                                    <Image
                                        className="h-72 w-full rounded-2xl"
                                        src={success?.image}
                                        width={500}
                                        height={300}
                                        alt="Success"
                                    />
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