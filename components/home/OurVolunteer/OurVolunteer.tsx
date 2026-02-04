"use client"

import { Box, Container, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from "next/image";
import { useState } from "react";
import { motion } from 'motion/react';

const MotionBox = motion(Box);

const parentVariants = {
    hover: {
        transition: {
            duration: 0.8
        }
    }
}

const childVariants = {
    initial: { opacity: "0" },
    hover: {
        opacity: "1",
        transition: {
            duration: 0.8
        }
    },


}

const OurVolunteer = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    console.log(isHovered);

    const volunteerData = [
        {
            "name": "Ariful Hasan",
            "title": "Volunteer",
            "image": "/Home/volunteer/img1.jpg",
            "social": {
                "facebook": "https://facebook.com/ariful.hasan",
                "linkedin": "https://linkedin.com/in/ariful-hasan",
                "instagram": "https://instagram.com/ariful.hasan"
            }
        },
        {
            "name": "Nusrat Jahan",
            "title": "Volunteer",
            "image": "/Home/volunteer/img2.jpg",
            "social": {
                "facebook": "https://facebook.com/nusrat.jahan",
                "linkedin": "https://linkedin.com/in/nusrat-jahan",
                "instagram": "https://instagram.com/nusrat.jahan"
            }
        },
        {
            "name": "Rakibul Islam",
            "title": "Volunteer",
            "image": "/Home/volunteer/img3.jpg",
            "social": {
                "facebook": "https://facebook.com/rakibul.islam",
                "linkedin": "https://linkedin.com/in/rakibul-islam",
                "instagram": "https://instagram.com/rakibul.islam"
            }
        },
        {
            "name": "Sharmin Akter",
            "title": "Volunteer",
            "image": "/Home/volunteer/img4.jpg",
            "social": {
                "facebook": "https://facebook.com/sharmin.akter",
                "linkedin": "https://linkedin.com/in/sharmin-akter",
                "instagram": "https://instagram.com/sharmin.akter"
            }
        },
        {
            "name": "Mahmudul Karim",
            "title": "Volunteer",
            "image": "/Home/volunteer/img5.jpg",
            "social": {
                "facebook": "https://facebook.com/mahmudul.karim",
                "linkedin": "https://linkedin.com/in/mahmudul-karim",
                "instagram": "https://instagram.com/mahmudul.karim"
            }
        },
        {
            "name": "Tanvir Rahman",
            "title": "Volunteer",
            "image": "/Home/volunteer/img6.jpg",
            "social": {
                "facebook": "https://facebook.com/tanvir.rahman",
                "linkedin": "https://linkedin.com/in/tanvir-rahman",
                "instagram": "https://instagram.com/tanvir.rahman"
            }
        },
        {
            "name": "Sabrina Hossain",
            "title": "Volunteer",
            "image": "/Home/volunteer/img7.jpg",
            "social": {
                "facebook": "https://facebook.com/sabrina.hossain",
                "linkedin": "https://linkedin.com/in/sabrina-hossain",
                "instagram": "https://instagram.com/sabrina.hossain"
            }
        },
        {
            "name": "Shakil Ahmed",
            "title": "Volunteer",
            "image": "/Home/volunteer/img8.jpg",
            "social": {
                "facebook": "https://facebook.com/shakil.ahmed",
                "linkedin": "https://linkedin.com/in/shakil-ahmed",
                "instagram": "https://instagram.com/shakil.ahmed"
            }
        },
        {
            "name": "Rifat Islam",
            "title": "Volunteer",
            "image": "/Home/volunteer/img9.jpg",
            "social": {
                "facebook": "https://facebook.com/rumana.akter",
                "linkedin": "https://linkedin.com/in/rumana-akter",
                "instagram": "https://instagram.com/rumana.akter"
            }
        },
        {
            "name": "Fahim Ahmed",
            "title": "Volunteer",
            "image": "/Home/volunteer/img10.jpg",
            "social": {
                "facebook": "https://facebook.com/fahim.chowdhury",
                "linkedin": "https://linkedin.com/in/fahim-chowdhury",
                "instagram": "https://instagram.com/fahim.chowdhury"
            }
        }
    ]


    return (
        <Container maxWidth={"lg"} sx={{ mt: "60px" }}>
            <Box sx={{ textAlign: "center", }}>
                {/* <Typography sx={{ color: "#FB8500", fontSize: "20px" }}>Our Volunteer</Typography> */}
                <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>Our Passionate Volunteers</Typography>
            </Box>
            <Box sx={{ my: "50px" }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        volunteerData.map(volunteer => (
                            <SwiperSlide>
                                <MotionBox className="duration-300"
                                    sx={{
                                        bgcolor: "#bbbb",
                                        p: "5px",
                                        borderRadius: "20px",
                                        position: "relative",
                                        transform: "1s",
                                        "&:hover .vInfo": {
                                            opacity: "100%",
                                            transform: "1s",
                                        }
                                    }}
                                    variants={parentVariants}
                                    initial="initial"
                                    whileHover={"hover"}
                                    transition={{
                                        duration: 0.3
                                    }}
                                >
                                    <Image
                                        className="w-full h-65 z-10 rounded-2xl"
                                        src={volunteer.image}
                                        width={500}
                                        height={300}
                                        alt=""
                                    />
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        bgcolor: "white",
                                        m: "8px",
                                        p: "10px",
                                        borderRadius: "20px"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "20px",
                                            color: "#FB8500",
                                            fontWeight: "500"
                                        }}>{volunteer.name}</Typography>
                                        <Typography sx={{
                                            color: "#4e4e4e"
                                        }}>{volunteer.title}</Typography>
                                    </Box>
                                    <MotionBox
                                        variants={childVariants}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px",
                                            position: "absolute",
                                            bottom: "110px",
                                            left: "24%",
                                            // opacity: isHovered ? "1": "0"
                                        }}
                                    >
                                        <Box sx={{
                                            bgcolor: "white",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "50%"
                                        }}>
                                            <FacebookIcon />
                                        </Box>
                                        <Box sx={{
                                            bgcolor: "white",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "50%"
                                        }}>
                                            <InstagramIcon />
                                        </Box>
                                        <Box sx={{
                                            bgcolor: "white",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "50%"
                                        }}>
                                            <TwitterIcon />
                                        </Box>
                                    </MotionBox>
                                </MotionBox>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    );
};

export default OurVolunteer;