import Image from "next/image";
import {strings} from "../../../accessibility/strings";
import React from "react";
import {useRouter} from "next/router";

export const OurHistory = () => {

    const lorem = "Cumplimos con los requisitos normativos para aliviar los síntomas derivados del dolor crónico. Con el uso de la medicina cannábica obtienes mejores resultados en estados de: ansiedad, depresión, alteraciones del apetito y trastornos del sueño.";
    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();
    return (
        <article className={"relative px-44 pt-32 min-h-[56rem] w-full flex items-start justify-center"}>
            <Image src={"/images/landing/whatsForYouHero.png"}
                   className={"absolute pointer-events-none top-20 right-0 selection:bg-transparent"} alt={""}
                   height={1000 * .9} width={1215 *.9}/>
            <Image src={"/images/svg/leafHumanizing.svg"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent left-0 top-10 opacity-70"} alt={""}
                   height={1000} width={1000}/>
            <Image src={"/images/backgrounds/whatsForYou.png"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0 opacity-0"} alt={""}
                   height={584} width={1920}/>
            <Image src={"/images/backgrounds/ourHistory.svg"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0 overflow-y-clip"} alt={""}
                   height={584} width={1920}/>
            <section className={"z-10 w-full flex items-center justify-between mb-16"}>
                <article className={"w-[38em] flex flex-col items-start justify-start"}>
                    <h2 className={"tracking-tight text-viridian-green text-9xl leading-[0.9] font-black mb-10"}>Lo que tenemos <strong className={"text-caribbean-green"}>para ti</strong></h2>
                    <h3 className={"mt-3 w-full text-caribbean-green text-3xl font-black"}>Medicina Cannábica</h3>
                    <p className={"w-full text-neutral-400 text-2xl font-normal"}>{lorem}</p>
                    <button
                        className={"ml-32 mt-12 font-normal rounded-full bg-white text-2xl text-viridian-green px-16 py-2 shadow-lg shadow-viridian-green/20 transition duration-500 ease-in-out scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-white focus:text-viridian-green border-viridian-green border-2 border-solid lg:hover:shadow-viridian-green/15"}
                        onClick={() => navigate.push("/contact")}>Ver más</button>
                </article>
            </section>
        </article>
    );
}