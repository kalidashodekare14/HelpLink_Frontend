"use client"
import { Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {

    const session = useSession();
    const router = useRouter();
    console.log('checking only session', session)

    const handleSocialLogin = async (provider: string) => {
        signIn(provider);
    }

    if (session.status === "authenticated") {
        toast.success('Login Successfully 🎉');
        router.push("/")
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
            <Toaster />
        </div>
    );
};

export default SocialLogin;