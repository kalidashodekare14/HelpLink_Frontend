"use client"
import dynamic from "next/dynamic";

const WeatherTrackClient = dynamic(() => import("./WeatherTrackClient"), { ssr: false })

const WeatherTrack = () => {
    return (
        <div>
            <WeatherTrackClient />
        </div>
    );
};

export default WeatherTrack;