"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Button, Container, Typography } from '@mui/material';
// Custom CSS
import './Banner.css';
import Link from 'next/link';


const Banner = () => {

    const bannerInfo = [
        {
            id: 1,
            image: "banner1",
            subTittle: "Start donating to help the poor",
            title: "Helping those who need support.",
            description: "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
        },
        {
            id: 2,
            image: "banner2",
            subTittle: "Start donating to help the poor",
            title: "Helping those who need support.",
            description: "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
        },
        {
            id: 3,
            image: "banner3",
            subTittle: "Start donating to help the poor",
            title: "Helping those who need support.",
            description: "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
        },
    ]

    return (
        <Box>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerInfo.map(info => (
                        <SwiperSlide key={info.id}>
                            <Box className={`${info.image}`} sx={{
                                height: { xs: "400px", lg: "600px" },
                                backgroundImage: "banner1",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "left",
                            }}>
                                {/* Content */}
                                <Container maxWidth="lg" sx={{

                                }}>
                                    <Box sx={{ width: { xs: "90%", lg: "60%" } }}>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                color: "#fb8500",
                                                mb: "0px",
                                            }}
                                        >
                                            {info.subTittle}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: "30px", lg: "60px" },
                                            color: "white",
                                            fontWeight: "bold",
                                            lineHeight: "1.2",


                                        }}>
                                            {info.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: "10px", lg: "18px" },
                                            color: "#C8C8C8",
                                            my: "20px",
                                        }}>{info.description}</Typography>
                                    </Box>
                                    <Box sx={{ my: "20px" }}>
                                        <Link href={"/campaigns"}>
                                            <Button
                                                variant='outlined'
                                                sx={{
                                                    // bgcolor: "#fb8500",
                                                    borderColor: "#fb8500",
                                                    color: "white",
                                                    p: "10px 30px",
                                                    '&:hover': {
                                                        bgcolor: "#fb8500",
                                                        borderColor: "#fb8500",
                                                    }
                                                }}
                                            >
                                                Donate Now
                                            </Button>
                                        </Link>
                                    </Box>
                                </Container>

                            </Box>
                        </SwiperSlide>
                    ))
                }

                {/*<SwiperSlide>
                    <Box className="banner2" sx={{
                        minHeight: "100vh",
                        backgroundImage: "banner2",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        px: { xs: "10px", md: "10%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                    }}>
                        
                        <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: "#fb8500",
                                    mb: "0px",
                                }}
                            >
                                Start donating to help the poor
                            </Typography>
                            <Typography sx={{
                                fontSize: "70px",
                                color: "white",
                                fontWeight: "bold",
                                lineHeight: "1.2",
                                display: "flex",
                                flexDirection: "column",

                            }}>
                                <span>Helping those who</span>
                                <span>need support.</span>
                            </Typography>
                        </Box>
                        <Box sx={{ my: "20px" }}>
                            <Button
                                variant='outlined'
                                sx={{
                                    // bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                    color: "white",
                                    p: "10px 30px",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        borderColor: "#fb8500",
                                    }
                                }}
                            >
                                Donate Now
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide>
                */}
                {/* <SwiperSlide>
                    <Box className="banner3" sx={{
                        minHeight: "100vh",
                        backgroundImage: "banner1",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        px: { xs: "10px", md: "10%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                    }}>
                        <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: "#fb8500",
                                    mb: "0px",
                                }}
                            >
                                Start donating to help the poor
                            </Typography>
                            <Typography sx={{
                                fontSize: "70px",
                                color: "white",
                                fontWeight: "bold",
                                lineHeight: "1.2",
                                display: "flex",
                                flexDirection: "column",

                            }}>
                                <span>Helping those who</span>
                                <span>need support.</span>
                            </Typography>
                        </Box>
                        <Box sx={{ my: "20px" }}>
                            <Button
                                variant='outlined'
                                sx={{
                                    // bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                    color: "white",
                                    p: "10px 30px",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        borderColor: "#fb8500",
                                    }
                                }}
                            >
                                Donate Now
                            </Button>
                        </Box>
                    </Box>
                </SwiperSlide> */}

            </Swiper>
        </Box>
    );
};

export default Banner;