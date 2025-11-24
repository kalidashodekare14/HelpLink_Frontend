"use client"
import { Box, Button, Checkbox, Container, Divider, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


type Inputs = {
    name: string
    email: string
    password: string
}

const RegisterComponent = () => {


    const [isRole, setIsRole] = useState<string>("");

    console.log('checking prev', isRole);

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

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // console.log(data)
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
                                variant="outlined"
                                sx={{
                                    py: "10px",
                                    width: "50%",
                                    bgcolor: "#0048e8",
                                    color: "white"
                                }}
                            >Register</Button>
                        </Box>
                        <Typography sx={{ my: "5px" }}>Already have an account? <Link href={"/signin"}>Sign In Here</Link></Typography>
                        <Divider sx={{ my: "5px" }} />
                        <Typography sx={{ textAlign: "center" }}>Or Continue With Account</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                            <Box sx={{
                                border: "1px solid #bbbb",
                                width: "12%",
                                height: "8vh",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <GoogleIcon />
                            </Box>
                            <Box sx={{
                                border: "1px solid #bbbb",
                                width: "12%",
                                height: "8vh",
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