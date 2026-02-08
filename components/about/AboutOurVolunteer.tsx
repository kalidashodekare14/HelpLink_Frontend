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
import { motion } from 'motion/react';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const parentVariants = {
    initial: {},
    hover: {},
    animate: {}
}

const childVariants = {
    initial: {
        opacity: 0,
        y: 8
    },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    },


}

const childInfoVariants = {
    initial: {
        backgroundColor: "#FFFFFF"
    },
    hover: {
        backgroundColor: "#fb8500",
        transition: {
            duration: 0.3
        }
    }
}

const childNameVariants = {
    initial: {
        color: "#fb8500"
    },
    hover: {
        color: "#FFFFFF",
        transition: {
            duration: 0.3
        }
    }
}
const childTitleVariants = {
    initial: {
        color: "#fb8500"
    },
    hover: {
        color: "#FFFFFF",
        transition: {
            duration: 0.3
        }
    }
}


const AboutOurVolunteer = () => {


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
                <MotionTypography
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{ fontSize: "30px", fontWeight: "500" }}
                >
                    Our Passionate Volunteers
                </MotionTypography>
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
                                <MotionBox
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <MotionBox
                                        variants={parentVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        sx={{
                                            bgcolor: "#bbbb",
                                            p: "5px",
                                            borderRadius: "20px",
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            className="w-full h-65 z-10 rounded-2xl"
                                            src={volunteer.image}
                                            width={500}
                                            height={300}
                                            alt=""
                                        />
                                        <MotionBox
                                            variants={childInfoVariants}
                                            // initial="initial"
                                            // whileHover="hover"
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                bgcolor: "white",
                                                m: "8px",
                                                p: "10px",
                                                borderRadius: "20px"
                                            }}>
                                            <MotionTypography
                                                variants={childNameVariants}
                                                sx={{
                                                    fontSize: "20px",
                                                    // color: "#FB8500",
                                                    fontWeight: "500"
                                                }}>
                                                {volunteer.name}
                                            </MotionTypography>
                                            <Typography
                                                sx={{
                                                    color: "#4e4e4e"
                                                }}>
                                                {volunteer.title}
                                            </Typography>
                                        </MotionBox>
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
                                            }}
                                        >
                                            <MotionBox
                                                whileHover={{
                                                    scale: 1.2
                                                }}
                                                whileTap={{
                                                    scale: 1.1
                                                }}
                                                sx={{
                                                    bgcolor: "white",
                                                    width: "40px",
                                                    height: "40px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    cursor: "pointer"
                                                }}>
                                                <FacebookIcon />
                                            </MotionBox>
                                            <MotionBox
                                                whileHover={{
                                                    scale: 1.2
                                                }}
                                                whileTap={{
                                                    scale: 1.1
                                                }}
                                                sx={{
                                                    bgcolor: "white",
                                                    width: "40px",
                                                    height: "40px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    cursor: "pointer"
                                                }}>
                                                <InstagramIcon />
                                            </MotionBox>
                                            <MotionBox
                                                whileHover={{
                                                    scale: 1.2
                                                }}
                                                whileTap={{
                                                    scale: 1.1
                                                }}
                                                sx={{
                                                    bgcolor: "white",
                                                    width: "40px",
                                                    height: "40px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    cursor: "pointer"
                                                }}>
                                                <TwitterIcon />
                                            </MotionBox>
                                        </MotionBox>
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

export default AboutOurVolunteer;