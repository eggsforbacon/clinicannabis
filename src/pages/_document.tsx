import {Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html className='scroll-smooth' lang={"es-CO"}>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <body>
            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}