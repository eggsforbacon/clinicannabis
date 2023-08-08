import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import React, {useEffect} from "react";
import {WhatsappButton} from "../components/ui/WhatsappButton";
import {GlobalProvider} from "../context/GlobalProvider";

function MyApp({Component, pageProps}: AppProps) {


    useEffect(() => {

    }, [])

    return (
        <GlobalProvider>
            <WhatsappButton/>
            <Component {...pageProps} />
        </GlobalProvider>


    );
}

export default MyApp
