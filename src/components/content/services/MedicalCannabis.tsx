import Image from "next/image";
import {strings} from "../../../model/strings";

export const MedicalCannabis = () => {
    return (
        <article className={"relative h-256"} id={"medicinal-cannabis"}>
            <Image src={"/images/services/service1.png"} className={"absolute -top-5 right-0"} alt={""} width={1920}
                   height={1001}/>
            <Image src={"/images/services/questionableAsset.svg"} className={"absolute -top-5 left-0"} alt={""}
                   width={16 * 150} height={16 * 150}/>
            <section className={"absolute w-168 mt-96 ml-56 flex flex-col justify-end items-start"}>
                <section className={"pt-36"}>
                    <h2 className={"text-8xl font-black tracking-wide text-rich-black mb-4"}>{strings.services.sections["1"].headline}</h2>
                    <h3 className={"text-dark-green font-normal text-3xl"}>{strings.services.sections["1"].remark}</h3>
                </section>
                <p className={"mt-28 text-neutral-400 font-normal text-2xl"}>{strings.services.sections["1"].content}</p>
            </section>
        </article>
    );
}