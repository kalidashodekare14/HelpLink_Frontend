"use client"

import { Box, Container, Typography } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CountUp from 'react-countup';
import UseCounter from "@/hooks/UseCounter";


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
                        fontSize: "100px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "20px",
                        borderRadius: "100%",
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        <CountUp start={0} end={500} />+
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
                        fontSize: "100px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "20px",
                        borderRadius: "100%",
                        mb: "5px"
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        {/* <UseCounter count={1200} /> */}
                          <CountUp start={0} end={300} />+
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
                        fontSize: "100px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "20px",
                        borderRadius: "100%",
                        mb: "5px"
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        <CountUp start={0} end={100} />+
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
                        fontSize: "100px",
                        bgcolor: "#fb8500",
                        color: "#fff",
                        p: "20px",
                        borderRadius: "100%",
                        mb: "5px"
                    }} />
                    <Typography variant="h5" sx={{
                        fontSize: "30px",
                        fontWeight: "600",
                    }}>
                        <CountUp start={0} end={100} />+
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