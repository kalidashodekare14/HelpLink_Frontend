"use client"

import { Box, Typography } from '@mui/material';
import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <Box className="banner" sx={{
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "2%", lg: "20%" },
        }}>
            <Typography sx={{
                fontSize: "30px",
                color: "white"
            }}>About Us</Typography>
        </Box>
    );
};

export default AboutBanner;