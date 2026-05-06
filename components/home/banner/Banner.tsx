"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";

// Custom CSS
import "./Banner.css";

// ------------ Data -------------
const bannerInfo = [
  {
    id: 1,
    image: "banner1",
    subTittle: "Start donating to help the poor",
    title: "Helping those who need support.",
    description:
      "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
  },
  {
    id: 2,
    image: "banner2",
    subTittle: "Start donating to help the poor",
    title: "Helping those who need support.",
    description:
      "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
  },
  {
    id: 3,
    image: "banner3",
    subTittle: "Start donating to help the poor",
    title: "Helping those who need support.",
    description:
      "Helping those who need support by connecting kind hearts with people affected by poverty, winter hardships, and natural disasters across Bangladesh.",
  },
];

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Banner = () => {
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
        {bannerInfo.map((info) => (
          <SwiperSlide key={info.id}>
            <Box
              className={`${info.image}`}
              sx={{
                height: { xs: "400px", lg: "600px" },
                backgroundImage: "banner1",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              {/* Content */}
              <Container maxWidth="lg" sx={{}}>
                <Stack spacing={2} sx={{ width: { xs: "90%", lg: "60%" } }}>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[#fb8500] mb-0 text-xl"
                  >
                    {info.subTittle}
                  </motion.p>
                  <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-7xl text-white font-bold"
                  >
                    {info.subTittle}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-[10px] lg:text-[18px] text-[#C8C8C8]"
                  >
                    {info.description}
                  </motion.p>
                </Stack>
                <Box sx={{ my: "20px" }}>
                  <Link href={"/campaigns"}>
                    <motion.button
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 1.01,
                      }}
                      transition={{ duration: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-[#fb8500] text-white font-medium px-6 py-3 cursor-pointer rounded-xl"
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}

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
