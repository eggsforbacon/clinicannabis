import {Html, Head, Main, NextScript} from "next/document";
import React from "react";
import {WhatsappButton} from "../components/WhatsappButton";

export default function Document() {
    return (
        <Html className='scroll-smooth' lang={"es-CO"}>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/favicon.png"/>
                {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-3J2GHYJD7T"></script>*/}
                {/*<script type="text/javascript"*/}
                {/*        async*/}
                {/*        dangerouslySetInnerHTML={{*/}
                {/*            __html: `*/}
                {/*            window.dataLayer = window.dataLayer || [];*/}
                {/*            function gtag(){dataLayer.push(arguments)}*/}
                {/*            gtag('js', new Date());*/}

                {/*            gtag('config', 'G-3J2GHYJD7T');*/}
                {/*            `*/}
                {/*        }}/>*/}
            </Head>
            <body>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=G-3J2GHYJD7T`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
            <WhatsappButton/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}