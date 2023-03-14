import Image from "next/image";
import {strings} from "../../../model/strings";

export const MedicalCannabis = () => {
    return (
        <article className={"relative h-256"} id={"medicinal-cannabis"}>
            <Image src={"/images/services/service1.png"} className={"absolute lg:scale-[1.5] xl:scale-100 -top-5 lg:-right-24 xl:right-0"} alt={""} width={1920}
                   height={1001}/>
            <Image src={"/images/services/questionableAsset.svg"} className={"absolute lg:scale-[1.5] xl:scale-100 lg:left-24 xl:left-0 -top-5 left-0"} alt={""}
                   width={16 * 150} height={16 * 150}/>
            <section className={"relative w-168 lg:mt-56 xl:mt-96 lg:ml-24 xl:ml-56 flex flex-col justify-end items-start text-white"}>
                <section className={""}>
                    <h2 className={"text-8xl font-black tracking-wide mb-4"}>{strings.services.sections["1"].headline}</h2>
                    <h3 className={"font-normal text-3xl"}>{strings.services.sections["1"].remark}</h3>
                </section>
                <p className={"font-normal text-2xl"}>{strings.services.sections["1"].content}</p>
            </section>
        </article>
    );
}