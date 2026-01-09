"use client"

import { Box, Container, Divider, Input, TextField, Typography } from '@mui/material';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isDashboardRoute = pathname.startsWith('/admin_dashboard')
        || pathname.startsWith("/volunteer_dashboar")
        || pathname.startsWith("/access_denied")
        || pathname.startsWith("/signup")
        || pathname.startsWith("/signin")

    return (
        <Box className={"footer_image"} sx={{
            // height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            p: "20px",
            display: isDashboardRoute ? "none" : "block"
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: "30px",
                    gap: "10px",
                }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CallIcon sx={{
                            bgcolor: "#C2C1C1",
                            color: "black",
                            fontSize: "40px",
                            borderRadius: "100%",
                            p: "5px"
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "15px" }}>Call Emergency</Typography>
                            <Typography sx={{ fontSize: "20px" }}>017758498652</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <EmailIcon sx={{
                            bgcolor: "#C2C1C1",
                            color: "black",
                            fontSize: "40px",
                            borderRadius: "100%",
                            p: "5px"
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "15px" }}>Call Emergency</Typography>
                            <Typography sx={{ fontSize: "20px" }}>helplink@gmail.com</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CallIcon sx={{
                            bgcolor: "#C2C1C1",
                            color: "black",
                            fontSize: "40px",
                            borderRadius: "100%",
                            p: "5px"
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "15px" }}>Address</Typography>
                            <Typography sx={{ fontSize: "20px" }}>Dhaka, Bangladesh</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ border: "0.5px solid #707070", my: "20px" }}></Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: "10px"
                }}>
                    <Box sx={{ width: { xs: "100%", lg: "25%" }, display: "flex", flexDirection: "column", gap: "15px" }}>
                        <Typography sx={{ fontSize: "30px" }}>HelpLink</Typography>
                        <Typography sx={{ color: "#C2C1C1" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam assumenda facere quidem illum ab error officiis earum possimus blanditiis accusamus.</Typography>
                        <Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <FacebookIcon sx={{
                                    bgcolor: "#C2C1C1",
                                    color: "black",
                                    fontSize: "40px",
                                    borderRadius: "100%",
                                    p: "5px"
                                }} />
                                <InstagramIcon sx={{
                                    bgcolor: "#C2C1C1",
                                    color: "black",
                                    fontSize: "40px",
                                    borderRadius: "100%",
                                    p: "5px"
                                }} />
                                <TwitterIcon sx={{
                                    bgcolor: "#C2C1C1",
                                    color: "black",
                                    fontSize: "40px",
                                    borderRadius: "100%",
                                    p: "5px"
                                }} />
                                <LinkedInIcon sx={{
                                    bgcolor: "#C2C1C1",
                                    color: "black",
                                    fontSize: "40px",
                                    borderRadius: "100%",
                                    p: "5px"
                                }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                        <Typography sx={{ fontSize: "20px", pb: "5px", my: "10px", borderBottom: "2px solid #FB8500" }}>Quick Links</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", color: "#A6A5A5" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>About Us</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Our Service</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Our Blogs</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>FAQ'S</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Contact Us</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                        <Typography sx={{ fontSize: "20px", pb: "5px", my: "10px", borderBottom: "2px solid #FB8500" }}>Our Service</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", color: "#A6A5A5" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Medical Help</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Healthy Foods</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Education</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <KeyboardDoubleArrowRightIcon />
                                <Typography>Residence</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", lg: "25%" } }}>
                        <Typography sx={{ fontSize: "20px", pb: "5px", my: "10px", borderBottom: "2px solid #FB8500" }}>Newsletter</Typography>
                        <Typography sx={{ color: "#A6A5A5" }}>Subscribe to Our Newsletter. Regular inspection and feedback mechanisms</Typography>
                        <Box sx={{
                            my: "10px",
                            borderRadius: "11px",
                            border: "1px solid #bbbb",
                            display: "flex",
                            alignItems: "center",

                        }}>
                            <Input sx={{
                                width: "100%",
                                color: "white",
                                p: "5px"
                            }}
                                placeholder='Enter your email'
                            />
                            <RocketLaunchIcon sx={{ bgcolor: "#fb8500", py: "5px", fontSize: "40px", borderRadius: "0 10px 10px 0" }} />
                        </Box>
                        <Typography sx={{ borderBottom: "1px solid white", width: "40%", cursor: "pointer" }}>Private Policy</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;