"use client"
import { useJoinCampaignMutation } from '@/state/services/donorService/donorService';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
    name: string
    email: string
    message: string
    amount: string
}

const CampaignDetailsDonate = () => {

    // User info session
    const { data: session } = useSession();
    // Campaign Join RKTQuery 
    const [joinCampaign, { isLoading, isSuccess, error }] = useJoinCampaignMutation();
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

    console.log('checking payment status', isPaymentMethod)

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
            if (isPaymentMethod.length < 1) {
                setPaymentError(true);
            } else {
                setPaymentError(false);
            }
            const donorData = {
                donor_name: data.name,
                donor_email: data.email,
                message: data.message,
                amount: Number(data.amount),
                request_status: "Paid",
                payment_method: isPaymentMethod || ""
            }
            await joinCampaign({ id: id, data: donorData })
            if (isSuccess) {
                reset()
                toast.success('Your Donate Successfully');
            }
        } catch (error) {

        } finally {

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
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <TextField
                                    {...register("name", { required: true })}
                                    sx={{
                                        width: "100%"
                                    }}
                                    error={!!errors.name}
                                    id="outlined-basic"
                                    label="Full Name"
                                    variant="outlined" />
                                <TextField
                                    {...register("email", { required: true })}
                                    value={session?.user?.email}
                                    sx={{
                                        width: "100%"
                                    }}
                                    error={!!errors.email}
                                    id="outlined-basic" label="Email"
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

                            />
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    {...register("amount", { required: true })}
                                    error={!!errors.amount}
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                            <Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={bikash}
                                            onClick={() => handlePaymentMethod("Bikash")}
                                        />
                                    }
                                    label="Bikash" />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={nagad}
                                            onClick={() => handlePaymentMethod("Nagad")}
                                        />
                                    }
                                    label="Nagad" />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={sslCommerz}
                                            onClick={() => handlePaymentMethod("SSLCommerz")}
                                        />
                                    }
                                    label="SSLCommerz" />
                            </Box>
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
                                    Donate Here
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "90%" }}>
                        <img className='w-full rounded-xl' src="https://i.ibb.co.com/qLgmpgCn/donate.jpg" alt="" />
                    </Box>
                </Box>
            </form>
            <Toaster />
        </Container>
    );
};

export default CampaignDetailsDonate;