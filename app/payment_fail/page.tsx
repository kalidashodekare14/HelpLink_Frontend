"use client"
import { Container, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const payment_fail = () => {
    return (
        <div>
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
                    <CloseIcon sx={{
                        bgcolor: "#e63946",
                        color: "white",
                        fontSize: "80px",
                        borderRadius: "50%"
                    }} />
                    <Typography>Payment Failed</Typography>
                    <Typography>Sorry, Your Payment has been Failed.</Typography>
                </Stack>
            </Container>
        </div>
    );
};

export default payment_fail;