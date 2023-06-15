import Image from "next/image";
import { strings } from "../../../model/strings";
import React from "react";
import { useRouter } from "next/router";

export const MedicalCannabis = () => {

    const buttonStyle: string = "text-xl lg:block lg:text-3xl rounded-full border-solid border-2 border-white text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();

    return (
        <article className={"relative w-full h-144 md:h-168 overflow-clip lg:h-[58rem] lg:block flex flex-col items-stretch lg:items-start justify-center"} id={"medicinal-cannabis"}>
            <Image src={"/images/services/imagen-clinic.png"}
                className={"select-none absolute scale-[2] lg:scale-[1.5] xl:scale-[1.3] right-16 brightness-50 top-32 md:right-0 md:bottom-32 md:top-auto lg:bottom-40 lg:-right-24 xl:bottom-44 xl:right-0 xl:left-44"} alt={""}
                width={1920}
                height={1001} quality={80} priority />
            <section
                className={"relative flex flex-col justify-center items-center lg:items-start mt-20 px-16 md:px-48 lg:mt-48 lg:px-64 text-white gap-6 lg:gap-10 md:gap-8"}>
                <section className={"flex flex-col items-center lg:items-start justify-center"}>
                    <h2 className={"text-center lg:text-left text-6xl lg:text-8xl leading-[0.7] lg:leading-[0.7] font-black tracking-wide"}>
                        {strings.services.sections["1"].headline}<br/>
                        <strong className={"text-7xl lg:text-8xl"}>
                            {strings.services.sections["1"].remark}
                        </strong>
                    </h2>
                    <h3 className={"font-normal text-center lg:text-left text-2xl lg:text-3xl md:text-2md mt-6"}>{strings.services.sections["1"].subtitle}</h3>
                </section>
                <p className={"font-normal text-center lg:text-left lg:font-light text-lg lg:text-2xl lg:max-w-[42rem]"}>{strings.services.sections["1"].content}</p>
                <a href={"https://www.instagram.com/reel/Cp5swkDjj9M/?igshid=MDJmNzVkMjY="} target={"_blank"} rel={"noreferrer"} className={buttonStyle}>
                    {strings.services.sections["1"].cta}
                </a>
            </section>
        </article>
    );
}