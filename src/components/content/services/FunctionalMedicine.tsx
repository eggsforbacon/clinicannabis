import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {

    const buttonStyle: string = "w-fit text-xl lg:block text-3xl rounded-full border-solid border-2 border-GO-green text-GO-green lg:border-white lg:text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative z-20 h-144 lg:h-288 flex flex-col items-center lg:items-start"} id={"medicina-funcional"}>
            <div className={"absolute w-full h-full lg:bottom-44 bottom-0 hidden lg:block lg:functional-medicine-clip-lg xl:functional-medicine-clip-xl"}>
                <Image src={"/services/medicina-funcional/leaf-background.png"} alt={""} width={1920} height={915} className={"absolute lg:bottom-16 xl:-bottom-32 2xl:-bottom-32 left-0 2xl:scale-105 xl:scale-100 lg:scale-125"}/>
                <Image className={"pointer-events-none select-none absolute lg:bottom-10 xl:-bottom-44 2xl:-bottom-52 hidden lg:block lg:scale-110 xl:scale-90 -right-[32rem]"}
                       src={"/services/medicina-funcional/section-doctor.png"} alt={"Medicina Funcional"} width={5616/2.924999999} height={3744/2.924999999}
                       quality={100}/>
            </div>
            <section
                className={"flex flex-col relative h-full lg:pl-16 xl:pt-32 xl:pl-32 2xl:pt-10 2xl:pl-56 items-center lg:items-start justify-start gap-6 lg:gap-20 mt-16 lg:mt-64"}>
                <section className={"flex flex-col lg:gap-4 text-rich-black lg:w-192"}>
                    <h2 className={"text-center lg:text-left text-6xl lg:text-[7rem] font-black lg:tracking-wide tracking-normal mb-4 leading-[0.65] lg:leading-[0.7]"}>{strings.services.sections["5"].headline}<br/><strong
                        className={"text-caribbean-green text-7xl lg:text-[9rem]"}>{strings.services.sections["5"].remark}</strong>
                    </h2>
                </section>
                <section className={"flex px-6 flex-col items-center lg:items-start justify-start gap-16"}>
                    <section className={"flex flex-col items-center lg:items-start justify-start gap-6"}>
                        <h3 className={"text-center lg:text-left font-semibold text-caribbean-green lg:text-white -mt-4 lg:mt-0 text-2xl lg:text-5xl"}>{strings.services.sections["5"].subtitle}</h3>
                        <p className={"max-w-[34rem] text-center lg:text-left lg:w-144 text-neutral-600 lg:text-white font-normal text-xl lg:text-2xl"}>{strings.services.sections["5"].content}</p>
                    </section>
                    <a href={"https://www.instagram.com/p/CqLiruWDhMs/"} target={"_blank"} rel={"noreferrer"}
                       className={buttonStyle}>
                        {strings.services.sections["5"].cta}
                    </a>
                </section>
            </section>
        </article>
    );
}