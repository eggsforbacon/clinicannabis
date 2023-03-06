import Image from "next/image";
import {strings} from "../../../model/strings";

export const SIS = () => {
    return (
        <article className={"relative h-256 z-10"} id={"sis"}>
            <Image src={"/images/services/service2.png"} className={"absolute -top-28 -right-20"} alt={""} width={1678 *.9}
                   height={909 *.9}/>
            <Image src={"/images/services/servicesSISLeaf.svg"}
                   className={"absolute top-[30rem] scale-[1.85] -left-[30rem] -rotate-[8deg]"} alt={""}
                   width={16 * 300}
                   height={16 * 300}/>
            <section className={"absolute w-256 mt-72 ml-56 flex flex-col justify-between items-start"}>
                <section className={"pt-24"}>
                    <h2 className={"text-9xl font-black tracking-wide text-white mb-4"}>{strings.services.sections["2"].headline}</h2>
                    <h3 className={"text-caribbean-green font-normal text-5xl"}>{strings.services.sections["2"].remark}</h3>
                </section>
                <p className={"mt-28 w-224 text-white font-normal text-3xl"}>{strings.services.sections["2"].content}</p>
            </section>
        </article>
    );
}