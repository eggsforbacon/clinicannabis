import React, {ReactNode} from "react";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {strings} from "@/model/strings";
import Navbar from "@/components/ui/Navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Medicina Alternativa - Nuestros Servicios',
    description: 'Ofrecemos diferentes terapias, incluyendo las energéticas, que ayudan en el control del estrés, la ansiedad y otros padecimientos de salud mental; dolores agudos o crónicos y, tratamientos de desintoxicación para la activación del metabolismo con énfasis en alimentación y estilo de vida saludable.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function AltMedicine() {

    const s = strings.services["alternative-medicine"];
    const bullets = s.bullets as {point: ReactNode, subtext?: ReactNode }[];

    return (
        <main>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center md:items-start justify-center gap-8 px-6 md:px-16 lg:px-32 xl:px-44 2xl:px-64"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/medicina-alternativa/acupuncture.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1316}
                           className={"opacity-50 md:opacity-100 absolute top-72 md:top-36 lg:top-20 xl:top-20 2xl:top-10 -left-80 md:-left-96 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.23] xl:scale-[1.15] 2xl:scale-100"}/>
                    <Image src={"/services/medicina-alternativa/gradient-info.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1316}
                           className={"absolute top-64 md:-top-6 lg:top-20 xl:top-20 2xl:top-10 -left-20 md:left-2 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.23] xl:scale-[1.15] 2xl:scale-100"}/>
                </div>
                <section
                    className={"md:w-136 lg:w-96 text-center md:text-start 2xl:w-128 font-normal text-lg md:text-xl 2xl:text-2xl text-neutral-600 relative h-full pt-36 pb-20 md:pb-16 md:pt-40 lg:pb-16 lg:pt-36 xl:pb-32 xl:pt-48 2x:pb-40 2xl:pt-44 flex flex-col items-center md:items-start justify-center gap-8"}>
                    <h2 className={"mt-8 lg:w-168 2xl:w-208 font-black italic text-caribbean-green text-3xl md:text-5xl 2xl:text-6xl"}>{s.title}</h2>
                    <p>{s.paragraph1}</p>
                    <p>{s.paragraph2}</p>
                    <ul className={"text-skobeloff font-black italic list-disc ml-6 text-start"}>
                        {
                            bullets.map((e, i) => {
                                return (
                                    <li key={i}>
                                        <span>{e.point}</span><br/>
                                        {e.subtext !== undefined ? <span className={"text-neutral-600 font-normal not-italic text-base md:text-lg 2xl:text-xl"}>{e.subtext}</span> : <></>}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
            </article>
            <Footer/>
        </main>
    );
}