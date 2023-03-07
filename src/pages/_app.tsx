import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import {CartProvider} from "../context/CartProvider";
import {useEffect} from "react";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {

    }, [])

    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp
