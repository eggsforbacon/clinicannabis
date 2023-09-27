import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Tratamiento de Datos | Clinicannabis',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ],
    viewport: 'width=device-width, initial-scale=1',
}

export default function LegalLayout(
    {
        children, // will be a page or nested layout
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            {children}
        </section>
    );
}