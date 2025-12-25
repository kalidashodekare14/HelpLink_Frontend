"use client"
import { Box, Button, CircularProgress, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from "react-hook-form";
import useBDLocationRequest from "@/hooks/useBDLocationRequest";
import { useHelpRequestMutation } from "@/state/services/receiverService/receiverService";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

type Inputs = {
    title: string
    category: string
    description: string,
    address: string
}

const HelpRquest = () => {

    const { division, district, upazila, divisions, districts, upazilas, setDivision, setDistrict, setUpazila } = useBDLocationRequest()
    const { data: session } = useSession();
    const [helpRequest, { isSuccess, isLoading, error }] = useHelpRequestMutation()
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const requstData = {
                title: data.title,
                category: data.category,
                description: data.description,
                location: {
                    division: division,
                    district: district,
                    upazila: upazila,
                    address: data.address
                },
                receiver_email: session?.user?.email

            }
            setLoading(true)
            const res = await helpRequest(requstData).unwrap();
            if ("data" in res) {
                reset()
                toast.success('Your Request Successfully')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }

    return (
        <Container>
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url('https://i.ibb.co.com/SwPChsW7/covid-concept-with-colorful-hands.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: "20%",
                    mb: "3%"
                }}
            >
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Help Request</Typography>
            </Box>
            <Box
                width={"100%"}
                display={"flex"}
                sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: { lg: "row", xs: "column" }
                }}
            >
                <Box
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"50px"}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                my: "5px",
                                width: "100%"
                            }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Request Title"
                                    variant="outlined"
                                    sx={{
                                        width: "100%"
                                    }}
                                    {...register("title", { required: true })}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        {...register("category", { required: true })}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value={"Medical Help"}>Medical Help</MenuItem>
                                        <MenuItem value={"Healthy Foods"}>Healthy Foods</MenuItem>
                                        <MenuItem value={"Education"}>Education</MenuItem>
                                        <MenuItem value={"Clothes"}>Clothes</MenuItem>
                                        <MenuItem value={"Residence"}>Residence</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                {...register("description", { required: true })}
                            />
                        </FormGroup>
                        <Box sx={{
                            display: "flex",
                            flexDirection: { lg: "row", xs: "column" },
                            alignItems: "center",
                            gap: "5px",
                            my: "10px"
                        }}>
                            <FormControl fullWidth>
                                <InputLabel size="small" id="demo-simple-select-label">Division</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={division}
                                    label="Age"
                                    size="small"
                                    onChange={(e) => setDivision(e.target.value)}
                                >
                                    {
                                        divisions.map((div: string) => (
                                            <MenuItem key={div} value={div}>{div}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth disabled={!division}>
                                <InputLabel size="small" id="demo-simple-select-label">District</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={district}
                                    label="Age"
                                    size="small"
                                    onChange={(e) => setDistrict(e.target.value)}
                                >
                                    {
                                        districts.map((dist: string) => (
                                            <MenuItem key={dist} value={dist}>{dist}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth disabled={!district}>
                                <InputLabel size="small" id="demo-simple-select-label">Upazila</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={upazila}
                                    label="Age"
                                    size="small"
                                    onChange={(e) => setUpazila(e.target.value)}
                                >
                                    {
                                        upazilas.map((upz: string) => (
                                            <MenuItem key={upz} value={upz}>{upz}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <Box
                            sx={{ width: "100%" }}
                        >
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={2}
                                sx={{ width: "100%" }}
                                {...register("address", { required: true })}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{
                                    p: "10px",
                                    my: "5px",
                                    width: "50%"
                                }}
                            >
                                {
                                    loading ? <CircularProgress size={30} color="inherit" /> : " Request Submit"
                                }
                            </Button>
                        </Box>
                    </form>
                </Box>
                {/* Image Upload Design */}
                <Box
                    width={"50%"}
                    sx={{
                        width: { lg: "50%", sm: "100%" }
                    }}
                    border={"1px solid #bbbb"}
                    p={"15px"}
                >
                    <Typography sx={{ fontSize: "20px", py: "5px" }}>Upload Image</Typography>
                    <Box
                        onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
                        sx={{
                            border: "2px dotted #bbbb",
                            p: "10px",
                            cursor: "pointer"
                        }}
                    >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <CloudUploadIcon sx={{ fontSize: "50px" }} />
                            <Typography>Select image to upload</Typography>
                            <input hidden type="file" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Toaster />
        </Container >
    );
};

export default HelpRquest;