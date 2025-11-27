"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
                                <Typography gutterBottom fontWeight={"bold"} component="div">
                                    {campaign?.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {campaign?.description.slice(0, 80)}...
                                </Typography>
                                <Typography>{campaign.location.division}  <ArrowRightIcon /> {campaign.location.district}  <ArrowRightIcon /> {campaign.location.upazila}  </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href={`/campaigns/${campaign?._id}`}>
                                    <Button variant='outlined'>Donate</Button>
                                </Link>
                            </CardActions>
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