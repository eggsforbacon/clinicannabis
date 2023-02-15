import Image from "next/image";
import {strings} from "../../../model/strings";

export const MedicalCannabis = () => {
    return (
        <article className={"relative h-320"}>
            <Image src={"/images/services/service1.png"} className={"absolute -top-5 right-0"} alt={""} width={1920}
                   height={1001}/>
            <Image src={"/images/services/questionableAsset.svg"} className={"absolute -top-5 left-0"} alt={""}
                   width={16 * 150} height={16 * 150}/>
            <section className={"absolute w-168 h-full ml-56 pt-96 flex flex-col justify-start items-start"}>
                <h2 className={"text-9xl font-black tracking-wide text-white mb-4"}>{strings.services.sections["1"].headline}</h2>
                <h3 className={"text-white font-semibold text-3xl"}>{strings.services.sections["1"].remark}</h3>
                <p className={"mt-48 text-neutral-400 font-normal text-3xl"}>{strings.services.sections["1"].content}</p>
            </section>
        </article>
    );
}