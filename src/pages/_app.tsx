import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import {CartProvider} from "../context/Cart/CartProvider";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {NavbarProvider} from "../context/Navbar/NavbarProvider";

function MyApp({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {

    }, [])

    return (
        <CartProvider>
            <NavbarProvider>
                <Component {...pageProps} />
            </NavbarProvider>
        </CartProvider>
    );
}

export default MyApp
