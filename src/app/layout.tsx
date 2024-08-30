import React from "react";
import '../../styles/globals.css'
import Popup from "@/components/ui/Popup";
import Script from "next/script";

export const metadata = {
    title: 'CliniVital - Centro de Medicina Ancestral Orígenes',
    description: 'No te acostumbres al dolor. "En CliniVital creemos que siempre hay una mejor alternativa para tratarlo. Contamos con un equipo de profesionales dispuestos a mostrarte que el alivio sí es posible.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="es-CO">
        {
          process.env.NEXT_PUBLIC_ENVIROMENT !== 'vercel' && <head>
          <Script
          id="facebook-pixel"
          strategy="afterInteractive">
          {
            `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '8529498520428227');
            fbq('track', 'PageView');`
          }
          </Script>
          <noscript><img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=8529498520428227&ev=PageView&noscript=1"
            /></noscript>
          </head>
        }
        <body>{children}<Popup/></body>
        </html>
    )
}