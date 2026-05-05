"use client";

import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

type Props = {
  title: string;
  sub_title: string;
};

const SectionTitle = ({ title, sub_title }: Props) => {
  return (
    <Stack spacing={1} sx={{ my: 6, alignItems: "center" }}>
      {/* Subtitle Badge */}
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{
          px: 2,
          py: 0.5,
          borderRadius: "999px",
          fontSize: 12,
          fontWeight: 600,
          color: "#FB8500",
          bgcolor: "rgba(251, 133, 0, 0.12)",
          letterSpacing: "0.5px",
        }}
      >
        {sub_title}
      </MotionBox>

      {/* Main Title */}
      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{
          fontSize: { xs: 26, md: 38 },
          fontWeight: 800,
          color: "#1F2937",
          textAlign: "center",
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}

        {/* Animated underline */}
        <MotionBox
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            height: 4,
            borderRadius: 10,
            bgcolor: "#FB8500",
            mt: 1,
            mx: "auto",
          }}
        />
      </MotionTypography>

      {/* Small decorative line */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        sx={{
          width: 60,
          height: 2,
          bgcolor: "rgba(0,0,0,0.1)",
          borderRadius: 10,
          mt: 1,
        }}
      />
    </Stack>
  );
};

export default SectionTitle;
