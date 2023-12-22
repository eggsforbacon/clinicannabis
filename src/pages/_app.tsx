import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import React, {useEffect} from "react";
import {WhatsappButton} from "../components/ui/WhatsappButton";
import {GlobalProvider} from "../context/GlobalProvider";
import {CookieBanner} from "../components/ui/CookieBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({Component, pageProps}: AppProps) {


    useEffect(() => {

    }, [])

    return (
        <GlobalProvider>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA4_KEY?.toString() || 'default_value'} />

            <WhatsappButton/>
            <Component {...pageProps} />
            <CookieBanner />
        </GlobalProvider>


    );
}

export default MyApp
