import Image from "next/image";
import {strings} from "../../../model/strings";

export const SIS = () => {
    return (
        <article className={"relative h-136 lg:h-224 z-0"} id={"sis"}>
            <Image src={"/images/services/service2.png"} className={"absolute scale-[3] lg:scale-100 select-none top-36 lg:-top-28 -left-36 lg:left-0"} alt={""} width={1920}
                   height={1151}/>
            <span className={"absolute lg:hidden w-screen bg-gradient-to-b from-white via-white/50 -top-28 left-0 h-96"}/>
            <section className={"absolute w-168 mt-32 ml-56 flex flex-col justify-start items-start gap-4"}>
                <h2 className={"text-8xl font-black text-midnight-green leading-[0.8]"}>{strings.services.sections["2"].headline}<strong className={"text-9xl text-caribbean-green"}>{strings.services.sections["2"].remark}</strong></h2>
                <h3 className={"text-4xl text-viridian-green"}>{strings.services.sections["2"].subtitle}</h3>
                <p className={"text-2xl text-neutral-500"}>{strings.services.sections["2"].content}</p>
            </section>
        </article>
    );
}