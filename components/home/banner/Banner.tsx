"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
// Custom CSS
import './Banner.css';


const Banner = () => {
    return (
        <div>
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
                <SwiperSlide>
                    <Box className="banner1" sx={{
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
                        {/* Content */}
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
                            }}>
                                Helping those who need support.
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
                <SwiperSlide>
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
                        {/* Content */}
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
                            }}>
                                Helping those who need support.
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
                <SwiperSlide>
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
                        {/* Content */}
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
                            }}>
                                Helping those who need support.
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

            </Swiper>
        </div>
    );
};

export default Banner;