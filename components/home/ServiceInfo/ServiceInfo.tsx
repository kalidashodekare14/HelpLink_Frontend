"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Custom CSS
import "./ServiceInfo.css";

import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "motion/react";
import Link from "next/link";

import SectionTitle from "@/components/shared/SectionTitle";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// ================= Motion =================
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

// ================= Data =================
const serviceData = [
  {
    id: "medical_help",
    title: "Medical Help",
    description:
      "We provide medical assistance to those in need, ensuring access",
    icon: MedicalServicesIcon,
  },
  {
    id: "healthy_food",
    title: "Healthy Foods",
    description:
      "We distribute nutritious food to communities facing food insecurity.",
    icon: FastfoodIcon,
  },
  {
    id: "education_support",
    title: "Education",
    description:
      "We support educational initiatives to empower individuals and communities.",
    icon: MenuBookIcon,
  },
  {
    id: "residence_support",
    title: "Residence",
    description:
      "We provide safe and secure housing solutions for individuals and families.",
    icon: HomeWorkIcon,
  },
];

// ================= Project Card (Same File) =================
const ProjectCard = ({ service }: any) => {
  const Icon = service.icon;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      sx={{
        bgcolor: "#fff",
        p: 3,
        my: 6,
        borderRadius: 2,
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          position: "absolute",
          top: "-45px",
          bgcolor: "#fff",
          p: 3,
          borderRadius: "50%",
          border: "2px solid #fb8500",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Icon sx={{ fontSize: 30, color: "#fb8500" }} />
      </Box>

      {/* Title */}
      <Typography sx={{ fontSize: 26, mt: 4 }}>{service.title}</Typography>

      {/* Description */}
      <Typography sx={{ color: "#4e4e4e" }}>{service.description}</Typography>

      {/* Button */}
      <Link href={`/service-details/${service.id}`}>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          sx={{
            mt: 2,
            bgcolor: "#fb8500",
            color: "#fff",
            px: 3,
            py: 1.2,
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { bgcolor: "#e67600" },
          }}
        >
          About More
        </MotionButton>
      </Link>
    </MotionBox>
  );
};

// ================= Main Component =================
const ServiceInfo = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#f5f5f5", pt: 5 }}>
      {/* Header */}
      <SectionTitle
        title=" Our Services"
        sub_title="Providing Humanitarian services to all people is what we do"
      />

      {/* Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="service_swiper"
      >
        {serviceData.map((service) => (
          <SwiperSlide key={service.id}>
            <ProjectCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ServiceInfo;
