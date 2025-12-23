"use client"

import { Box, Container } from "@mui/material";

const payment_success = () => {
    return (
        <Container maxWidth="lg" sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
        }}>
            <Box>
                <h1>Payment Successful</h1>
                <p>Thank you for your payment. Your transaction has been completed successfully.</p>
            </Box>
        </Container>
    );
};

export default payment_success;