"use client";

// External Import
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

//  Motion box wrap
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ---------------- ANIMATIONS ----------------
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// const imageHover = {
//   rest: { scale: 1 },
//   hover: { scale: 1.08 },
// };

//  --------------- Main --------------------
const SectionTitle = ({
  title,
  sub_title,
}: {
  title: string;
  sub_title: string;
}) => {
  return (
    <div>
      {/* Section Header */}
      <MotionTypography
        viewport={{ once: true }}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        sx={{
          textAlign: "center",
          color: "#FB8500",
          fontSize: 30,
          fontWeight: 400,
        }}
      >
        {title}
      </MotionTypography>

      <MotionTypography
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        sx={{
          textAlign: "center",
          fontSize: 18,
          mb: 4,
          color: "#6B6B6B",
        }}
      >
        {sub_title}
      </MotionTypography>
    </div>
  );
};

export default SectionTitle;
