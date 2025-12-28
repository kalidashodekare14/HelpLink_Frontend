"use client"
import { useWeatherRiskTrackQuery } from '@/state/services/publicService/campaignsService';
import { Box, Container } from '@mui/material';
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherTrack = () => {

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
            <Box sx={{my: "20px"}}>
                <MapContainer style={{ height: "600px", width: "100%" }} center={[23.685, 90.356]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        districtRisk?.data?.map((d: any) => (
                            <CircleMarker
                                key={d.district}
                                center={[d.lat, d.lon]}
                                radius={12}
                                color={riskColor(d.riskLevel)}
                                fillOpacity={0.5}
                            >
                                <Popup>
                                    <strong>{d.district}</strong><br />
                                    Risk: {d.riskLevel} ({d.riskScore})<br />
                                    Reasons: {d.reasons.join(", ")}
                                </Popup>
                            </CircleMarker>
                        ))
                    }
                </MapContainer>
            </Box>
        </Container>
    );
};

export default WeatherTrack;