"use client";

// Extranal Imports
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Custom CSS
import SectionTitle from "@/components/shared/SectionTitle";
import "./SuccessProject.css";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ---------------- DATA ----------------
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

// ---------------- ANIMATIONS ----------------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
};

// ---------------- COMPONENT ----------------
const ProjectCard = ({ project }: any) => {
  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      sx={{ borderRadius: 3, overflow: "hidden" }}
    >
      <MotionBox initial="rest" whileHover="hover">
        {/* Image */}
        <MotionBox variants={imageHover} transition={{ duration: 0.4 }}>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={350}
            className="w-full h-80 object-cover"
          />
        </MotionBox>

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
            backdropFilter: "blur(12px)",
            bgcolor: "rgba(0,0,0,0.4)",
            borderRadius: 2,
            p: 2,
            color: "#fff",
          }}
        >
          <Typography
            sx={{ color: "#FB8500", fontWeight: 600, fontSize: 20, mb: 1 }}
          >
            {project.title}
          </Typography>
          <Typography fontSize={14}>{project.description}</Typography>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

// ---------------- MAIN ----------------
const SuccessProject = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#F7F7F7" }}>
      <Container>
        {/* Header */}
        <SectionTitle title=" Completed Projects" sub_title="Our Recent Work" />
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="success-swiper"
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
