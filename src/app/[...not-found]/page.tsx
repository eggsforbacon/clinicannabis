import {notFound} from "next/navigation"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Página no encontrada',
    description: 'Despreocúpate. Aún puedes conocer todo lo que tenemos para ti.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ],
    viewport: 'width=device-width, initial-scale=1',
}

export default function NotFoundCatchAll() {
    notFound();
    return null
}