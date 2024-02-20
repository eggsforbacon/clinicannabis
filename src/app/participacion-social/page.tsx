import {Metadata} from "next";
import React from "react";
import Footer from "@/components/ui/Footer";
import CollapsableMenu from "@/components/content/social/CollapsableMenu";
import GridVisualizer from "@/components/content/social/GridVisualizer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
    title: 'Participación Social',
    description: 'La POLITICA DE PARTICIPACIÓN SOCIAL EN SALUD (PPSS) Resolución 2063 de 2017 es un esfuerzo del Ministerio de Salud y Protección Social para dar cumplimiento al mandato legal de direccionar y garantizar la participación social en el sector salud en el marco de la Ley 1438 de 2011, la Ley Estatutaria de Salud 1751 de 2015 y la Ley Estatuaria de Participación 1757 de 2015.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function SocialPartake() {
    return (
        <main className={"w-full overflow-x-clip bg-gradient-to-t from-viridian-green/30"}>
            <Navbar selection={""}/>
            <div className={"absolute top-0 left-0 w-full h-full "}>
                <span
                    className={"w-screen h-full bg-gradient-to-b from-viridian-green/70 absolute top-0 left-0"}/>
                <span
                    className={"absolute rounded-full aspect-square  h-168 -top-[22rem] left-1/2 -translate-x-1/2 bg-gradient-radial from-skobeloff via-skobeloff/30 via-45% to-skobeloff/0 to-70% md:from-persian-green md:via-viridian-green/40 md:via-45% md:to-skobeloff/0 md:to-70% md:left-auto md:translate-x-0 md:-right-64 md:top-28"}/>
                {/*<span*/}
                {/*    className={"absolute aspect-square rounded-full  h-136 -right-[60%] bg-gradient-radial from-caribbean-green via-caribbean-green/20 via-35% to-skobeloff/0 to-45% md:from-caribbean-green/70 md:via-GO-green/20 md:via-45% md:to-white/0 md:to-65% md:-left-52 md:-bottom-36"}/>*/}
                {/*<span*/}
                {/*    className={"absolute aspect-square  w-168 -right-[60%] bg-gradient-to-tl from-caribbean-green/60 via-caribbean-green/30 via-45%"}/>*/}
                <span
                    className={"absolute h-full w-full bg-gradient-to-tr from-neutral-100/80 from-35%"}/>
            </div>
            <article className={"h-full pt-44 px-32 relative"}>
                <header className={"w-full flex flex-col items-center justify-center gap-6 text-center"}>
                    <h1 className={"text-midnight-green text-6xl font-black"}>Participación Social</h1>
                    <p className={"text-neutral-900 text-2xl text-center w-144"}>Descubre cómo en Clinicannabis hacemos de la participación social una parte integral de nuestro
                        enfoque médico. Te invitamos a unirte a nosotros y colaborar en esta misión.</p>
                </header>
                <section className={"relative py-16 flex flex-col items-stretch gap-16"}>
                    <CollapsableMenu/>
                    <GridVisualizer/>
                </section>
            </article>
            <Footer/>
        </main>
    );
}