import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import React, {useEffect} from "react";
import {WhatsappButton} from "../components/WhatsappButton";
import {GlobalProvider} from "../context/GlobalProvider";
import {CookieBanner} from "../components/ui/CookieBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({Component, pageProps}: AppProps) {


    useEffect(() => {

    }, [])

    return (
        <GlobalProvider>
            <GoogleAnalytics GA_MEASUREMENT_ID={"G-970CX72QYY"} />
            <WhatsappButton/>
            <Component {...pageProps} />
            <CookieBanner />
        </GlobalProvider>


    );
}

export default MyApp
