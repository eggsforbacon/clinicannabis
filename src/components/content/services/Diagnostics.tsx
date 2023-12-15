import Image from "next/image";
import {strings} from "@/model/strings";
import Link from "next/link";
import React from "react";

export const Diagnostics = () => {
    const buttonStyle: string = "mt-16 w-fit text-xl lg:block lg:text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article
            className={"relative flex flex-col items-center z-10 justify-center lg:justify-start lg:items-stretch overflow-clip h-192 md:h-168 lg:h-208 xl:h-224"}
            id={"ayudas-diagnosticas"}>
            <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                <Image src={"/services/ayudas-diagnosticas/bloodwork.webp"} alt={"A man having his blood pressure being measured"}
                       width={1920}
                       height={1080} className={"absolute top-0 left-0 select-none pointer-events-none"}/>
                <Image src={"/services/ayudas-diagnosticas/gradient.webp"} alt={"A gradient"} width={1920}
                       height={1080} className={"absolute top-0 left-0 select-none pointer-events-none"}/>
            </div>

        </article>
    );
}