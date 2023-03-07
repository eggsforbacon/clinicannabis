import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const Hero = () => {
    return (
        <header className={"relative h-224"}>
            <Image src={"/images/services/hero.png"} className={"absolute top-10 scale-150 -right-52"} alt={""} width={3841}
                   height={1792} quality={100}/>
            <article className={"z-30 relative w-full h-168 flex flex-col items-stretch justify-end gap-16 px-44 py-32"}>
                <h2 className={`text-9xl w-192 text-white font-black leading-[0.8]`}>{strings.services.headline}<strong
                    className={"text-[6.5rem] text-caribbean-green"}>{strings.services.remark}</strong></h2>
                <p className={`text-white font-normal text-2xl w-144`}>{strings.services.subtext}</p>
            </article>
        </header>
    );
}