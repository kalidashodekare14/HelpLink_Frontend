"use client";

// External imports
import { Box, Container, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Icon to Meterial UI
import SectionTitle from "@/components/shared/SectionTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={fadeUp}
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        bgcolor: "#fff",
        boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {/* IMAGE WRAPPER */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <MotionBox
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
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

        {/* SOFT GRADIENT OVERLAY */}
        <MotionBox
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                bgcolor: "rgba(255,255,255,0.9)",
                color: "#333",
                backdropFilter: "blur(6px)",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#FB8500",
                  color: "#fff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </MotionBox>
      </Box>

      {/* INFO SECTION */}
      <Box
        sx={{
          textAlign: "center",
          my: 2.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            mb: 0.3,
          }}
        >
          {volunteer.name}
        </Typography>

        <Typography
          sx={{
            fontSize: 17,
            color: "text.secondary",
          }}
        >
          {volunteer.title}
        </Typography>
      </Box>
    </MotionBox>
  );
};
// ---------------- MAIN ----------------
const OurVolunteer = () => {
  return (
    <Box
      sx={{
        py: 10,
        // bgcolor: "#F9FAFB",
      }}
    >
      <Container>
        {/* Header */}
        <SectionTitle
          title="Our Dedicated Volunteers"
          sub_title="Dedicated individuals working together to support communities in need"
        />

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
