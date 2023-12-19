import {Metadata} from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import React, {ReactNode} from "react";
import Image from "next/image";
import {strings} from "@/model/strings";

export const metadata: Metadata = {
    title: 'Cannabis Medicinal - Nuestros Servicios',
    description: 'Aplicamos protocolos de cannabis medicinal enmarcados dentro de los requisitos normativos para aliviar los síntomas derivados del dolor crónico y obtener mejoras en estados de ansiedad, depresión, alteración del apetito, trastornos del sueño y enfermedades crónicas no transmisibles como fibromialgia y artrosis, entre otras.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function MedicinalCannabis() {
    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center md:items-start justify-center gap-8 px-6 md:px-16 lg:px-32 xl:px-44 2xl:px-64"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/cannabis-medicinal/leafs-and-beads.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1080}
                           className={"absolute top-64 md:top-6 lg:top-20 xl:top-10 -left-44 md:left-16 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.3] xl:scale-110"}/>
                    <Image src={"/services/cannabis-medicinal/gradient.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1080}
                           className={"absolute top-64 md:-top-6 lg:top-20 xl:top-10 -left-44 md:left-16 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.3] xl:scale-110"}/>
                </div>
                <div className={"relative h-full py-64 md:pb-16 md:pt-44 lg:pb-32 lg:pt-40 xl:py-52 2xl:py-72 flex flex-col items-center md:items-start justify-center gap-8"}>
                    {
                        (strings.services["medicinal-cannabis"].body as {
                            intro: ReactNode,
                            content: ReactNode
                        }[]).map((s, i) => {
                            return (
                                <p key={i}
                                   className={"md:w-96 text-center md:text-start 2xl:w-128 font-normal md:text-xl 2xl:text-2xl text-midnight-green"}>
                                    <span className={"font-black"}>{s.intro}</span>{s.content}</p>
                            );
                        })
                    }
                </div>
            </article>
            <Footer/>
        </main>
    );
}