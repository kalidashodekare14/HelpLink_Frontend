"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';


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
                    <Box sx={{
                        minHeight: "550px",
                        backgroundImage: "url('/Home/banner1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        minHeight: "550px",
                        backgroundImage: "url('/Home/banner2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        minHeight: "550px",
                        backgroundImage: "url('/Home/banner3.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;