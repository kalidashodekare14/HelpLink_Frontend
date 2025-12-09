"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Button, Container, Typography } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const ServiceInfo = () => {
    return (
        <Container sx={{ bgcolor: "#f5f5f5" }}>
            <Box sx={{
                p: { xs: "20px", md: "40px" },
            }}>
                <Typography variant="h4" sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    textAlign: "center",
                    my: "10px",
                    color: "#fb8500",
                }}>
                    Our Services
                </Typography>
                <Typography variant="h6" sx={{
                    fontSize: "30px",
                    fontWeight: "400",
                    textAlign: "center",
                    mb: "20px",
                    px: { xs: "10px", md: "100px" },
                    width: "70%",
                    margin: "0 auto",

                }}>
                    Providing Humanitarian services to all people is What we do
                </Typography>
            </Box>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    10: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
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
                <SwiperSlide className='m-10'>
                    <Box sx={{
                        bgcolor: "white",
                        p: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "10px",
                        my: "20px",
                        position: "relative",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                            bgcolor: '#B76200',

                        },
                        '&:hover .chil-text': {
                            color: 'white',
                        },
                    }}>
                        <Box className="icon-wapper" sx={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            p: "30px",
                            position: "absolute",
                            top: "-50px",
                            bgcolor: "white",
                            border: '2px solid #fb8500',
                        }}>
                            <MedicalServicesIcon sx={{ fontSize: "40px", color: "#fb8500", }} />
                        </Box>
                        <Typography className='chil-text' sx={{
                            fontSize: "30px",
                            mt: "40px",
                        }}>
                            Medical Help
                        </Typography>

                        <Typography className='chil-text'>We provide medical assistance to those in need, ensuring access to essential healthcare services.</Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                bgcolor: "#fb8500",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                p: "10px 30px",
                                my: "20px",
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className='m-10'>
                    <Box sx={{
                        bgcolor: "white",
                        p: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "10px",
                        my: "20px",
                        position: "relative",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                            bgcolor: '#B76200',

                        },
                        '&:hover .chil-text': {
                            color: 'white',
                        },
                    }}>
                        <Box sx={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            p: "30px",
                            position: "absolute",
                            top: "-50px",
                            bgcolor: "white",
                            border: '2px solid #fb8500',
                        }}>
                            <FastfoodIcon sx={{ fontSize: "40px", color: "#fb8500", }} />
                        </Box>
                        <Typography className='chil-text' sx={{ fontSize: "30px", mt: "40px" }}>Healthy Foods</Typography>
                        <Typography className='chil-text'> We distribute nutritious food to communities facing food insecurity, promoting health and well-being.</Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                bgcolor: "#fb8500",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                p: "10px 30px",
                                my: "20px",
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className='m-10'>
                    <Box sx={{
                        bgcolor: "white",
                        p: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "10px",
                        my: "20px",
                        position: "relative",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                            bgcolor: '#B76200',

                        },
                        '&:hover .chil-text': {
                            color: 'white',
                        },
                    }}>
                        <Box sx={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            p: "30px",
                            position: "absolute",
                            top: "-50px",
                            bgcolor: "white",
                            border: '2px solid #fb8500',
                        }}>
                            <MenuBookIcon sx={{ fontSize: "40px", color: "#fb8500", }} />
                        </Box>
                        <Typography className='chil-text' sx={{ fontSize: "30px", mt: "40px" }}>Education</Typography>
                        <Typography className='chil-text'> We support educational initiatives to empower individuals and communities through knowledge and learning.</Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                bgcolor: "#fb8500",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                p: "10px 30px",
                                my: "20px",
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className='m-10'>
                    <Box sx={{
                        bgcolor: "white",
                        p: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "10px",
                        my: "20px",
                        position: "relative",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-in-out",
                        '&:hover': {
                            bgcolor: '#B76200',

                        },
                        '&:hover .chil-text': {
                            color: 'white',
                        },
                    }}>
                        <Box sx={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            p: "30px",
                            position: "absolute",
                            top: "-50px",
                            bgcolor: "white",
                            border: '2px solid #fb8500',
                        }}>
                            <HomeWorkIcon sx={{ fontSize: "40px", color: "#fb8500", }} />
                        </Box>
                        <Typography className='chil-text' sx={{ fontSize: "30px", mt: "40px" }}>Residence</Typography>
                        <Typography className='chil-text'> We provide safe and secure housing solutions for individuals and families in need.</Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                bgcolor: "#fb8500",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                p: "10px 30px",
                                my: "20px",
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </SwiperSlide>
            </Swiper >
        </Container >
    );
};

export default ServiceInfo;