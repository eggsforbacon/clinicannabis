import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";

export const MedicalCannabis = () => {

    const buttonStyle: string = "hidden lg:ml-96 lg:block text-3xl rounded-full border-solid border-2 border-white text-white font-normal text-base px-10 py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();

    return (
        <article className={"relative z-10 h-192 lg:h-208 flex lg:block flex-col items-stretch justify-center"} id={"medicinal-cannabis"}>
            <Image src={"/images/services/service1.png"}
                   className={"select-none absolute scale-[3] lg:scale-[1.5] xl:scale-100 right-16 brightness-50 lg:brightness-100 top-32 lg:-top-36 lg:-right-24 xl:right-0"} alt={""}
                   width={1920}
                   height={1001} quality={80} priority/>
            <Image src={"/images/services/service1_left.png"}
                   className={"select-none absolute scale-[5] lg:scale-[1.025] lg:left-24 xl:-left-[36rem] lg:rotate-[-0.5deg] lg:-top-[6.15rem] top-24 -left-[36rem]"}
                   alt={""}
                   width={1920} height={1001}/>
            <section
                className={"relative lg:w-168 lg:mt-56 xl:mt-[18.25rem] lg:ml-24 xl:ml-56 flex flex-col justify-end items-start text-white px-4 lg:px-0 gap-16 lg:gap-8"}>
                <section className={""}>
                    <h2 className={"text-6xl lg:text-8xl leading-[0.7] lg:leading-[0.7] font-black tracking-wide"}>{strings.services.sections["1"].headline}<strong className={"text-7xl lg:text-9xl"}>{strings.services.sections["1"].remark}</strong>
                    </h2>
                    <h3 className={"font-base lg:font-light text-2xl lg:text-3xl"}>{strings.services.sections["1"].subtitle}</h3>
                </section>
                <p className={"font-base lg:font-light text-lg lg:text-2xl"}>{strings.services.sections["1"].content}</p>
                <a href={"https://www.instagram.com/p/Cp5swkDjj9M/"} target={"_blank"} rel={"noreferrer"} className={buttonStyle}>
                    {strings.services.sections["5"].cta}
                </a>
            </section>
        </article>
    );
}