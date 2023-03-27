import Image from "next/image";
import {strings} from "../../../model/strings";

export const Serums = () => {
    return (
        <article className={"relative z-0 h-[44rem] lg:h-224"} id={"serums"}>
            <Image src={"/images/services/service3.png"} className={"z-0 scale-[3.25] lg:scale-100 absolute select-none top-60 right-44 lg:-top-0 lg:right-0"} alt={""} width={1920}
                   height={1110} quality={100} loading={"lazy"}/>
            <section className={"px-8 lg:px-0 mt-16 relative lg:absolute lg:right-0 lg:w-208 lg:mt-40 lg:mr-12 flex flex-col justify-between items-start text-midnight-green"}>
                <section className={"pt-8"}>
                    <h2 className={"text-6xl lg:text-9xl font-black leading-[0.8] lg:leading-[0.8] lg:tracking-normal tracking-normal mb-2"}>{strings.services.sections["3"].headline}</h2>
                    <h3 className={"font-normal text-viridian-green text-2xl lg:text-4xl"}>{strings.services.sections["3"].subtitle}</h3>
                </section>
                <p className={"mt-8 lg:w-136 text-neutral-600 text-lg lg:text-2xl"}>{strings.services.sections["3"].content}<span className={"font-bold"}>{strings.services.sections["3"].remark}</span></p>
            </section>
        </article>
    );
}