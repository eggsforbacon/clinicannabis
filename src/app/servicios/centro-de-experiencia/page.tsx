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

    const s = strings.services.experience;
    const places = s.places as { name: ReactNode, description: ReactNode }[];


    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={""}/>
            <article
                className={"relative flex flex-col items-center md:items-start justify-start px-6 md:px-16 pt-28 pb-16 md:py-32 lg:pt-40 lg:pb-20 xl:pt-32 2xl:pt-44 2xl:pb-36 lg:px-32 xl:px-44 2xl:px-64 h-auto"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/centro-experiencia/smile.jpg"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1612}
                           className={"absolute top-192 md:top-112 lg:top-48 xl:top-10 left-144 md:left-80 lg:left-52 xl:left-10 select-none pointer-events-none scale-[5] md:scale-[2.4] lg:scale-[1.6] xl:scale-[1.15] 2xl:scale-110"}/>
                </div>
                <section
                    className={"relative flex flex-col items-center md:items-start justify-start gap-8 text-center md:text-xl 2xl:text-2xl font-normal text-neutral-500"}>
                    <h2 className={"mt-8 lg:w-168 2xl:w-208 font-black italic text-caribbean-green text-3xl md:text-5xl 2xl:text-6xl"}>{s.title}</h2>
                    <ul className="flex flex-col items-center justify-start gap-8 text-center md:text-justify w-[80%]">
                        {
                            places.map((p, i) => {
                                return (
                                    <li key={i} className={"flex flex-col lg:flex-row items-center justify-start gap-4"}>
                                        <Image className='p-4' src={`/services/centro-experiencia/icons/${i + 1}.svg`} alt={""}
                                               width={94} height={94}/>
                                        <p><span className={"font-black italic text-xl md:text-3xl 2xl:text-4xl text-skobeloff"}>{p.name}</span><br /> {p.description}</p>
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