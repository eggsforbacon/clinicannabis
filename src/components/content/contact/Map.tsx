import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import React, {useMemo} from "react";

export const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey : `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    });

    const center = useMemo(() => ({lat: 3.362678, lng : -76.531062}), []);

    if (!isLoaded) return <p>Loading...</p>
    return (
        <section className={"relative flex flex-col items-stretch justify-center w-1/3 h-2/3 rounded-3xl shadow-lg grayscale overflow-clip transition duration-1000 sine-in lg:hover:-translate-y-4 lg:hover:shadow-xl lg:hover:shadow-caribbean-green/10 lg:hover:grayscale-0"}>
            <GoogleMap zoom={18} center={center} mapContainerClassName={"w-full h-full "}>
                <Marker position={{lat: 3.362678, lng : -76.531062}}/>
            </GoogleMap>
        </section>
    );
}