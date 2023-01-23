import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html className='scroll-smooth' lang={"es-CO"} >
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}