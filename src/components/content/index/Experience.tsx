import {strings} from "../../../model/strings";
import React from "react";
import Image from "next/image";

export const Experience = () => {

    return (
        <article className={"w-full overflow-x-clip lg:h-168 xl:h-[46rem] 2xl:h-192 flex justify-center items-start md:justify-start xl:px-44 relative z-0"}>
            <Image src={"/images/landing/experienceHero_.png"} quality={100} loading={"lazy"} width={1920} height={1047}
                   alt={"Dos pacientes con mascarillas sentados en la sala de espera de la clínica. Los dos pacientes observan la página de la clínica en un celular. En el fondo se observan árboles y edificios. La imagen esta difuminada sobre blanco y tiene un gradiente verde a la izquierda de la imagen."}
                   className={"pointer-events-none select-none z-0 absolute top-32 lg:top-12 xl:-top-24 2xl:-top-32 scale-[4] lg:scale-[1.5] xl:scale-[1.5] 2xl:scale-100 left-[34rem] md:left-[40rem] lg:-left-10 xl:left-0 "}/>
            <Image src={"/images/svg/leafFooter.svg"} quality={100} loading={"lazy"} alt={""}
                   width={360} height={360}
                   className={"lg:hidden z-0 absolute bottom-24 scale-125 md:scale-[2] right-0 opacity-10 md:opacity-20"}/>

            <section
                className={"relative z-10 px-6 md:px-16 lg:pl-28 xl:px-0 md:w-full h-128 lg:h-[38rem] flex items-center md:items-start lg:items-center justify-center md:justify-between"}>
                <section className={"xl:w-1/2 relative z-10 flex flex-col max-w-[95%] items-center md:items-stretch justify-end gap-8"}> {/*I don't know why there's a wrapping here, but this makes it work so maybe don't touch it unless you're SURE you know how to fix it.*/}
                    <h2 className={"w-full lg:w-auto text-midnight-green lg:text-caribbean-green text-[3.5rem] md:text-[5rem] lg:text-[5.25rem] 2xl:text-[7rem] font-black leading-[0.8] lg:leading-[0.6]"}>{strings.landing.experience.headline}<strong
                        className={"text-caribbean-green lg:text-midnight-green text-6xl md:text-8xl 2xl:text-9xl"}>{strings.landing.experience.remark}</strong>
                    </h2>
                    <p className={"text-neutral-800 text-base md:text-xl 2xl:text-2xl font-normal text-left md:text-left max-w-[28rem] md:max-w-max md:w-144 xl:w-[38rem] 2xl:w-192"}>{strings.landing.experience.content}</p>
                </section>
            </section>
        </article>
    );
}