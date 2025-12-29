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
import Link from 'next/link';

const ServiceInfo = () => {

    const serviceData = [
        {
            id: "medical_help",
            title: "Medical Help",
            description: "We provide medical assistance to those in need, ensuring access to essential healthcare services.",
            icon: MedicalServicesIcon
        },
        {
            id: "healthy_food",
            title: "Healthy Foods",
            description: "We distribute nutritious food to communities facing food insecurity, promoting health and well-being.",
            icon: FastfoodIcon
        },
        {
            id: "education_support",
            title: "Education",
            description: "We support educational initiatives to empower individuals and communities through knowledge and learning.",
            icon: MenuBookIcon
        },
        {
            id: "residence_support",
            title: "Residence",
            description: "We provide safe and secure housing solutions for individuals and families in need.",
            icon: HomeWorkIcon
        },
    ]

    return (
        <Container maxWidth={"lg"} sx={{ bgcolor: "#f5f5f5" }}>
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
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    serviceData.map(service => (
                        <SwiperSlide>
                            <Box sx={{
                                bgcolor: "white",
                                p: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                textAlign: "center",
                                my: "50px",
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
                                    <service.icon sx={{ fontSize: "40px", color: "#fb8500", }} />
                                </Box>
                                <Typography className='chil-text' sx={{
                                    fontSize: "30px",
                                    mt: "40px",
                                }}>
                                    {service.title}
                                </Typography>

                                <Typography className='chil-text' sx={{ color: "#4e4e4e", }}>{service.description}</Typography>
                                <Link href={`/service-details/${service.id}`}>
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
                                </Link>
                            </Box>
                        </SwiperSlide>
                    ))
                }

            </Swiper >
        </Container >
    );
};

export default ServiceInfo;