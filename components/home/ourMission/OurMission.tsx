"use client";

import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "next/link";
import Image from "next/image";

import { motion, scale } from "motion/react"

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

const OurMission = () => {
    return (
        <Container maxWidth={"lg"} sx={{ my: "40px" }}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px"
            }}>
                <Box sx={{ position: "relative" }}>
                    <Box sx={{ display: "flex", alignItems: "center", }}>
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
                    </Box>
                    {/* <PlayArrowIcon sx={{
                        fontSize: "80px",
                        width: "40px",
                        height: "40",
                        position: "absolute",
                        top: 0
                    }} /> */}

                </Box>
                <Box sx={{
                    width: { xs: "100%", md: "50%" },

                }}
                >
                    <MotionTypography
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
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
                        variant="h6"
                        sx={{
                            fontSize: "15px",
                            color: "#4e4e4e",
                            fontWeight: "400",
                        }}>
                        Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
                    </MotionTypography>
                    <Divider sx={{ my: "20px" }} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", my: "30px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >Giving Hope, Changing Lives</MotionTypography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}

                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Empower Through Charity
                            </MotionTypography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                Together We Can
                            </MotionTypography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2.1 }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                Healing Communities
                            </MotionTypography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.3 }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                Every Act Counts
                            </MotionTypography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <MotionBox
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            </MotionBox>
                            <MotionTypography
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                            >
                                Compassion in Action
                            </MotionTypography>
                        </Box>
                    </Box>
                    <Link href={"/about"}>
                        <Button
                            variant='outlined'
                            sx={{
                                bgcolor: "#fb8500",
                                borderColor: "#fb8500",
                                color: "black",
                                p: "10px 30px",
                                my: "20px",
                                '&:hover': {
                                    bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                }
                            }}
                        >
                            About More
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default OurMission;