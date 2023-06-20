import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import {WhatsappButton} from "../components/WhatsappButton";

export default function Document() {
    return (
        <Html className='scroll-smooth' lang={"es-CO"} >
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-3J2GHYJD7T"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-3J2GHYJD7T');
            </script>
            <body>
            <WhatsappButton />
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}