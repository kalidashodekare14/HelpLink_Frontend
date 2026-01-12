"use client"
import { Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const SocialLogin = () => {

    const session = useSession();
    const router = useRouter();

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
                    p: "5px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                    <Image onClick={() => handleSocialLogin("google")} className='w-9' src={"/auth/google.png"} width={500} height={300} alt='google' />
                </Box>
                {/* <Box sx={{
                    border: "1px solid #bbbb",
                    p: "5px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                    <Image onClick={() => handleSocialLogin("facebook")} className='w-9' src={"/auth/facebook.png"} width={500} height={300} alt='facebook' />
                </Box> */}
            </Box>
            <Toaster />
        </div>
    );
};

export default SocialLogin;