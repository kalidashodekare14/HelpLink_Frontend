"use client"

import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const ContactForm = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: "30px",
                my: "30px"
            }}>
                {/* Left Contact Info */}
                <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <Typography sx={{ fontSize: "15px", my: "10px" }}>Get In Touch</Typography>
                    <Typography sx={{ fontSize: "30px", my: "10px" }}>Contact Us</Typography>
                    <Typography sx={{ color: 'text.secondary', my: "10px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro repellat veniam officiis nihil dolorem neque cupiditate libero debitis doloremque esse!</Typography>
                    <Stack spacing={2}>
                        <Box sx={{ border: "1px solid #bbbb", p: "20px", borderRadius: "10px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CallIcon sx={{ fontSize: "30px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "20px" }}>Call Us:</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>+880175487956</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ border: "1px solid #bbbb", p: "20px", borderRadius: "10px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <EmailIcon sx={{ fontSize: "30px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "20px" }}>Email Us:</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>helplink@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ border: "1px solid #bbbb", p: "20px", borderRadius: "10px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <LocationPinIcon sx={{ fontSize: "30px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "20px" }}>Location:</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>Dhaka, Bangladesh</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                {/* Right Contact Input */}
                <Box sx={{
                    width: { xs: "100%", lg: "50%" },
                    border: "1px solid #bbbb",
                    p: "20px",
                    borderRadius: "10px"
                }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "25px", my: "10px" }}>Fill Up The Form</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Your information will remain hidden.</Typography>
                    <Stack spacing={2} mt={5}>
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Enter Name" variant="outlined" />
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Enter Email" variant="outlined" />
                        <TextField sx={{ width: "100%" }} id="outlined-basic" label="Phone Number" variant="outlined" />
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-multiline-static"
                            label="Your Messege"
                            multiline
                            rows={4}
                        />
                        <Button
                            variant='outlined'
                            sx={{
                                width: "100%",
                                bgcolor: "#fb8500",
                                borderColor: "#fb8500",
                                color: "white",
                                p: "10px 30px",
                                '&:hover': {
                                    bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                }
                            }}
                        >
                            Donate Now
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container >
    );
};

export default ContactForm;