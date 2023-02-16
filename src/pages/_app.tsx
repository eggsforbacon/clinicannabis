import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import {CartProvider} from "../context/CartProvider";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

function MyApp({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {
        // router.push("/soon");
    }, [])

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </GoogleReCaptchaProvider>
    );
}

export default MyApp
