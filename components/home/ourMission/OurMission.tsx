"use client";

import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
                            <img className="w-72 lg:h-[500px] h-[300px] rounded-tl-2xl rounded-bl-2xl" src="/Home/mission/img1.jpg" alt="" />
                        </Box>
                        <Box>
                            <img className="w-[324px] lg:h-[250px] h-[150px] rounded-tr-2xl" src="/Home/mission/img2.jpg" alt="" />
                            <img className="w-[324px] lg:h-[250px] h-[150px] rounded-br-2xl" src="/Home/mission/img3.jpg" alt="" />
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
                    <Typography variant="h6" sx={{
                        fontSize: "16px",
                        my: "10px",
                        color: "#fb8500",
                    }}>
                        Supportting Our Cause Together
                    </Typography>
                    <Typography variant="h3" sx={{
                        my: "10px",
                    }}>
                        Support Our Mission and Make a Difference
                    </Typography>
                    <Typography variant="h6" sx={{
                        fontSize: "15px",
                        color: "#4e4e4e",
                        fontWeight: "400",
                    }}>
                        Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
                    </Typography>
                    <Divider sx={{ my: "20px" }} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", my: "30px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Giving Hope, Changing Lives</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Empower Through Charity</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Together We Can</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Healing Communities</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Every Act Counts</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#fb8500" }} />
                            <Typography>Compassion in Action</Typography>
                        </Box>
                    </Box>
                    <Button
                        variant='outlined'
                        sx={{
                            // bgcolor: "#fb8500",
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
                </Box>
            </Box>
        </Container>
    );
};

export default OurMission;