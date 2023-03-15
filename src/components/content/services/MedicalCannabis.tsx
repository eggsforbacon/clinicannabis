import Image from "next/image";
import {strings} from "../../../model/strings";

export const MedicalCannabis = () => {
    return (
        <article className={"relative z-10 h-256 flex lg:block flex-col items-stretch justify-center"} id={"medicinal-cannabis"}>
            <Image src={"/images/services/service1.png"}
                   className={"select-none absolute scale-[3] lg:scale-[1.5] xl:scale-100 right-16 brightness-50 lg:brightness-100 top-72 lg:-top-5 lg:-right-24 xl:right-0"} alt={""}
                   width={1920}
                   height={1001}/>
            <Image src={"/images/services/questionableAsset.svg"}
                   className={"select-none absolute scale-[6] lg:scale-[1.5] lg:left-24 xl:rotate-[-2.25deg] xl:left-96 lg:-top-[9.25rem] top-80 left-[32rem]"}
                   alt={""}
                   width={16 * 180} height={16 * 180}/>
            <section
                className={"mt-20 relative lg:w-168 lg:mt-56 xl:mt-96 lg:ml-24 xl:ml-56 flex flex-col justify-end items-start text-white px-4 lg:px-0 gap-16 lg:gap-4"}>
                <section className={""}>
                    <h2 className={"text-6xl lg:text-8xl leading-[0.7] font-black tracking-wide mb-4"}>{strings.services.sections["1"].headline}<strong className={"text-7xl lg:text-9xl"}>{strings.services.sections["1"].remark}</strong>
                    </h2>
                    <h3 className={"font-base lg:font-light text-2xl lg:text-3xl"}>{strings.services.sections["1"].subtitle}</h3>
                </section>
                <p className={"font-base lg:font-light text-lg lg:text-2xl"}>{strings.services.sections["1"].content}</p>
            </section>
        </article>
    );
}