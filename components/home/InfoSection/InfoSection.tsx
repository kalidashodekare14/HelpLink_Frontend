"use client";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Container, Typography } from "@mui/material";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ---------------- DATA ----------------
const stats = [
  { id: 1, value: 15000, suffix: "+", label: "Incredible Volunteers" },
  { id: 2, value: 1000, suffix: "+", label: "Successful Campaigns" },
  { id: 3, value: 400, suffix: "+", label: "Monthly Donors" },
  { id: 4, value: 35000, suffix: "+", label: "Team Support" },
];

// ---------------- COUNTER COMPONENT ----------------
const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    stiffness: 100,
    damping: 20,
  });

  const [display, setDisplay] = useState(0);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};
// ---------------- MAIN ----------------
const InfoSection = () => {
  return (
    <Box sx={{ bgcolor: "#1F2937", py: 8 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1, color: "#fff" }}>
            <MotionTypography
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 700,
                mb: 2,
              }}
            >
              We Always Help The <br /> Needy People
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              sx={{
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                maxWidth: 450,
                mb: 4,
              }}
            >
              Discover inspiring stories of individuals and communities
              transformed by our programs. Our success stories highlight the
              real-life impact of your donations.
            </MotionTypography>

            {/* STATS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
              }}
            >
              {stats.map((item, index) => (
                <Box key={item.id}>
                  <Typography
                    sx={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: index % 2 === 0 ? "#FB8500" : "#fff",
                    }}
                  >
                    <Counter value={item.value} suffix={item.suffix} />
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 1, position: "relative" }}>
            <Box sx={{ borderRadius: 4, overflow: "hidden" }}>
              <Image
                src="/volunters.jpg"
                alt="hero"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </Box>

            {/* PLAY BUTTON */}
            <MotionBox
              sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            >
              {/* Main Button */}
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PlayArrowIcon sx={{ color: "#FB8500" }} />
                </Box>
              </MotionBox>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InfoSection;
