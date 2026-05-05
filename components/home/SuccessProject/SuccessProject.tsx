"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "@/components/shared/SectionTitle";
import "./SuccessProject.css";

const MotionBox = motion(Box);

const projects = [
  {
    id: 1,
    image: "/Home/success_project/img6.webp",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 1,
    image: "/Home/success_project/img3.jpg",
    title: "Health Project Completed",
    description:
      "Our health donation project provided medical support, supplies, and care to those who needed it most, improving well-being and saving lives.",
  },
  {
    id: 2,
    image: "/Home/success_project/img4.jpg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 3,
    image: "/Home/success_project/img5.jpg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 4,
    image: "/Home/success_project/img1.jpeg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 5,
    image: "/Home/success_project/img2.jpg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 6,
    image: "/Home/success_project/img6.jpg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
  {
    id: 7,
    image: "/Home/success_project/img7.jpg",
    title: "Food Donation Completed",
    description:
      "We successfully completed our food donation project, providing nutritious meals to families in need and helping fight hunger in the community.",
  },
];

const ProjectCard = ({ project }: any) => {
  return (
    <MotionBox
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
        height: 360,
        cursor: "pointer",
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* GRADIENT OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2), transparent)",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          p: 3,
          color: "#fff",
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "inline-block",
            px: 2,
            py: 0.5,
            mb: 1,
            borderRadius: "999px",
            bgcolor: "#FB8500",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Completed Project
        </Box>

        <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
          {project.title}
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            color: "rgba(255,255,255,0.85)",
            mt: 1,
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </MotionBox>
  );
};

const SuccessProject = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "#F6F8FB" }}>
      <Container>
        {/* SECTION TITLE */}
        <SectionTitle
          title="Completed Projects"
          sub_title="Our Impact Stories"
        />

        {/* SWIPER */}
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default SuccessProject;
