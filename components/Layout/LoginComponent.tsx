"use client"
import { Box, Button, Checkbox, CircularProgress, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SocialLogin from './SocialLogin';


type Inputs = {
    email: string,
    password: string
}

const LoginComponent = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [selecteRole, setSelectRole] = useState<string>("");

    const handleSelectRole = (role: string) => {
        if (role === "admin") {
            setEmailValue("admin@gmail.com");
            setPasswordValue("adminMaster@@");
        }
        if (role === "volunteer") {
            setEmailValue("volunteer@gmail.com");
            setPasswordValue("volunteerMaster@@");
        }
        if (role === "donor") {
            setEmailValue("donor@gmail.com");
            setPasswordValue("donor@@");
        }
        if (role === "receiver") {
            setEmailValue("receiver@gmail.com");
            setPasswordValue("receiver@@");
        }
    }

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
                // height: "600px"
                my: "5%"
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
                        <Box
                            sx={{
                                display: "flex",
                                gap: "5px"
                            }}
                        >
                            <Typography
                                onClick={() => handleSelectRole("admin")}
                                sx={{
                                    border: "1px solid #fb8500",
                                    // bgcolor: "#fb8500",
                                    transition: "background-color 0.4s ease, color 0.4s ease",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        color: "white",
                                        transform: 'scale(1.05)',
                                        // transition: 'transform 0.5s ease-in-out',
                                    },
                                    color: "black",
                                    p: "5px",
                                    width: "20%",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>
                                Admin
                            </Typography>
                            <Typography
                                onClick={() => handleSelectRole("volunteer")}
                                sx={{
                                    border: "1px solid #fb8500",
                                    // bgcolor: "#fb8500",
                                    transition: "background-color 0.4s ease, color 0.4s ease",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        color: "white",
                                        transform: 'scale(1.05)',
                                        // transition: 'transform 0.5s ease-in-out',
                                    },
                                    color: "black",
                                    p: "5px",
                                    width: "20%",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>
                                Volunteer
                            </Typography>
                            <Typography
                                onClick={() => handleSelectRole("receiver")}
                                sx={{
                                    border: "1px solid #fb8500",
                                    // bgcolor: "#fb8500",
                                    transition: "background-color 0.4s ease, color 0.4s ease",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        color: "white",
                                        transform: 'scale(1.05)',
                                        // transition: 'transform 0.5s ease-in-out',
                                    },
                                    color: "black",
                                    p: "5px",
                                    width: "20%",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>
                                Receiver
                            </Typography>
                            <Typography
                                onClick={() => handleSelectRole("donor")}
                                sx={{
                                    border: "1px solid #fb8500",
                                    // bgcolor: "#fb8500",
                                    transition: "background-color 0.4s ease, color 0.4s ease",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        color: "white",
                                        transform: 'scale(1.05)',
                                        // transition: 'transform 0.5s ease-in-out',
                                    },
                                    color: "black",
                                    p: "5px",
                                    width: "20%",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>
                                Donor
                            </Typography>
                        </Box>
                        <TextField
                            defaultValue={emailValue}
                            {...register("email", { required: true })}
                            error={!!errors.email}
                            helperText={errors.email ? "Email is required" : ""}

                            InputLabelProps={{ shrink: true }}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" />
                        <TextField
                            defaultValue={passwordValue}
                            {...register("password",
                                { required: true })}
                            error={!!errors.password}
                            helperText={errors.password ? "Password is required" : ""}
                            InputLabelProps={{ shrink: true }}
                            id="outlined-basic"
                            type='password'
                            label="Password"
                            variant="outlined" />
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
                                variant='outlined'
                                sx={{
                                    width: "50%",
                                    bgcolor: "#fb8500",
                                    borderColor: "#fb8500",
                                    color: "white",
                                    px: "10px",
                                    py: "10px",
                                    '&:hover': {
                                        bgcolor: "#fb8500",
                                        borderColor: "#fb8500",
                                    },
                                }}
                            >
                                {loading ? <CircularProgress size={30} color="inherit" /> : "Login"}
                            </Button>
                        </Box>
                        <Typography sx={{ my: "5px" }}>Don't have an account? <Link href={"/signup"}>Sign Up Here</Link></Typography>
                        <Divider sx={{ my: "5px" }} />
                        <SocialLogin />
                    </Box>
                </form>
            </Box>
            <Toaster />
        </Container >
    );
};

export default LoginComponent;