"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/shared/SectionTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const MotionBox = motion(Box);

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

const VolunteerCard = ({ volunteer }: any) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      sx={{
        position: "relative",
        borderRadius: 5,
        overflow: "hidden",
        height: 360,
        boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
      }}
    >
      {/* IMAGE */}
      <Image
        src={volunteer.image}
        alt={volunteer.name}
        fill
        style={{ objectFit: "cover" }}
      />

      {/* DARK GRADIENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        }}
      />

      {/* INFO */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          p: 3,
          color: "#fff",
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
          {volunteer.name}
        </Typography>

        <Typography sx={{ fontSize: 13, opacity: 0.8 }}>
          {volunteer.title}
        </Typography>

        {/* SOCIAL */}
        <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
          {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                color: "#fff",
                "&:hover": { bgcolor: "#FB8500" },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
};

const OurVolunteer = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "#0F172A" }}>
      <Container>
        {/* TITLE */}
        <SectionTitle
          title="Our Dedicated Volunteers"
          sub_title="People Who Make It Possible"
        />

        {/* SPOTLIGHT SWIPER */}
        <Swiper
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {volunteers.map((v) => (
            <SwiperSlide key={v.id}>
              <VolunteerCard volunteer={v} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OurVolunteer;
