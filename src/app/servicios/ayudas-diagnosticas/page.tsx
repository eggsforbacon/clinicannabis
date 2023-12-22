import React, {ReactNode} from "react";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {strings} from "@/model/strings";
import Navbar from "@/components/ui/Navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Ayudas Diagnósticas - Nuestros Servicios',
    description: 'Realizamos estudios complementarios para la evaluación clínica de un paciente que permite al médico tratante confirmar un diagnóstico.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ]
}

export default function Diagnosis() {
    const s = strings.services.diagnosis;
    const bullets = s.bullets as ReactNode[];

    return (
        <main>
            <Navbar selection={""} />
            <article
                className={"relative flex flex-col items-center md:items-start justify-center gap-8 px-6 md:px-16 lg:px-32 xl:px-44 2xl:px-64"}>
                <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                    <Image src={"/services/ayudas-diagnosticas/ect-machine.webp"}
                           alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                           quality={100}
                           width={1920} height={1080}
                           className={"md:opacity-60 lg:opacity-100 absolute top-80 md:top-6 lg:top-20 xl:top-20 2xl:top-10 -left-112 md:-left-52 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.3] xl:scale-[1.35] 2xl:scale-110"}/>
                    <Image src={"/services/ayudas-diagnosticas/gradient-info.webp"} alt={"A gradient"} quality={100}
                           width={1920} height={1080}
                           className={"opacity-80 md:opacity-100 absolute top-64 md:-top-6 lg:top-20 xl:top-20 2xl:top-10 left-128 md:left-120 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.3] xl:scale-[1.35] 2xl:scale-110"}/>
                </div>
                <section
                    className={"md:w-136 lg:w-96 text-center md:text-start 2xl:w-128 font-normal md:text-xl 2xl:text-2xl text-neutral-800 md:text-neutral-600 relative h-full py-52 md:pb-52 md:pt-64 lg:pb-44 lg:pt-56 2xl:pb-72 2xl:pt-80 flex flex-col items-center md:items-start justify-center gap-8"}>
                    <p>{s.paragraph1}</p>
                    <p>{s.paragraph2}</p>
                    <ul className={"text-viridian-green font-black italic list-disc ml-6 text-start"}>
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
                </section>
            </article>
            <Footer/>
        </main>
    );
}