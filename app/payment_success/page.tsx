"use client"

import { Box, Container, Stack, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const payment_success = () => {
    return (
        <Container maxWidth="lg" sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
        }}>
            <Stack
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
                gap={"10px"}
            >
                <CheckIcon sx={{
                    bgcolor: "#06d6a0",
                    color: "white",
                    fontSize: "80px",
                    borderRadius: "50%"
                }} />
                <Typography>Payment Successful</Typography>
                <Typography>Thank you, Your Payment has been successfully.</Typography>
            </Stack>
        </Container>
    );
};

export default payment_success;