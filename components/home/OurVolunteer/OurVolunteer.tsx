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

const OurVolunteer = () => {

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
        <Container maxWidth={"lg"}>
            <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ color: "#FB8500" }}>Our Volunteer</Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>Our Passionate Volunteers</Typography>
            </Box>
            <Box sx={{ my: "20px" }}>
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
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        volunteerData.map(volunteer => (
                            <SwiperSlide>
                                <Box sx={{
                                    position: "relative",
                                    "&:hover .vInfo": {
                                        visibility: "visible",
                                    }
                                }}>
                                    <img className="w-full h-[300px] z-10 rounded-3xl" src={volunteer.image} alt="" />
                                    <Box className={"vInfo"} sx={{
                                        position: "absolute",
                                        bottom: "10px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        bgcolor: "white",
                                        px: 5,
                                        py: 1,
                                        textAlign: "center",
                                        borderRadius: "5px",
                                        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                                        whiteSpace: "nowrap",
                                        visibility: "hidden"
                                    }}>
                                        <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>{volunteer?.name}</Typography>
                                        <Typography>{volunteer?.title}</Typography>
                                        <Box>
                                            <FacebookIcon />
                                            <TwitterIcon />
                                            <InstagramIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    );
};

export default OurVolunteer;