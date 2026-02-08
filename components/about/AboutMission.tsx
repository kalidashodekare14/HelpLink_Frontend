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
const MotionStack = motion(Stack);

const AboutMission = () => {

    const [aboutToggle, setAboutToggle] = useState<string>("history");

    return (
        <Container maxWidth={"lg"} sx={{ my: "40px" }}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px"
            }}>
                {/* Left Side Image */}
                <Box sx={{
                    position: "relative",
                    width: { xs: "100%", md: "50%" },
                }}>
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        viewport={{ once: true }}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            alignItems: "center",
                            position: "relative"
                        }}>
                        <Box>
                            <Image
                                className="lg:w-80 w-full lg:h-115 rounded-2xl"
                                src="/Home/mission/img1.jpg"
                                width={500}
                                height={300}
                                alt="" />
                        </Box>
                        <Box>
                            <Image
                                className="hidden lg:flex lg:w-60 w-full rounded-4xl absolute right-20 -bottom-12"
                                src="/Home/mission/img4.jpg"
                                width={500}
                                height={300}
                                alt="" />
                        </Box>
                        {/* <Box>

                            <Image
                                className="w-full lg:h-62.5 h-37.5 "
                                src="/Home/mission/img3.jpg"
                                width={500}
                                height={300}
                                alt="" />
                        </Box> */}
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
                    <MotionBox
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: {
                                xs: "10px", lg: "30px"
                            },
                            my: "10px"
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
                    </MotionBox>
                    {
                        aboutToggle === "history" && (
                            <MotionStack
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
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
                            </MotionStack>
                        )
                    }
                    {
                        aboutToggle === "mission" && (
                            <MotionStack
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                spacing={1}
                                my={2}
                            >
                                <Typography sx={{ color: "#4e4e4e" }}>Our mission is to support those in need, empower communities, and create positive, lasting impact through meaningful action.</Typography>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Provide essential help and resources</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Empower people and communities</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Create sustainable, long-term change</Typography>
                                </MotionBox>
                            </MotionStack>
                        )
                    }
                    {
                        aboutToggle === "vission" && (
                            <MotionStack
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                spacing={1}
                                my={2}
                            >
                                <Typography sx={{ color: "#4e4e4e" }}>Our vision is a world where everyone has access to support, opportunity, and a better future.</Typography>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Build a more caring and inclusive society</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Ensure equal opportunities for all</Typography>
                                </MotionBox>
                                <MotionBox
                                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Box>
                                        <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                                    </Box>
                                    <Typography sx={{ color: "#4e4e4e" }}>Create lasting positive change worldwide</Typography>
                                </MotionBox>
                            </MotionStack>
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

export default AboutMission;