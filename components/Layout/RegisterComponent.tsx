"use client"
import { Box, Button, Checkbox, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';


type Inputs = {
    name: string
    email: string
    password: string
}

const RegisterComponent = () => {


    const [isRole, setIsRole] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    const handleReceiver = () => {
        setIsRole("receiver");
    }

    const handleDonor = () => {
        setIsRole("donor");
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (isRole.length < 1) {
                toast.error('Please select your role.');
                return
            }
            const registerData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role: isRole
            }
            setLoading(true)
            const res = await axios.post("http://localhost:5000/api/v1/auth/register", registerData);
            if (res.status === 200) {
                toast.success('Register Successfully 🎉');
                router.push("/signin")
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
                <Typography sx={{ fontSize: "25px", my: "10px" }}>Register Here</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >
                        <TextField {...register("name", { required: true })} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField {...register("email", { required: true })} id="outlined-basic" type='email' label="Email" variant="outlined" />
                        <TextField {...register("password", { required: true })} id="outlined-basic" type='password' label="Password" variant="outlined" />
                        <Box>
                            <Typography>Who are you?</Typography>
                            <Box sx={{ display: "flex", justifyContent: "", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }} >
                                    <Checkbox checked={isRole === "receiver"} onClick={handleReceiver} />
                                    <Typography>Recever</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center" }} >
                                    <Checkbox checked={isRole === "donor"} onClick={handleDonor} />
                                    <Typography>Donor</Typography>
                                </Box>
                            </Box>
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
                                {loading ? <CircularProgress size={30} color="inherit" /> : "Register"}
                            </Button>
                        </Box>
                        <Typography sx={{ my: "5px" }}>Already have an account? <Link href={"/signin"}>Sign In Here</Link></Typography>
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

export default RegisterComponent;