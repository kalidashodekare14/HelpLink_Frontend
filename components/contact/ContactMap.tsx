"use client"

import { Container } from "@mui/material";
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type MarkerPosition = [number, number]

const myPosition: MarkerPosition = [23.777176, 90.399452];

const ContactMap = () => {

    const locationIcon = new L.Icon({
        iconUrl: "/location.png",
        iconSize: [50, 50]
    });

    return (
        <Container maxWidth="lg" sx={{ my: "30px" }}>
            <MapContainer
                center={myPosition}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "400px", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={myPosition} icon={locationIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
};

export default ContactMap;