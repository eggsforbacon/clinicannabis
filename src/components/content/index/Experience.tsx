import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export const Experience = () => {

    const buttonStyle: string = "text-viridian-green lg:text-white border-solid border-2 border-viridian-green lg:border-white rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:shadow-white/20 lg:hover:bg-viridian-green lg:hover:text-white";
    const navigate = useRouter();

    return (
        <article className={"w-full overflow-x-clip lg:h-168 xl:h-[46rem] 2xl:h-192 flex justify-center items-center md:justify-start xl:px-44 relative z-0"}>
            <Image src={"/images/landing/experienceHero_.png"} quality={100} loading={"lazy"} alt={""}
                   width={1920} height={1047}
                   className={"z-0 absolute top-32 lg:top-12 xl:top-6 2xl:-top-14 scale-[4] lg:scale-[1.5] xl:scale-[1.5] 2xl:scale-100 left-[40rem] lg:-left-10 xl:left-0 "}/>
            <Image src={"/images/svg/leafFooter.svg"} quality={100} loading={"lazy"} alt={""}
                   width={360} height={360}
                   className={"lg:hidden z-0 absolute bottom-24 scale-125 md:scale-[2] right-0 opacity-10 md:opacity-20"}/>

            <section
                className={"relative z-10 px-6 md:px-16 lg:pl-28 xl:px-0 w-full h-128 lg:h-[38rem] flex items-center md:items-start lg:items-center justify-center md:justify-between"}>
                <section className={"xl:w-1/2 relative z-10 flex flex-col items-stretch justify-end gap-8"}>
                    <h2 className={"w-104 lg:w-auto text-midnight-green lg:text-caribbean-green text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-black leading-[0.8] lg:leading-[0.6]"}>{strings.landing.experience.headline}<strong
                        className={"text-caribbean-green lg:text-midnight-green text-6xl md:text-8xl lg:text-9xl"}>{strings.landing.experience.remark}</strong>
                    </h2>
                    <p className={"text-neutral-800 text-base md:text-xl lg:text-2xl font-normal text-left md:text-left max-w-[28rem] md:max-w-max md:w-144 xl:w-192"}>{strings.landing.experience.content}</p>
                </section>
            </section>
        </article>
    );
}