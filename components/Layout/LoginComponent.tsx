"use client"
import { Box, Button, Checkbox, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


type Inputs = {
    email: string,
    password: string
}

const LoginComponent = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const loginData = {
                email: data.email,
                password: data.password,
                redirect: false,
            }
            setLoading(true);
            const res = await signIn('credentials', loginData)
            if (res?.status === 200) {
                toast.success('Login Successfully 🎉');
                router.push("/")
            }
            if (res?.ok === false || res?.status === 401) {
                console.log("Sign In Error")
                toast.error('Login Failed ❌');
            }
        } catch (error) {
            console.log(error);
            toast.error('Login Failed ❌');
        } finally {
            setLoading(false);
        }

    }

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "600px"
            }}
        >
            <Box
                sx={{
                    width: "40%",
                    border: "1px solid #bbbb",
                    p: "20px",
                    borderRadius: "5px"
                }}
            >
                <Typography sx={{ fontSize: "25px", my: "10px" }}>Login Here</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >
                        <TextField {...register("email", { required: true })} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField {...register("password", { required: true })} id="outlined-basic" type='password' label="Password" variant="outlined" />
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }} >
                                <Checkbox />
                                <Typography>Remember me</Typography>
                            </Box>
                            <Link href={""}>
                                <Typography>Forget Password</Typography>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center'
                            }}
                        >
                            <Button
                                type='submit'
                                variant="outlined"
                                sx={{
                                    py: "10px",
                                    width: "50%",
                                    bgcolor: "#0048e8",
                                    color: "white"
                                }}
                            >
                                {loading ? <CircularProgress size={30} color="inherit" /> : "Login"}
                            </Button>


                        </Box>
                        <Typography sx={{ my: "5px" }}>Don't have an account? <Link href={"/signup"}>Sign Up Here</Link></Typography>
                        <Divider sx={{ my: "5px" }} />
                        <Typography sx={{ textAlign: "center" }}>Or Continue With Account</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                            <Box sx={{
                                border: "1px solid #bbbb",
                                p: "10px",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <GoogleIcon />
                            </Box>
                            <Box sx={{
                                border: "1px solid #bbbb",
                                p: "10px",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <FacebookIcon />
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Box>
            <Toaster />
        </Container >
    );
};

export default LoginComponent;