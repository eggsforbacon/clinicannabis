import React from "react";
import '../../styles/globals.css'
import Popup from "@/components/ui/Popup";

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
        <body>{children}<Popup/></body>
        </html>
    )
}