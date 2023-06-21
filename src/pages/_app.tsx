import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import React, {useEffect} from "react";
import {NavbarProvider} from "../context/Navbar/NavbarProvider";
import {WhatsappButton} from "../components/WhatsappButton";

function MyApp({Component, pageProps}: AppProps) {


    useEffect(() => {

    }, [])

    return (
        <NavbarProvider>
            <>
                <WhatsappButton/>
                <Component {...pageProps} />
            </>
        </NavbarProvider>

    );
}

export default MyApp
