import {strings} from "../../../model/strings";
import Link from "next/link";
import Image from "next/image";

export const PainClinic = () => {
    const buttonStyle: string = "relative mt-12 md:mt-0 lg:block text-xl lg:text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative h-[90vh] md:h-120 lg:h-192 flex flex-col items-center lg:items-start justify-start py-16 lg:pt-0 box-border gap-6 md:gap-8 px-6 lg:px-64 z-0 text-center lg:text-start"} id={"pain"}>
            <Image src={"/images/servicios/service3.png"} quality={100} alt={""} width={660} height={1286} className={"absolute top-0 left-0 select-none scale-125 z-0 md:top-auto md:bottom-0 md:scale-150"} />
            <Image src={"/images/servicios/painClinic/blueCurve.svg"} alt={""} width={450} height={450} className={"absolute -top-0 left-0 select-none z-0 md:hidden"}/>
            <h2 className={"relative text-6xl lg:text-8xl text-viridian-green leading-[0.85] font-black "}>{strings.services.sections["3"].headline}<span className={"text-[4rem] lg:text-[6.5rem] text-caribbean-green"}>{strings.services.sections["3"].remark}</span></h2>
            <section className={"relative flex flex-col items-center lg:items-start justify-start gap-4 text-lg lg:text-2xl text-neutral-700 font-normal md:w-144 lg:w-168"}>
                {strings.services.sections["3"].copy.map((p : JSX.Element, i : number) => {
                    return <p key={`painCopy${i}`}>{p}</p>
                })}
            </section>
            <Link href={"/servicios/clinica-del-dolor"} className={buttonStyle}>{strings.services.sections["3"].cta}</Link>
        </article>
    );
}