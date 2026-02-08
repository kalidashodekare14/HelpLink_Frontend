"use client"

import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Image from "next/image";
import { motion } from 'motion/react'

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionAccordion = motion(Accordion);

const AboutAskQuestion = () => {
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", lg: "row" },
                alignItems: "center",
                gap: "40px",
                my: "30px"
            }}>
                <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        sx={{ fontSize: "15px", color: "#FB8500" }}>Frequently Asked Questions</MotionTypography>
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        sx={{ fontSize: { xs: "40px", lg: "45px" }, lineHeight: "1.3", fontWeight: "600" }}>You can ask any question</MotionTypography>
                    <MotionAccordion
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        sx={{
                            my: "10px",
                            borderRadius: "10px",
                            p: "12px"
                        }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">What is this donation for?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Your donation supports our mission to help people in need and create positive, lasting change in the community.
                        </AccordionDetails>
                    </MotionAccordion>
                    <MotionAccordion
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        sx={{
                            my: "10px",
                            borderRadius: "10px",
                            p: "12px"
                        }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">Is my donation secure?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Yes, all donations are processed through a safe and secure payment system.
                        </AccordionDetails>
                    </MotionAccordion>
                    <MotionAccordion
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        sx={{
                            my: "10px",
                            borderRadius: "10px",
                            p: "12px"
                        }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">Can I track the impact of my donation?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Yes, we regularly share updates and reports showing how donations are making an impact.
                        </AccordionDetails>
                    </MotionAccordion>
                </Box>
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    sx={{ width: { xs: "100%", lg: "50%" }, display: "flex", height: { xs: "300px", lg: "500px" }, gap: "10px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Image
                            className="w-full  h-full lg:h-[50%] border-4 border-[#c9c9c9] rounded-2xl"
                            src="/Home/question/img1.jpeg"
                            width={500}
                            height={300}
                            alt=""
                        />
                        <Image
                            className="w-full h-full lg:h-[50%] border-4 border-[#c9c9c9] rounded-2xl"
                            src="/Home/question/img2.jpg"
                            width={500}
                            height={300}
                            alt=""
                        />
                    </Box>
                    <Image
                        className="w-full lg:w-[50%]  border-4 border-[#c9c9c9] rounded-2xl"
                        src="/Home/question/img1.jpg"
                        width={500}
                        height={300}
                        alt=""
                    />
                </MotionBox>
            </Box>
        </Container>
    );
};

export default AboutAskQuestion;