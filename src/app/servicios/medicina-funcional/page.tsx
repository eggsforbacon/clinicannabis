import React, {ReactNode} from "react";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {strings} from "@/model/strings";
import Navbar from "@/components/ui/Navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Medicina Funcional - Nuestros Servicios',
    description: 'Valoramos a cada paciente de manera integral enfocándonos en la biología de los sistemas del organismo e identificando los factores que puedan alterar su equilibrio.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function FunctionalMedicine() {

    const s = strings.services["functional-medicine"];
    const bullets = s.bullets as ReactNode[];

    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center md:items-start justify-center gap-8 px-6 md:px-16 lg:px-32 xl:px-44 2xl:px-64"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/medicina-funcional/apple.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1080}
                           className={"opacity-30 lg:opacity-100 absolute top-72 md:top-6 lg:top-20 xl:top-20 2xl:top-10 -left-80 md:-left-32 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.3] xl:scale-[1.35] 2xl:scale-110"}/>
                    <Image src={"/services/medicina-funcional/gradient.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1080}
                           className={"opacity-60 md:opacity-100 absolute top-64 md:-top-6 lg:top-20 xl:top-20 2xl:top-10 -left-20 md:left-120 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.3] xl:scale-[1.35] 2xl:scale-110"}/>
                </div>
                <section
                    className={"md:w-136 lg:w-96 text-center md:text-start 2xl:w-128 font-normal md:text-xl 2xl:text-2xl text-neutral-600 relative h-full pt-36 pb-20 md:pb-16 md:pt-40 lg:pb-16 lg:pt-36 xl:pb-32 xl:pt-48 2x:pb-40 2xl:pt-44 flex flex-col items-center md:items-start justify-center gap-8"}>
                    <p>{s.paragraph1}</p>
                    <p className={"w-[90%] md:w-full"}>{s.paragraph2}</p>
                    <ul className={"text-skobeloff font-black italic list-disc ml-6 text-start"}>
                        {
                            bullets.map((e, i) => {
                                return (
                                    <li key={i}>
                                        {e}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <p className={"w-[88%] md:w-full"}>{s.paragraph3}</p>
                </section>
            </article>
            <Footer/>
        </main>
    );
}