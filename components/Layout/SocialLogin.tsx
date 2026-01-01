"use client"
import { Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn } from 'next-auth/react';

const SocialLogin = () => {

    const handleSocialLogin = async (provider: string) => {
        const res = await signIn(provider);
        console.log("checking social data", res);
    }

    return (
        <div>
            <Typography sx={{ textAlign: "center" }}>Or Continue With Account</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                my: "10px"
            }}>
                <Box sx={{
                    border: "1px solid #bbbb",
                    p: "10px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <GoogleIcon
                        onClick={() => handleSocialLogin("google")}
                        sx={{
                            color: "#4285F4",
                            cursor: "pointer"
                        }}
                    />
                </Box>
                <Box sx={{
                    border: "1px solid #bbbb",
                    p: "10px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <FacebookIcon
                        onClick={() => handleSocialLogin("facebook")}
                        sx={{
                            color: "#4285F4",
                            cursor: "pointer"
                        }}
                    />
                </Box>
            </Box>
        </div>
    );
};

export default SocialLogin;