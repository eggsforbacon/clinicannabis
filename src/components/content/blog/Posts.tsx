import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export const Posts = () => {

    const navigate = useRouter();

    return (
        <article className={"min-h-[62rem] w-full relative"}>
            <section className={"px-44 w-full flex flex-col items-center justify-start gap-10 h-full"}>
                <h2>{strings.blog.teaser}</h2>
                <Image src={"/images/clinicannabis.png"} alt={""} width={384} height={418} className={"grayscale-[70%]"}/>
                <button onClick={() => navigate.push("/")} className={"px-16 py-2 text-2xl text-viridian-green bg-white border-solid border-2 border-viridian-green rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"}>
                    {strings.blog.cta}
                </button>
            </section>
        </article>
    );
}