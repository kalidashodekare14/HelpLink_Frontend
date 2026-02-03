"use client";

import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from "next/link";
import Image from "next/image";

import { motion } from "motion/react"
import { useState } from "react";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionDivider = motion(Divider);

const OurMission = () => {

    const [aboutToggle, setAboutToggle] = useState<string>("history");

    return (
        <Container maxWidth={"lg"} sx={{ my: "40px" }}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px"
            }}>
                {/* Left Side Image */}
                <Box sx={{ position: "relative" }}>
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
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
                {/* Right Side Info */}
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
                        About us
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
                        Support our mission to bring positive change to people’s lives. Your donation helps us provide essential support, resources, and hope to those in need. Every contribution, big or small, makes a real difference.
                    </MotionTypography>
                    <MotionDivider
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        sx={{ my: "20px" }}
                    />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px"
                    }}>
                        <Box
                            onClick={() => setAboutToggle("history")}
                            sx={{
                                border: aboutToggle === "history" ? "1px solid #FB8500" : "",
                                bgcolor: aboutToggle === "history" ? "#FEF3E6" : "",
                                p: "10px",
                                borderRadius: "30px",
                                cursor: "pointer"
                            }}>
                            <Typography>Our History</Typography>
                        </Box>
                        <Box
                            onClick={() => setAboutToggle("mission")}
                            sx={{
                                border: aboutToggle === "mission" ? "1px solid #FB8500" : "",
                                bgcolor: aboutToggle === "mission" ? "#FEF3E6" : "",
                                p: "10px",
                                borderRadius: "30px",
                                cursor: "pointer"
                            }}>
                            <Typography>Our Mission</Typography>
                        </Box>
                        <Box
                            onClick={() => setAboutToggle("vission")}
                            sx={{
                                border: aboutToggle === "vission" ? "1px solid #FB8500" : "",
                                bgcolor: aboutToggle === "vission" ? "#FEF3E6" : "",
                                p: "10px",
                                borderRadius: "30px",
                                cursor: "pointer"
                            }}>
                            <Typography>Our Vission</Typography>
                        </Box>
                    </Box>
                    {
                        aboutToggle === "history" && (
                            <Stack
                                spacing={1}
                                my={2}
                            >
                                <Typography sx={{ color: "#4e4e4e" }}>Our journey began with a simple goal: to help people in need and create lasting positive change through collective support.</Typography>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Started with a small but dedicated team</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Grew through community trust and support</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Grew through community trust and support</Typography>
                                </MotionBox>
                            </Stack>
                        )
                    }

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