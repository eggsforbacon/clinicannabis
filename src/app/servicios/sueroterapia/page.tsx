import {Metadata} from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import React, {ReactNode} from "react";
import Image from "next/image";
import {strings} from "@/model/strings";

export const metadata: Metadata = {
    title: 'Sueroterapia - Nuestros Servicios',
    description: 'La sueroterapia consiste en la administración de sueros específicos vía intravenosa que favorecen la autocuración del organismo a partir de una selección de vitaminas, minerales, enzimas, oligoelementos y fármacos homeopáticos según las necesidades de cada paciente.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function Serums() {

    const s = strings.services.serums;
    const serums = s.list.items as { name: ReactNode, function: ReactNode }[];
    const halfLength = Math.ceil(serums.length/2);

    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center justify-start px-6 md:px-16 pt-36 pb-16 md:pt-44 md:pb-32 lg:pt-44 lg:pb-16 2xl:pt-52 2xl:pb-36 lg:px-32 xl:px-44 2xl:px-64 h-auto"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/sueroterapia/serums.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1802}
                           className={"absolute top-192 md:top-72 lg:top-48 xl:top-10 -left-136 md:-left-64 lg:-left-64 xl:left-0 select-none pointer-events-none scale-[5.2] md:scale-[2.2] lg:scale-[1.8] xl:scale-[1.15] 2xl:scale-110"}/>
                    <Image src={"/services/sueroterapia/gradient.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1802}
                           className={"absolute top-192 md:top-72 lg:top-48 xl:top-10 left-96 md:left-64 lg:left-64 xl:left-0 select-none pointer-events-none scale-[5.2] md:scale-[2.3] lg:scale-[1.8] xl:scale-[1.15] 2xl:scale-110"}/>
                </div>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-center md:text-xl 2xl:text-2xl font-normal text-midnight-green"}>
                    <p className={"lg:px-16"}>{s.paragraph1[0]}<span className={"font-bold"}>{s.paragraph1[1]}</span>{s.paragraph1[2]}</p>
                    <p className={"lg:px-16"}>{s.paragraph2}</p>
                    <p className={"lg:px-16"}>{s.paragraph3}</p>
                    <h2 className={"mt-8 font-black italic text-viridian-green text-2xl md:text-4xl 2xl:text-5xl"}>{s.list.title}</h2>
                    <ul className="grid md:grid-cols-2 grid-cols-1 place-items-center lg:gap-x-6 text-center lg:text-start">
                        <div className={"flex flex-col items-center lg:items-start justify-start w-full h-full text-start whitespace-nowrap"}>
                            {
                                serums.slice(0, halfLength).map((e, i) => {
                                    return (
                                        <li key={i} className={"flex flex-col items-center lg:items-start w-full lg:px-6 2xl:px-8 py-4"}>
                                            <h3 className={"font-black italic text-xl md:text-3xl 2xl:text-4xl text-skobeloff"}>{e.name}</h3>
                                            <p className={"font-semibold text-lg md:text-xl 2xl:text-2xl"}>{e.function}</p>
                                        </li>
                                    );
                                })
                            }
                        </div>
                        <div className={"flex flex-col items-center lg:items-start justify-start w-full"}>
                            {
                                serums.slice(halfLength).map((e, i) => {
                                    return (
                                        <li key={i} className={"flex flex-col items-center lg:items-start w-full h-full lg:px-6 2xl:px-8 py-4"}>
                                            <h3 className={"font-black italic text-xl md:text-3xl 2xl:text-4xl text-skobeloff"}>{e.name}</h3>
                                            <p className={"font-semibold text-lg md:text-xl 2xl:text-2xl"}>{e.function}</p>
                                        </li>
                                    );
                                })
                            }
                        </div>
                    </ul>
                </section>
            </article>
            <Footer/>
        </main>
    );
}