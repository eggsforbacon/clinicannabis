import Image from "next/image";
import {strings} from "../../../model/strings";

export const Serums = () => {
    return (
        <article className={"relative z-20 h-208 lg:h-288"} id={"serums"}>
            <Image src={"/images/services/service3.png"} className={"z-0 scale-[4] lg:scale-100 absolute select-none top-96 right-44 lg:-top-0 lg:right-0"} alt={""} width={1920}
                   height={1379}/>
            <section className={"px-6 lg:px-0 mt-16 relative lg:absolute lg:right-0 lg:w-208 lg:mt-40 lg:mr-12 flex flex-col justify-between items-start text-midnight-green"}>
                <section className={"pt-24"}>
                    <h2 className={"text-6xl lg:text-8xl font-black tracking-wide mb-4"}>{strings.services.sections["3"].headline}</h2>
                    <h3 className={"font-normal text-viridian-green text-2xl lg:text-4xl"}>{strings.services.sections["3"].subtitle}</h3>
                </section>
                <p className={"mt-16 lg:w-136 text-neutral-600 text-lg lg:text-2xl"}>{strings.services.sections["3"].content}</p>
            </section>
        </article>
    );
}