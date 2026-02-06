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
import { motion } from "motion/react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionImage = motion(Image);


const parentVariants = {
    initial: {},
    hover: {},
    animate: {}
}


const childImageVariants = {
    initial: {
        scale: 1,
        transition: {
            duration: 0.3,
            // ease: [0.4, 0, 0.2, 1],
        },
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            // ease: [0.4, 0, 0.2, 1],
        }
    }
}


const SuccessProject = () => {


    const successPro = [
        {
            "id": 1,
            "image": "/Home/success_project/img3.jpg",
            "title": "Health Project Completed",
            "description": "Our health donation project provided medical support, supplies, and care to those who needed it most, improving well-being and saving lives."
        },
        {
            "id": 2,
            "image": "/Home/success_project/img4.jpg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },
        {
            "id": 3,
            "image": "/Home/success_project/img5.jpg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },
        {
            "id": 4,
            "image": "/Home/success_project/img1.jpeg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },
        {
            "id": 5,
            "image": "/Home/success_project/img2.jpg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },

        {
            "id": 6,
            "image": "/Home/success_project/img6.jpg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },
        {
            "id": 7,
            "image": "/Home/success_project/img7.jpg",
            "title": "Food Donation Completed",
            "description": "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community."
        },
    ]






    return (
        <Box sx={{
            py: "80px",
            bgcolor: "#F5F5F5"
        }}>
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
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        successPro.map(success => (
                            <SwiperSlide key={success.id}>
                                <MotionBox
                                    variants={parentVariants}
                                    initial="initial"
                                    whileHover={"hover"}
                                    sx={{
                                        position: "relative",
                                        borderRadius: "12px",
                                        overflow: "hidden"
                                    }}
                                >
                                    <MotionImage
                                        variants={childImageVariants}
                                        initial="initial"
                                        whileHover={"hover"}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                        className="h-[70vh] w-full rounded-xl"
                                        src={success?.image}
                                        width={500}
                                        height={300}
                                        alt="Success"
                                    />
                                    {/* <div className="h-32 w-full bg-[#00000010]">

                                    </div> */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 15,
                                            left: 22,
                                            backdropFilter: 'blur(10px)',
                                            bgcolor: "#00000010",
                                            borderRadius: "10px",
                                            color: "white",
                                            maxWidth: "90%",
                                            p: "20px"
                                        }}
                                    >
                                        <Typography sx={{
                                            fontSize: "22px",
                                            fontWeight: "500",
                                            color: "#FB8500"
                                        }}>{success?.title}</Typography>
                                        <Typography>{success?.description}</Typography>
                                    </Box>
                                </MotionBox>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Box>
    );
};

export default SuccessProject;