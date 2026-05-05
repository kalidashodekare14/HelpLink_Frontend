"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// import "swiper/css";
// import "swiper/css/pagination";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ---------------- DATA ----------------
const volunteers = [
  {
    id: 1,
    name: "Ariful Hasan",
    title: "Volunteer",
    image: "/Home/volunteer/img1.jpg",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    title: "Volunteer",
    image: "/Home/volunteer/img2.jpg",
  },
  {
    id: 3,
    name: "Rakibul Islam",
    title: "Volunteer",
    image: "/Home/volunteer/img3.jpg",
  },
  {
    id: 4,
    name: "Sharmin Akter",
    title: "Volunteer",
    image: "/Home/volunteer/img4.jpg",
  },
];

// ---------------- ANIMATION ----------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// ---------------- CARD ----------------
const VolunteerCard = ({ volunteer }: any) => {
  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <MotionBox
        whileHover="hover"
        initial="rest"
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <MotionBox
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={volunteer.image}
            alt={volunteer.name}
            width={400}
            height={400}
            className="w-full h-75 object-cover"
          />
        </MotionBox>

        {/* Overlay */}
        <MotionBox
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "#FB8500", color: "#fff" },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </MotionBox>

        {/* Info */}
        <Box
          sx={{
            textAlign: "center",
            py: 2,
            bgcolor: "#fff",
          }}
        >
          <Typography fontWeight={600}>{volunteer.name}</Typography>
          <Typography fontSize={14} color="text.secondary">
            {volunteer.title}
          </Typography>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

// ---------------- MAIN ----------------
const OurVolunteer = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#F9FAFB" }}>
      <Container>
        {/* Header */}
        <MotionTypography
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 600,
            mb: 5,
          }}
        >
          Our Passionate Volunteers
        </MotionTypography>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {volunteers.map((volunteer) => (
            <SwiperSlide key={volunteer.id}>
              <VolunteerCard volunteer={volunteer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OurVolunteer;
