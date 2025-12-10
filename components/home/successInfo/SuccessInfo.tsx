"use client"

import { Box, Container, Typography } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const SuccessInfo = () => {
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                gap: "40px",
                my: "70px",
                bgcolor: "#f5f5f5",
                py: "40px",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
                }}>
                    <HandshakeIcon sx={{
                        fontSize: "110px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "30px",
                        borderRadius: "100%",
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        500+
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "20" }}  >
                        Team Members
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
                }}>
                    <ChatIcon sx={{
                        fontSize: "110px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "30px",
                        borderRadius: "100%",
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        1200+
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "20" }}  >
                        Client's Review
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
                }}>
                    <EmojiEventsIcon sx={{
                        fontSize: "110px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "30px",
                        borderRadius: "100%",
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        100+
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "20" }}  >
                        Winning Awards
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
                }}>
                    <PeopleAltIcon sx={{
                        fontSize: "110px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "30px",
                        borderRadius: "100%",
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        100+
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "20" }}  >
                        Happy Clients
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default SuccessInfo;