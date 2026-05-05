"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

type Props = {
  title: string;
  sub_title: string;
};

const SectionTitle = ({ title, sub_title }: Props) => {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{
          color: "#FB8500",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        {title}
      </MotionTypography>

      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        sx={{
          fontSize: { xs: 24, md: 34 },
          fontWeight: 800,
          color: "#1F2937",
        }}
      >
        {sub_title}
      </MotionTypography>
    </Box>
  );
};

export default SectionTitle;
