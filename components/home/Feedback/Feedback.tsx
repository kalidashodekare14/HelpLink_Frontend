"use client"

import { Box, Container, Rating, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from "motion/react";


const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Feedback = () => {

    const reviewData = [
        {
            "name": "Arman Hossain",
            "location": "Dhaka, Bangladesh",
            "image": "https://randomuser.me/api/portraits/men/11.jpg",
            "review": "I had never donated online before, but this platform completely changed my perspective. The entire process of delivering winter clothes to people in need is so organized and transparent that it truly felt like my contribution made a real difference. The best part is that you can even see where your donation goes and who receives it. A truly wonderful initiative!",
            "rating": 5
        },
        {
            "name": "Maliha Akter",
            "location": "Chittagong, Bangladesh",
            "image": "https://randomuser.me/api/portraits/women/12.jpg",
            "review": "I used this platform during the recent floods and was amazed at how quickly the volunteers responded. Within a very short time, the items I donated reached the affected families. The coordination was so smooth that I felt proud to be part of something meaningful. Completely trustworthy and highly efficient.",
            "rating": 5
        },
        {
            "name": "Sajib Rahman",
            "location": "Sylhet, Bangladesh",
            "image": "https://randomuser.me/api/portraits/men/13.jpg",
            "review": "This kind of system was really needed in Bangladesh. The platform is extremely easy to use — just a few simple steps and your donation is confirmed. I also love how they provide updates so you know exactly where your donation is going. It gives peace of mind knowing you’re helping real people.",
            "rating": 4
        },
        {
            "name": "Tania Sultana",
            "location": "Rajshahi, Bangladesh",
            "image": "https://randomuser.me/api/portraits/women/14.jpg",
            "review": "The transparency of this platform is what impressed me the most. On the same day I donated, I got updates that volunteers had already collected the items. Later, I could even see who received them. The user interface is clean, modern, and incredibly easy to navigate. Love the experience!",
            "rating": 5
        },
        {
            "name": "Nafis Chowdhury",
            "location": "Khulna, Bangladesh",
            "image": "https://randomuser.me/api/portraits/men/15.jpg",
            "review": "During the cyclone season, many people in my area were affected. I donated through this platform and was honestly surprised by how quickly they acted. The volunteers stayed in touch, shared live updates, and made sure the items reached the right people. A very reliable humanitarian platform.",
            "rating": 4
        },
        {
            "name": "Farzana Yasmin",
            "location": "Barisal, Bangladesh",
            "image": "https://randomuser.me/api/portraits/women/16.jpg",
            "review": "I used to hesitate before donating because I wasn’t sure where the items would actually go. This platform completely changed that. The entire process is smooth, transparent, and well-managed. I could track everything — from donation pickup to delivery. Truly a meaningful initiative for the country.",
            "rating": 5
        },
        {
            "name": "Khalid Mahmud",
            "location": "Mymensingh, Bangladesh",
            "image": "https://randomuser.me/api/portraits/men/17.jpg",
            "review": "The design of this platform is amazing! Even for first-time users, the experience is very simple and straightforward. Donation has become easier than ever, and that’s exactly what we needed in Bangladesh. I’m really impressed.",
            "rating": 4
        },
        {
            "name": "Shaila Parvin",
            "location": "Cox's Bazar, Bangladesh",
            "image": "https://randomuser.me/api/portraits/women/18.jpg",
            "review": "I work as a volunteer on this platform, and I can say confidently that everything is managed very efficiently. We receive proper lists, locations, and urgent needs, which makes delivering help much faster. Donors are always happy, and it feels great to see the impact firsthand.",
            "rating": 5
        },
        {
            "name": "Jubayer Khan",
            "location": "Comilla, Bangladesh",
            "image": "https://randomuser.me/api/portraits/men/19.jpg",
            "review": "Bangladesh truly needed a centralized donation platform like this. The entire system is well organized — from selecting a donation to delivering it to the right person. I’m extremely satisfied and happy to support such a noble cause.",
            "rating": 5
        },
        {
            "name": "Rokeya Begum",
            "location": "Rangpur, Bangladesh",
            "image": "https://randomuser.me/api/portraits/women/20.jpg",
            "review": "I received winter clothes through this platform, and I am truly grateful. My family was struggling during the cold season, and the volunteers treated us with respect and kindness. The donors and this platform are doing a wonderful job. Thank you from the bottom of my heart.",
            "rating": 5
        }
    ]


    return (
        <Container sx={{ my: "80px", py: "20px", bgcolor: "#F5F5F5" }} maxWidth={"lg"}>
            <Box >
                <MotionTypography
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    viewport={{ once: true }}
                    sx={{ color: "#FB8500" }}>Testimonials</MotionTypography>
                <MotionTypography
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{ fontSize: "30px", fontWeight: "500" }}>Some Clients Feedback?</MotionTypography>
            </Box>
            <Box sx={{ my: "30px" }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
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
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        reviewData.map(review => (
                            <SwiperSlide>
                                <MotionBox
                                    initial={{ y: -50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        border: "1px solid #bbbb",
                                        p: "10px",
                                        borderRadius: "5px",
                                        bgcolor: "white"
                                    }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img className="w-16 rounded-full border-4 border-[#FB8500]" src={review.image} alt="" />
                                            <Box>
                                                <Typography sx={{ fontSize: "20px" }}>{review.name}</Typography>
                                                <Typography sx={{ fontSize: "15px", color: "#4e4e4e" }}>{review.location}</Typography>
                                            </Box>
                                        </Box>
                                        <FormatQuoteIcon sx={{ fontSize: "80px" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: "#4e4e4e", px: "20px", py: "15px" }}>{review.review.slice(0, 300)}...</Typography>
                                        <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                                            <Rating name="read-only" value={review.rating} readOnly />
                                        </Box>
                                    </Box>
                                </MotionBox>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </Box>
        </Container>
    );
};

export default Feedback;