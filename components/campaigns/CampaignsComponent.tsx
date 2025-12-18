"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type campaignChindren = {
    totalCampaign: any,
    setPage: (event: number) => void
}

const CampaignsComponent = ({ totalCampaign, setPage }: any) => {

    console.log('checking data', totalCampaign?.data);

    return (
        <Container>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr",
                },
                gap: "10px",
                my: "20px"
            }}>
                {
                    totalCampaign?.data?.data.map((campaign: any) => (
                        <Card key={campaign._id} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={campaign?.image[0]}
                                title="green iguana"
                            />
                            <CardContent sx={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: "10px"
                            }}>
                                <Typography gutterBottom fontWeight={"bold"} fontSize={"18px"} component="div">
                                    {campaign?.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {campaign?.description.slice(0, 80)}...
                                </Typography>
                                <Divider></Divider>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", }}>
                                    <Box sx={{ display: "flex", alignItems: "center",}}>
                                        <ArrowRightIcon sx={{fontSize: "20px"}} />
                                        <Typography sx={{fontSize: "15px"}}>Division:</Typography>
                                    </Box>
                                    <Typography sx={{fontSize: "15px"}}>{campaign.location.division}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                        <ArrowRightIcon sx={{fontSize: "20px"}} />
                                        <Typography>District:</Typography>
                                    </Box>
                                    <Typography sx={{fontSize: "15px"}}>{campaign.location.district}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", }}>
                                        <ArrowRightIcon sx={{fontSize: "20px"}} />
                                        <Typography>Upazila:</Typography>
                                    </Box>
                                    <Typography sx={{fontSize: "15px"}}>{campaign.location.upazila}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                    <LocationOnIcon sx={{fontSize: "20px"}} />
                                    <Typography sx={{fontSize: "15px"}}>{campaign.location.address}</Typography>
                                </Box>
                            </CardContent>
                            <Box sx={{ my: "10px", mx: "10px" }}>
                                <Link href={`/campaigns/${campaign?._id}`}>
                                    <Button
                                        variant='outlined'
                                        sx={{
                                            width: "100%",
                                            bgcolor: "#fb8500",
                                            borderColor: "#fb8500",
                                            color: "white",
                                            p: "10px 30px",
                                            '&:hover': {
                                                bgcolor: "#fb8500",
                                                borderColor: "#fb8500",
                                            }
                                        }}
                                    >
                                        Donate Now
                                    </Button>
                                </Link>
                            </Box>
                        </Card>
                    ))
                }

            </Box>
            <Box sx={{
                my: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Pagination
                    count={totalCampaign?.data.totalPages}
                    onChange={(e, value) => setPage(value)}
                    variant="outlined"
                    shape="rounded" />
            </Box>
        </Container>
    );
};

export default CampaignsComponent;