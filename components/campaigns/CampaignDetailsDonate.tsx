"use client"
import { useBikashPaymentMutation, useJoinCampaignMutation, useSslCommerzPaymentMutation } from '@/state/services/donorService/donorService';
import { Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
    name: string
    phone_number: string
    email: string
    message: string
    amount: string
}

const CampaignDetailsDonate = () => {

    // User info session
    const { data: session } = useSession();
    // Campaign Join RKTQuery 
    const [joinCampaign, { isLoading, isSuccess, error }] = useJoinCampaignMutation();
    // Bikash Payment RKtQuery 
    const [bikashPayment, { isLoading: bkashLoading, isSuccess: bkashPaySuccess, error: bkashError }] = useBikashPaymentMutation()
    // SSLCommerz Payment RKTQuery
    const [sslCommerzPayment, { isLoading: sslLoading, isSuccess: sslSuccess, error: sslError }] = useSslCommerzPaymentMutation()

    // dynamic id
    const { id } = useParams();
    // Payment Method value state
    const [isPaymentMethod, setIsPaymentMethod] = useState<string>("");
    // Payment checkbox handle state
    const [bikash, setBikash] = useState<boolean>(false);
    const [nagad, setNagad] = useState<boolean>(false);
    const [sslCommerz, setSSLCommerz] = useState<boolean>(false);
    // Payment Error state
    const [paymentError, setPaymentError] = useState<boolean>(false);
    const [paymentLoading, setPaymentLoading] = useState<boolean>(false);

    // Payment checkbox handle function
    const handlePaymentMethod = (value: string) => {
        if (value === "Bikash") {
            // Set payment method
            setIsPaymentMethod("Bikash");
            // Checked handle
            setBikash(true);
            setNagad(false);
            setSSLCommerz(false);
            // Error Handle
            setPaymentError(false);
        }
        if (value === "Nagad") {
            // Set payment method
            setIsPaymentMethod("Nagad");
            // Checked handle
            setBikash(false);
            setNagad(true);
            setSSLCommerz(false);
            // Error Handle
            setPaymentError(false);
        }
        if (value === "SSLCommerz") {
            // Set payment method
            setIsPaymentMethod("SSLCommerz");
            // Checked handle
            setBikash(false);
            setNagad(false);
            setSSLCommerz(true);
            // Error Handle
            setPaymentError(false);
        }
    }


    // Donation Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            // Payment method filed validation
            if (isPaymentMethod.length < 1) {
                setPaymentError(true);
            } else {
                setPaymentError(false);
            }
            // Form Information
            const donorData = {
                campaign_id: id,
                donor_name: data.name,
                phone_number: Number(data.phone_number),
                donor_email: data.email,
                message: data.message,
                amount: data.amount,
                payment_status: "Pending",
                payment_method: isPaymentMethod || ""
            }
            setPaymentLoading(true);
            // Bikash Payment System
            if (bikash) {
                const res = await bikashPayment(donorData).unwrap();
                if ("data" in res) {
                    console.log('checking data', res);
                    if (typeof location !== 'undefined') {
                        window.location.href = res.data.bkashURL
                    }

                }
            }
            // SSLCommerz Payment System
            if (sslCommerz) {
                const res = await sslCommerzPayment(donorData).unwrap();
                if ("data" in res) {
                    console.log('SSLCommerz Data', res);
                    if (typeof location !== 'undefined') {
                        window.location.href = res.data.GatewayPageURL
                    }
                }
            }

        } catch (error) {
            console.log('Payment Error', error);
        } finally {
            setPaymentLoading(false);
        }

    }

    return (
        <Container>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography sx={{ fontSize: "30px" }}>Donate Here</Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    alignContent: "center",
                    alignItems: "center",
                    width: "100%",
                    my: "20px",
                    gap: "10px"
                }}>
                    <Box sx={{
                        my: "10px",
                        width: "100%",
                        p: "10px",
                        border: "1px solid #bbbb",
                        borderRadius: "10px"
                    }}>
                        <Typography sx={{ py: "10px" }} fontSize={"20px"}>Personal Information</Typography>
                        <Box sx={{ width: "100%" }}>
                            <TextField
                                {...register("name", { required: true, })}
                                sx={{
                                    width: "100%",
                                    mb: "10px"
                                }}
                                error={!!errors.name}
                                id="outlined-basic"
                                label="Full Name"
                                variant="outlined"
                                helperText={!!errors.name && "Full name is required"}
                            />
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <TextField
                                    {...register("phone_number", { required: true, minLength: 11, maxLength: 11 })}
                                    sx={{
                                        width: "100%"
                                    }}
                                    error={!!errors.phone_number}
                                    label="Mobile Number"
                                    variant="outlined"
                                    helperText={!!errors.phone_number && "Mobile number minimum and maximum 11 digits"}
                                />
                                <TextField
                                    {...register("email", { required: true })}
                                    value={session?.user?.email}
                                    sx={{
                                        width: "100%"
                                    }}
                                    error={!!errors.email}
                                    id="outlined-basic" label="Email"
                                    helperText={!!errors.email && "Email is required"}
                                    variant="outlined" />
                            </Box>
                            <TextField
                                {...register("message", { required: true })}
                                sx={{ width: "100%", my: "10px" }}
                                error={!!errors.message}
                                id="filled-multiline-flexible"
                                label="Message"
                                multiline
                                maxRows={4}
                                helperText={!!errors.message && "Messege is required"}

                            />
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    {...register("amount", { required: true })}
                                    error={!!errors.amount}
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">৳</InputAdornment>}
                                    label="Amount"

                                />
                            </FormControl>
                            <Stack direction={"row"} alignItems={"center"} my={"20px"} gap={"10px"}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        cursor: "pointer",
                                        border: bikash ? "2px solid #FB8500" : "",
                                        p: "2px",
                                    }}
                                    onClick={() => handlePaymentMethod("Bikash")}
                                >
                                    {/* <Checkbox
                                        checked={bikash}
                                        onClick={() => handlePaymentMethod("Bikash")}
                                    /> */}
                                    <img className='w-20 h-10' src="/Campaign/bKash.png" alt="" />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        cursor: "pointer",
                                        border: nagad ? "2px solid #FB8500" : "",
                                        p: "2px",
                                    }}
                                    onClick={() => handlePaymentMethod("Nagad")}
                                >
                                    {/* <Checkbox
                                        checked={nagad}
                                        onClick={() => handlePaymentMethod("Nagad")}
                                    /> */}
                                    <img className='w-20 h-10' src="/Campaign/nagad.png" alt="" />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        cursor: "pointer",
                                        border: sslCommerz ? "2px solid #FB8500" : "",
                                        p: "2px",

                                    }}
                                    onClick={() => handlePaymentMethod("SSLCommerz")}
                                >
                                    {/* <Checkbox
                                        checked={sslCommerz}
                                        onClick={() => handlePaymentMethod("SSLCommerz")}
                                    /> */}
                                    <img className='w-30 h-10' src="/Campaign/sslcommerz.png" alt="" />
                                </Box>
                            </Stack>
                            {
                                paymentError && <Typography color='#c1121f'>Please select payment method</Typography>
                            }
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Button
                                    type='submit'
                                    variant='outlined'
                                    sx={{
                                        width: "50%",
                                        bgcolor: "#fb8500",
                                        borderColor: "#fb8500",
                                        color: "white",
                                        p: "10px 30px",
                                        '&:hover': {
                                            bgcolor: "#fb8500",
                                            borderColor: "#fb8500",
                                        },
                                        boxShadow: "5px 5px 10px #797979",
                                        my: "10px"
                                    }}
                                >
                                    {
                                        paymentLoading ? (
                                            <CircularProgress size={"30px"} color="inherit" />
                                        ) : ("Donate Here")
                                    }

                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "90%" }}>
                        <Image
                            className='w-full rounded-xl h-105'
                            src="/Campaign/donate.jpg"
                            width={500}
                            height={300}
                            alt=""
                        />
                    </Box>
                </Box>
            </form>
            <Toaster />
        </Container >
    );
};

export default CampaignDetailsDonate;