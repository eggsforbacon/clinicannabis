import {GoogleMap, useLoadScript, Marker, MarkerF} from "@react-google-maps/api";
import React, {useMemo} from "react";
import {GeoAltFill} from "react-bootstrap-icons";
import {useRouter} from "next/router";

export const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey : `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    });

    const center = useMemo(() => ({lat: 3.362428, lng : -76.531214}), []);
    const navigate = useRouter();

    const styles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    const options = {
        disableDefaultUI: true,
        styles: styles
    };

    if (!isLoaded) return <p>Loading...</p>
    return (
        <section className={"relative flex flex-col items-stretch justify-center w-1/3 h-2/3 rounded-3xl shadow-lg grayscale overflow-clip transition duration-1000 sine-in lg:hover:-translate-y-4 lg:hover:shadow-xl lg:hover:shadow-caribbean-green/10 lg:hover:grayscale-0"}>
            <GoogleMap options={options} zoom={18} center={center} mapContainerClassName={"w-full h-full "}>
                <MarkerF icon={"/images/svg/geoAltFill.svg"} position={center} visible={true} clickable onClick={() => {window.open("https://goo.gl/maps/WXLy4un1udeGgoc9A", "_blank")}}/>
            </GoogleMap>
        </section>
    );
}