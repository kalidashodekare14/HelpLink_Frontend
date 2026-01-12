"use client"
import dynamic from 'next/dynamic';
import { useWeatherRiskTrackQuery } from '@/state/services/publicService/campaignsService';
import { Box, Container, Divider, Typography } from '@mui/material';
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const WeatherTrackClient = () => {

    const { data: districtRisk, isLoading, error } = useWeatherRiskTrackQuery();
    console.log('checking weather data', districtRisk);

    const riskColor = (level: string) => {
        switch (level) {
            case "Extreme": return "red";
            case "High": return "orange";
            case "Medium": return "yellow";
            case "Low": return "green";
            default: return "blue";
        }
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: "20px" }}>
                <MapContainer style={{ height: "600px", width: "100%" }} center={[23.685, 90.356]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        districtRisk?.data?.length > 0 && (
                            districtRisk?.data?.map((d: any) => (
                                <CircleMarker
                                    key={d.district}
                                    center={[d.lat, d.lon]}
                                    radius={12}
                                    color={riskColor(d.riskLevel)}
                                    fillOpacity={0.5}
                                >
                                    <Popup>
                                        <Box sx={{
                                            minWidth: 220,
                                        }}>
                                            <Box sx={{ display: "flex", alignItems: "center", my: "10px" }}>
                                                <FmdGoodIcon />
                                                <span className='text-[18px]'>{d.district}</span><br />
                                            </Box>
                                            <Divider sx={{ mb: 1 }} />
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <span className='font-bold text-[15px]'>Risk: {d.riskLevel} ({d.riskScore})</span>
                                                <span className='font-bold text-[15px]'>Reasons: {d.reasons.join(", ")}</span>
                                            </Box>
                                            <Divider sx={{ my: 1 }} />
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <span>Temperature: {d.temperature.temp} °C</span>
                                                <span>Condition: {d.temperature.condition}</span>
                                            </Box>
                                            <Divider sx={{ my: 1 }} />
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <span>Humidity: {d.humidity.humidity}</span>
                                                <span>Condition: {d.humidity.condition}</span>
                                            </Box>
                                            <Divider sx={{ my: 1 }} />
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <span>Pressure: {d.pressure.pressure}</span>
                                                <span>Condition: {d.pressure.condition}</span>
                                            </Box>
                                        </Box>

                                    </Popup>
                                </CircleMarker>
                            ))
                        )

                    }
                </MapContainer>
            </Box>
        </Container>
    );
};

export default WeatherTrackClient;