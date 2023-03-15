import Image from "next/image";
import {strings} from "../../../model/strings";

export const Serums = () => {
    return (
        <article className={"relative z-10 h-288"} id={"serums"}>
            <Image src={"/images/services/service3.png"} className={"z-0 absolute select-none -top-0 right-0"} alt={""} width={1920}
                   height={1379}/>
            <section className={"absolute right-0 w-208 mt-40 mr-12 flex flex-col justify-between items-start text-midnight-green"}>
                <section className={"pt-24"}>
                    <h2 className={"text-8xl font-black tracking-wide mb-4"}>{strings.services.sections["3"].headline}</h2>
                    <h3 className={"font-normal text-viridian-green text-4xl"}>{strings.services.sections["3"].remark}</h3>
                </section>
                <p className={"mt-16 w-168 font-normal text-neutral-600 text-2xl"}>{strings.services.sections["3"].content}</p>
            </section>
        </article>
    );
}