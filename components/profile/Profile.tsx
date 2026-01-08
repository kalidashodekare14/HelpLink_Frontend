"use client"

import { Avatar, Box, Button, CircularProgress, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, Skeleton, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useProfileBDLocation from "@/hooks/useProfileBDLocation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProfileImageUploadMutation, useProfileInfoQuery, useProfileInfoUpdateMutation, } from "@/state/services/profileService/profileService";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

type Inputs = {
    name: string,
    gender: string,
    division: string,
    district: string,
    upazila: string,
    address: string
}

const ProfileComponent = () => {

    // user session
    const { data: session } = useSession();
    // Profile Info fetched 
    const { data: profileInfo, isLoading: profileDataLoading, error } = useProfileInfoQuery(session?.user?.email);
    const profileData = profileInfo?.data
    // Profile Info Update API
    const [profleInfoUpdate, { isLoading: updateLoading, error: updateError }] = useProfileInfoUpdateMutation()
    // Profile Image Upload API
    const [profileImageUpload, { isLoading: pImageLoading, error: pImageError }] = useProfileImageUploadMutation()
    // Image loading 
    const [imageLoading, setImageLoading] = useState<boolean>(false);
    // Toggle State
    const [infoToggle, setInfoToggle] = useState<boolean>(false);


    // Edit Toggle Function
    const handleToggle = () => {
        setInfoToggle(prev => !prev);
    }

    // BD Location Hooks
    const {
        division,
        district,
        upazila,
        divisions,
        districts,
        upazilas,
        setDivision,
        setDistrict,
        setUpazila
    } = useProfileBDLocation();

    // Default set division data 
    useEffect(() => {
        if (profileData?.location?.division) {
            setDivision(profileData?.location?.division);
        }
    }, [profileData?.location?.division])
    // Default set district data 
    useEffect(() => {
        if (profileData?.location?.district) {
            setDistrict(profileData?.location?.district);
        }
    }, [profileData?.location?.district])
    // Default set upazila data 
    useEffect(() => {
        if (profileData?.location?.upazila) {
            setUpazila(profileData?.location?.upazila);
        }
    }, [profileData?.location?.upazila])

    // Profile Info Update form state
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            console.log(data)
            const updateData = {
                name: data.name,
                gender: data.gender,
                location: {
                    division: data.division,
                    district: data.district,
                    upazila: data.upazila,
                    address: data.address
                }
            }
            const result = await profleInfoUpdate({ email: session?.user?.email, data: updateData })
            if ("data" in result) {
                toast.success('Your profile info update successfully');
                setInfoToggle(false)
            }
        } catch (error) {
            console.log(error)
        } finally {

        }
    }


    const handleImageUpload = async (event: any) => {
        try {
            const formData = new FormData();
            formData.append("image", event.target.files[0]);
            const imageInfo = {
                email: session?.user?.email,
                data: formData
            }
            setImageLoading(true);
            const result = await profileImageUpload(imageInfo)
            if ("data" in result) {

            }
            console.log('checking image data', result)
        } catch (error) {
            console.log(error)
        } finally {
            setImageLoading(false);
        }
    }



    return (
        <Container>
            {/* Profile Banner */}
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url('/Profile/profile.jpg')",
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
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Profile</Typography>
            </Box>
            {/* Profile Info */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    {/* Top image, name, email, edit button box */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "start", lg: "center" }
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            {
                                profileDataLoading ? (
                                    <Skeleton variant="circular" width={120} height={120} />
                                ) : (
                                    <Box sx={{ position: "relative" }}>
                                        {
                                            profileData?.image ? (
                                                <Avatar
                                                    alt={profileData?.name}
                                                    src={profileData?.image}
                                                    sx={{
                                                        width: 120,
                                                        height: 120,
                                                        border: '1px solid #bbbb'
                                                    }}
                                                />
                                            ) : (
                                                < AccountCircleIcon sx={{ fontSize: "132px", borderRadius: "100%" }} />
                                            )
                                        }


                                        {
                                            infoToggle && (
                                                imageLoading ? (
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            right: "15px",
                                                            bottom: "15px",
                                                            bgcolor: "white",
                                                            fontSize: "2px",
                                                            p: "5px",
                                                            borderRadius: "100%",
                                                        }}
                                                    >
                                                        <CircularProgress
                                                            size="30px"
                                                            color="success"
                                                        />
                                                    </Box>

                                                ) : (
                                                    <Box
                                                        onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
                                                    >
                                                        <CameraAltIcon sx={{
                                                            position: "absolute",
                                                            right: "15px",
                                                            bottom: "15px",
                                                            bgcolor: "white",
                                                            fontSize: "35px",
                                                            p: "5px",
                                                            borderRadius: "100%",
                                                            cursor: "pointer"
                                                        }} />
                                                        <input hidden onChange={(event) => handleImageUpload(event)} type="file" />
                                                    </Box>
                                                )
                                            )

                                        }

                                    </Box>
                                )
                            }
                            {
                                profileDataLoading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="rectangular" width={210} height={30} />
                                        <Skeleton variant="rectangular" width={230} height={30} />
                                    </Stack>
                                ) : (
                                    <Box sx={{}}>
                                        <Typography fontSize={"25px"}>{profileData?.name}</Typography>
                                        <Typography sx={{
                                            mt: "5px",
                                            color: "#bbbbb"
                                        }}>
                                            {profileData?.email}
                                        </Typography>
                                    </Box>
                                )
                            }

                        </Box>
                        {/* Butttons */}
                        <Box>
                            {
                                infoToggle && (
                                    <Box sx={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                                        <Button sx={{ bgcolor: "#FB8500", color: "white", border: "0" }} type="submit" variant='outlined'>Save</Button>
                                        <Button sx={{ color: "black", fontWeight: "400", border: "1px solid #FB8500" }} onClick={() => setInfoToggle(false)} variant='outlined'>Cancel</Button>
                                    </Box>
                                )
                            }
                            {
                                !infoToggle && (
                                    <>
                                        {
                                            !profileDataLoading && (
                                                <Button sx={{ bgcolor: "#FB8500", color: "white", border: "0" }} onClick={handleToggle} variant='outlined'>Edit</Button>
                                            )
                                        }
                                    </>
                                )
                            }
                        </Box>

                    </Box>
                    {/* Daynamic Toggle  */}
                    {
                        infoToggle ? (
                            // Update Info fieild
                            <Box sx={{ my: "20px" }}>
                                <Typography fontSize={20} my={1}>Personal Info</Typography>
                                <Box sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                                    gap: "20px",
                                }}>
                                    <TextField
                                        {...register("name",)}
                                        fullWidth
                                        defaultValue={profileData.name || ""}
                                        error={!!errors?.name}
                                        helperText={errors?.name && "Name is required"}
                                        size="small"
                                        id="outlined-basic"
                                        label="Full Name"
                                        variant="outlined"
                                    />
                                    <FormControl error={!!errors?.gender} size="small" fullWidth>
                                        <InputLabel id="demo-simple-select-label">Male</InputLabel>
                                        <Select
                                            {...register("gender",)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={profileData?.gender}
                                            label="Age"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={'Others'}>Others</MenuItem>
                                        </Select>
                                        {errors.gender && <FormHelperText>Gender is Required</FormHelperText>}
                                    </FormControl>
                                    <FormControl error={!!errors?.division} size="small" fullWidth>
                                        <InputLabel id="demo-simple-select-label">Division</InputLabel>
                                        <Select
                                            {...register("division",)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={profileData?.location?.division}
                                            label="Age"
                                            onChange={(e) => setDivision(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                divisions.map((div: string) => (
                                                    <MenuItem key={div} value={div}>{div}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                        {errors.division && <FormHelperText>Division is Required</FormHelperText>}
                                    </FormControl>
                                    <FormControl error={!!errors?.division} size="small" fullWidth disabled={!division}>
                                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                                        <Select
                                            {...register("district",)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={profileData?.location?.district}
                                            label="Age"
                                            onChange={(e) => setDistrict(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                districts.map((div: string) => (
                                                    <MenuItem key={div} value={div}>{div}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                        {errors.district && <FormHelperText>District is Required</FormHelperText>}
                                    </FormControl>
                                    <FormControl error={!!errors?.upazila} size="small" fullWidth disabled={!district}>
                                        <InputLabel id="demo-simple-select-label">Upazila</InputLabel>
                                        <Select
                                            {...register("upazila",)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            defaultValue={profileData?.location?.upazila}
                                            label="Age"
                                            onChange={(e) => setUpazila(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                upazilas.map((div: string) => (
                                                    <MenuItem key={div} value={div}>{div}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                        {errors.upazila && <FormHelperText>Upazila is Required</FormHelperText>}
                                    </FormControl>
                                    <TextField
                                        {...register("address",)}
                                        error={!!errors?.address}
                                        helperText={errors?.address && "Address is required"}
                                        defaultValue={profileData?.location?.address || ""}
                                        size="small"
                                        id="outlined-multiline-static"
                                        label="Address"
                                        multiline
                                        rows={1}
                                    />
                                </Box>
                            </Box>

                        ) : (
                            // Profile Info 
                            <Box sx={{ my: "20px" }}>
                                {
                                    profileDataLoading ? (
                                        <Skeleton sx={{ mb: "10px" }} variant="rectangular" width={"20%"} height={30} />
                                    ) : (
                                        <Typography fontSize={20} my={1}>Personal Info</Typography>
                                    )
                                }
                                <Box sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                                    gap: "20px"
                                }}>
                                    {
                                        profileDataLoading ? (
                                            <>
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                                <Skeleton variant="rectangular" width={"100%"} height={40} />
                                            </>
                                        ) : (
                                            <>
                                                <Box>
                                                    <Typography>Full Name</Typography>
                                                    <Typography sx={{
                                                        border: "1px solid #bbbb",
                                                        p: "10px",
                                                        bgcolor: "#E7E7E7",
                                                        borderRadius: "10px"
                                                    }}>
                                                        {profileData?.name || "N/A"}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>Gender</Typography>
                                                    <Typography sx={{
                                                        border: "1px solid #bbbb",
                                                        p: "10px",
                                                        bgcolor: "#E7E7E7",
                                                        borderRadius: "10px"
                                                    }}>
                                                        {profileData?.gender || "N/A"}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>Division</Typography>
                                                    <Typography
                                                        sx={{
                                                            border: "1px solid #bbbb",
                                                            p: "10px",
                                                            bgcolor: "#E7E7E7",
                                                            borderRadius: "10px"
                                                        }}>
                                                        {profileData?.location?.division || "N/A"}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>District</Typography>
                                                    <Typography
                                                        sx={{
                                                            border: "1px solid #bbbb",
                                                            p: "10px",
                                                            bgcolor: "#E7E7E7",
                                                            borderRadius: "10px"
                                                        }}>
                                                        {profileData?.location?.district || "N/A"}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>Upazilla</Typography>
                                                    <Typography
                                                        sx={{
                                                            border: "1px solid #bbbb",
                                                            p: "10px",
                                                            bgcolor: "#E7E7E7",
                                                            borderRadius: "10px"
                                                        }}>
                                                        {profileData?.location?.upazila || "N/A"}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>Address</Typography>
                                                    <Typography
                                                        sx={{
                                                            border: "1px solid #bbbb",
                                                            p: "10px",
                                                            bgcolor: "#E7E7E7",
                                                            borderRadius: "10px"
                                                        }}>
                                                        {profileData?.location?.address || "N/A"}
                                                    </Typography>
                                                </Box>
                                            </>
                                        )
                                    }

                                </Box>
                            </Box>
                        )
                    }
                </Box>
            </form>
            <Toaster />
        </Container >
    );
};

export default ProfileComponent;