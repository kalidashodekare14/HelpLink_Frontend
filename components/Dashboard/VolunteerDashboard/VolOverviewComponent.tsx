"use client"

import { useVolOverviewManageQuery } from "@/state/services/volunteerService/volunteerService";
import { Box, Typography } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const VolOverviewComponent = () => {

    const { data: overviewInfo, isLoading, error } = useVolOverviewManageQuery();
    const overviewData = overviewInfo?.data

    return (
        <Box sx={{ mx: "10px", my: "10px" }}>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr"
                },
                gap: "10px"
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", p: "10px", borderRadius: "10px", border: "1px solid #bbbb" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "10px",
                        color: "#727272"
                    }}>
                        <CampaignIcon sx={{ fontSize: "20px" }} />
                        <Typography sx={{ fontSize: "15px" }}>Total Campaign</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "25px" }}>{overviewData?.totalCampaign | 0}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", p: "10px", borderRadius: "10px", border: "1px solid #bbbb" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "10px",
                        color: "#727272"
                    }}>
                        <VolunteerActivismIcon sx={{ fontSize: "20px" }} />
                        <Typography sx={{ fontSize: "15px" }}>Total Donate</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "25px" }}>${overviewData?.totalAmount | 0}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default VolOverviewComponent;