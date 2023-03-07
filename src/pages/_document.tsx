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
            <body>
            <WhatsappButton />
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}