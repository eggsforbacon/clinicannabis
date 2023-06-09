import Image from "next/image";
import { strings } from "../../../model/strings";
import React from "react";
import { useRouter } from "next/router";

export const MedicalCannabis = () => {

    const buttonStyle: string = "text-xl lg:block text-3xl rounded-full border-solid border-2 border-white text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();

    return (
        <article className={"CannabisMedicinal_Service lg:block flex-col items-stretch justify-center"} id={"medicinal-cannabis"}>
            <div className={"brightness-50 "}>
                <Image src={"/images/services/imagen-clinic.png"}
                    className={"lg:block select-none absolute scale-[3] lg:scale-[1.5] xl:scale-100 right-16 lg:brightness-100 top-32 lg:-top-36 lg:-right-24 xl:right-0 pictSer-2"} alt={""}
                    width={1920}
                    height={1001} quality={80} priority />
            </div>
            <section
                className={"relative infMedicinal_Service items-center text-white lg:gap-10 md:gap-8"}>
                <section className={"infCannabisMedicinal_Service"}>
                    <h2 className={"text-6xl lg:text-8xl leading-[0.7] lg:leading-[0.7] font-black tracking-wide"}>{strings.services.sections["1"].headline}<strong className={"text-7xl lg:text-9xl"}>{strings.services.sections["1"].remark}</strong>
                    </h2>
                    <h3 className={"font-normal text-2xl lg:text-3xl md:text-2md mt-6"}>{strings.services.sections["1"].subtitle}</h3>
                </section>
                <p className={"font-normal lg:font-light text-lg lg:text-2xl"}>{strings.services.sections["1"].content}</p>
                <a href={"https://www.instagram.com/reel/Cp5swkDjj9M/?igshid=MDJmNzVkMjY="} target={"_blank"} rel={"noreferrer"} className={buttonStyle}>
                    {strings.services.sections["1"].cta}
                </a>
            </section>
        </article>
    );
}