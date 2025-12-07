"use client"
import { useJoinCampaignMutation } from '@/state/services/donorService/donorService';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
    name: string
    email: string
    message: string
    amount: string
}

const CampaignDetailsDonate = () => {

    const { data: session } = useSession();
    const [joinCampaign, { isLoading, isSuccess, error }] = useJoinCampaignMutation();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const donorData = {
                donor_name: data.name,
                donor_email: data.email,
                message: data.message,
                amount: Number(data.amount),
                request_status: "Paid",
                payment_method: "SSLCommerz"
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
                    <Box sx={{ my: "10px", width: "100%", p: "10px", border: "1px solid #bbbb" }}>
                        <Typography sx={{ py: "10px" }} fontSize={"20px"}>Personal Information</Typography>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <TextField {...register("name", { required: true })} sx={{ width: "100%" }} id="outlined-basic" label="Full Name" variant="outlined" />
                                <TextField {...register("email", { required: true })} value={session?.user?.email} sx={{ width: "100%" }} id="outlined-basic" label="Email" variant="outlined" />
                            </Box>
                            <TextField
                                {...register("message", { required: true })}
                                sx={{ width: "100%", my: "10px" }}
                                id="filled-multiline-flexible"
                                label="Message"
                                multiline
                                maxRows={4}

                            />
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    {...register("amount", { required: true })}
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                            <Box>
                                <FormControlLabel control={<Checkbox />} label="Bikash" />
                                <FormControlLabel control={<Checkbox />} label="Nagad" />
                                <FormControlLabel control={<Checkbox />} label="SSLCommerz" />
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Button type='submit' sx={{ width: "50%", my: "10px" }} variant='outlined'>Donate Here</Button>
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