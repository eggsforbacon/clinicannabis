import {Metadata} from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import React, {ReactNode} from "react";
import Image from "next/image";
import {strings} from "@/model/strings";

export const metadata: Metadata = {
    title: 'Sistema Super Inductivo - Nuestros Servicios',
    description: '¡Somos pioneros en el suroccidente colombiano! Contamos con una moderna herramienta biomédica no invasiva e indolora, que favorece y acelera los procesos de rehabilitación respiratoria, neuromuscular, osteoarticular y postquirúrgica. Además, es ideal para la recuperación de lesiones deportivas.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function SIS() {
    const s = strings.services.sis;
    const bullets = s.points.bullets as ReactNode[];

    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center lg:items-end justify-center px-6 md:px-16 pt-16 lg:pt-8 xl:pt-0 lg:px-32 xl:px-44 2xl:px-64 h-192 md:h-224 lg:h-208 2xl:h-256"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/sis/legs.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1080}
                           className={"absolute top-64 md:top-56 lg:top-20 xl:top-0 -left-52 md:-left-44 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.3] xl:scale-110 2xl:scale-100"}/>
                    <Image src={"/services/sis/gradient.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1080}
                           className={"absolute top-64 md:top-40 lg:top-20 xl:top-0 left-16 md:-left-32 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.3] xl:scale-110 2xl:scale-100"}/>
                </div>
                <section
                    className={"relative lg:w-112 2xl:w-136 flex flex-col items-center lg:items-start justify-start gap-8 text-center lg:text-start md:text-xl 2xl:text-2xl font-normal text-white"}>
                    <p>{s.intro}</p>
                    <p>{s.points.intro}</p>
                    <ul className={"font-bold list-disc ml-5"}>
                        {
                            bullets.map((s, i) => {
                                return (
                                    <li key={i}>
                                        {s}
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