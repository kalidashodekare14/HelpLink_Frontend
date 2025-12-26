"use client"
import { Box, Button, CircularProgress, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from "react-hook-form";
import useBDLocationRequest from "@/hooks/useBDLocationRequest";
import { useCampaignRequestInfoQuery, useCampaignRequestUpdateMutation, useCampaignUploadImagesMutation, useHelpRequestMutation } from "@/state/services/receiverService/receiverService";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Inputs = {
    title: string
    category: string
    description: string,
    address: string
};

const CampaignRequestUpdate = () => {

    // Location request hook
    const { division, district, upazila, divisions, districts, upazilas, setDivision, setDistrict, setUpazila } = useBDLocationRequest()
    // Session data
    const { data: session } = useSession();
    const { id } = useParams();
    const router = useRouter();
    // Help request update mutation
    const { data: campaignRequestData, isLoading: campaignRequestDataLoading, error: campaignRequestDataError } = useCampaignRequestInfoQuery(id);
    console.log('checking data', campaignRequestData);
    // Campaign request update mutation
    const [campaignRequestUpdate, { isSuccess: campaignRequestUpdateSuccess, isLoading: campaignRequestUpdateLoading, error: campaignRequestUpdateError }] = useCampaignRequestUpdateMutation();
    // Loading state
    const [loading, setLoading] = useState<boolean>(false);
    // Category state
    const [isCategory, setIsCategory] = useState<string>("");
    //    Image upload mutation
    const [campaignUploadImages, { isSuccess: campaignUploadSuccess, isLoading: campaignUploadLoading, error: campaignUploadError }] = useCampaignUploadImagesMutation();
    // Image upload state
    const [uploadImaLoading, setUploadImageLoading] = useState<boolean>(false);
    // Selected images state
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    // Image validation error state
    const [imageValidationError, setImageValidationError] = useState<boolean>(false);

    // category change handler
    const handleCategoryChange = (event: any) => {
        setIsCategory(event.target.value);
    };

    // set default values useEffect
    useEffect(() => {
        setIsCategory(campaignRequestData?.data?.category || "");
    }, [campaignRequestData?.data?.category])
    // set location useEffect
    useEffect(() => {
        setDivision(campaignRequestData?.data?.location?.division || "");
    }, [campaignRequestData?.data?.location?.division])
    // set district useEffect
    useEffect(() => {
        setDistrict(campaignRequestData?.data?.location?.district || "");
    }, [campaignRequestData?.data?.location?.district])
    // set upazila useEffect
    useEffect(() => {
        setUpazila(campaignRequestData?.data?.location?.upazila || "");
    }, [campaignRequestData?.data?.location?.upazila])
    // set images useEffect
    useEffect(() => {
        setSelectedImages(campaignRequestData?.data?.image || []);
    }, [campaignRequestData?.data?.image])
    console.log('upazila:', district);


    // image upload handler
    const handleImageUpload = async (e: any) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
        const formData = new FormData()
        files.forEach((file: any) => formData.append('files', file));
        try {
            setUploadImageLoading(true);
            const response = await campaignUploadImages(formData).unwrap();
            if ("data" in response) {
                setSelectedImages(response.data);
                setImageValidationError(false);
            }
            console.log(response);

        } catch (error) {
            console.log(error);
        } finally {
            setUploadImageLoading(false);
        }
    }


    // form submit handler
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (selectedImages.length === 0) {
                return setImageValidationError(true);
            }
            const requstData = {
                image: selectedImages,
                title: data.title,
                category: data.category,
                description: data.description,
                location: {
                    division: division,
                    district: district,
                    upazila: upazila,
                    address: data.address
                },
                receiver_email: session?.user?.email,
            }
            console.log('checking requstData', requstData);
            setLoading(true)
            const response = await campaignRequestUpdate({ id: id, updateData: requstData }).unwrap();
            console.log('checking response', response);
            if ("data" in response) {
                toast.success('Your Request Successfully');
                router.push("/request_track")
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
                    flexDirection: { lg: "row", xs: "column-reverse" },
                    my: "20px"
                }}
            >
                {/* Form Info */}
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
                                flexDirection: { lg: "row", xs: "column" },
                                alignItems: "center",
                                gap: "10px",
                                my: "5px",
                                width: "100%"
                            }}>
                                <TextField
                                    error={errors.title ? true : false}
                                    id="outlined-basic"
                                    label="Request Title"
                                    variant="outlined"
                                    sx={{
                                        width: "100%"
                                    }}
                                    defaultValue={campaignRequestData?.data?.title}
                                    {...register("title", { required: true })}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        error={errors.category ? true : false}
                                        {...register("category", { required: true })}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={isCategory}
                                        label="Age"
                                        onChange={handleCategoryChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Medical Help"}>Medical Help</MenuItem>
                                        <MenuItem value={"Healthy Foods"}>Healthy Foods</MenuItem>
                                        <MenuItem value={"Education"}>Education</MenuItem>
                                        <MenuItem value={"Clothes"}>Clothes</MenuItem>
                                        <MenuItem value={"Residence"}>Residence</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField
                                defaultValue={campaignRequestData?.data?.description}
                                error={errors.description ? true : false}
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
                                defaultValue={campaignRequestData?.data?.location?.address}
                                error={errors.address ? true : false}
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
                                    width: "50%",
                                    bgcolor: "#FB8500",
                                    color: "white",
                                    textTransform: "none",
                                    border: "none",
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
                            border: imageValidationError ? "2px dotted red" : "1px solid #bbbb",
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
                            {
                                uploadImaLoading ? (
                                    <CircularProgress size={40} color="inherit" />
                                ) : (
                                    <CloudUploadIcon sx={{ fontSize: "50px" }} />
                                )
                            }
                            <Typography>Select image to upload</Typography>
                            <input onChange={(event) => handleImageUpload(event)} hidden multiple type="file" />
                            <Typography color="textSecondary">Image size: 10 MB</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "5px",
                        my: "10px"
                    }}>
                        {
                            imageValidationError && (
                                <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#c1121f" }}>Please upload images</Typography>
                            )
                        }
                        {
                            selectedImages.map((img: string, index: number) => (
                                <img key={index} src={img} alt={`uploaded-${index}`} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Toaster />
        </Container >
    );
};

export default CampaignRequestUpdate;