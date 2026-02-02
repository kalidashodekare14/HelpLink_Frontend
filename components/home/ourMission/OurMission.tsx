"use client";

import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "next/link";
import Image from "next/image";

import { motion, scale } from "motion/react"

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionDivider = motion(Divider);

const OurMission = () => {
    return (
        <Container maxWidth={"lg"} sx={{ my: "40px" }}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px"
            }}>
                <Box sx={{ position: "relative" }}>
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, }}
                        viewport={{ once: true }}
                        sx={{ display: "flex", alignItems: "center", }}>
                        <Box>
                            <Image
                                className="w-72 lg:h-125 h-75 rounded-tl-2xl rounded-bl-2xl"
                                src="/Home/mission/img1.jpg"
                                width={500}
                                height={300}
                                alt="" />
                        </Box>
                        <Box>
                            <Image
                                className="w-81 lg:h-62.5 h-37.5 rounded-tr-2xl"
                                src="/Home/mission/img2.jpg"
                                width={500}
                                height={300}
                                alt="" />
                            <Image
                                className="w-81 lg:h-62.5 h-37.5 rounded-br-2xl"
                                src="/Home/mission/img3.jpg"
                                width={500}
                                height={300}
                                alt="" />
                        </Box>
                    </MotionBox>
                </Box>
                <Box sx={{
                    width: { xs: "100%", md: "50%" },

                }}
                >
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        variant="h6"
                        sx={{
                            fontSize: "16px",
                            my: "10px",
                            color: "#fb8500",
                        }}>
                        Supportting Our Cause Together
                    </MotionTypography>
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        variant="h3"
                        sx={{
                            my: "10px",
                        }}>
                        Support Our Mission and Make a Difference
                    </MotionTypography>
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        variant="h6"
                        sx={{
                            fontSize: "15px",
                            color: "#4e4e4e",
                            fontWeight: "400",
                        }}>
                        Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
                    </MotionTypography>
                    <MotionDivider
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        sx={{ my: "20px" }} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", my: "30px" }}>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <Typography>Giving Hope, Changing Lives</Typography>
                        </MotionBox>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <Typography>
                                Empower Through Charity
                            </Typography>
                        </MotionBox>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <Typography>
                                Together We Can
                            </Typography>
                        </MotionBox>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <Typography>
                                Healing Communities
                            </Typography>
                        </MotionBox>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <Typography>
                                Every Act Counts
                            </Typography>
                        </MotionBox>
                        <MotionBox
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Box>
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </Box>
                            <MotionTypography>
                                Compassion in Action
                            </MotionTypography>
                        </MotionBox>
                    </Box>
                    <Link href={"/about"}>
                        <motion.button
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 1.01
                            }}
                            transition={{ duration: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#fb8500] font-medium px-6 py-3 cursor-pointer rounded-xl"
                        >
                            About More
                        </motion.button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default OurMission;