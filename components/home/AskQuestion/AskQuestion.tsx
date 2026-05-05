"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ---------------- DATA ----------------
const faqs = [
  {
    id: 1,
    question: "What is this donation for?",
    answer:
      "Your donation supports our mission to help people in need and create lasting positive change.",
  },
  {
    id: 2,
    question: "Is my donation secure?",
    answer:
      "Yes, all transactions are processed through secure and trusted payment systems.",
  },
  {
    id: 3,
    question: "Can I track my donation impact?",
    answer:
      "Yes, we provide regular updates and reports on how your contribution is making a difference.",
  },
];

// ---------------- ANIMATION ----------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// ---------------- FAQ ITEM ----------------
const FAQItem = ({ faq, delay }: any) => {
  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <Accordion
        sx={{
          mb: 2,
          borderRadius: 3,
          boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={500}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "text.secondary" }}>
          {faq.answer}
        </AccordionDetails>
      </Accordion>
    </MotionBox>
  );
};

// ---------------- MAIN ----------------
const AskQuestion = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#F9FAFB" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <MotionTypography
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              sx={{ color: "#FB8500", mb: 1 }}
            >
              FAQ
            </MotionTypography>

            <MotionTypography
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: 0.1 }}
              sx={{
                fontSize: { md: 50, sm: 30 },
                fontWeight: 600,
                mb: 3,
              }}
            >
              Frequently Asked Questions
            </MotionTypography>

            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} delay={0.2 + index * 0.1} />
            ))}
          </Box>

          {/* RIGHT SIDE - MODERN IMAGE DESIGN */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              position: "relative",
            }}
          >
            {/* Background glow */}
            <Box
              sx={{
                position: "absolute",
                width: 300,
                height: 300,
                background:
                  "radial-gradient(circle, rgba(251,133,0,0.15), transparent 70%)",
                top: "-40px",
                right: "-40px",
                zIndex: 0,
                filter: "blur(10px)",
              }}
            />

            {/* Main layout */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gridTemplateRows: "180px 180px",
                gap: 2,
              }}
            >
              {/* Large featured image */}
              <MotionBox
                whileHover={{ scale: 1.02 }}
                sx={{
                  gridRow: "1 / 3",
                  borderRadius: 5,
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                  position: "relative",
                }}
              >
                <Image
                  src="/Home/question/img1.jpg"
                  alt="helping people"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />

                {/* overlay gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
                  }}
                />
              </MotionBox>

              {/* Top small card */}
              <MotionBox
                whileHover={{ y: -5 }}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/Home/question/img1.jpeg"
                  alt="support"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </MotionBox>

              {/* Bottom small card */}
              <MotionBox
                whileHover={{ y: -5 }}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                <Image
                  src="/Home/question/img2.jpg"
                  alt="donation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </MotionBox>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default AskQuestion;
