"use client"

import { Box, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CampaignIcon from '@mui/icons-material/Campaign';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { BarChart } from '@mui/x-charts/BarChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useOverviewManageQuery } from "@/state/services/adminService.tsx/adminService";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const data = [
    { label: 'Group A', value: 400, color: '#0088FE' },
    { label: 'Group B', value: 300, color: '#00C49F' },
    { label: 'Group C', value: 300, color: '#FFBB28' },
    { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

const OverviewComponent = () => {

    const { data: overviewInfo, isLoading, error } = useOverviewManageQuery();
    const overviewData = overviewInfo?.data
    console.log('checking overview', overviewData);

    return (
        <Box sx={{ mx: "10px", my: "10px" }}>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr"
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
                        <PeopleAltIcon sx={{ fontSize: "20px" }} />
                        <Typography sx={{ fontSize: "15px" }}>Total Users</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "25px" }}>{overviewData?.totalUser | 0}</Typography>
                </Box>
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", lg: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    my: "20px"
                }}
            >
                <Box sx={{ width: '100%', height: 400 }}>
                    <BarChart
                        series={[
                            { data: pData, label: 'pv', id: 'pvId' },
                            { data: uData, label: 'uv', id: 'uvId' },
                        ]}
                        xAxis={[{ data: xLabels }]}
                        yAxis={[{ width: 50 }]}
                    />
                </Box>
                <Box>
                    <PieChart
                        series={[
                            {
                                outerRadius: 100,
                                data,
                                arcLabel: getArcLabel,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontSize: 14,
                            },
                        }}
                        {...sizing}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default OverviewComponent;