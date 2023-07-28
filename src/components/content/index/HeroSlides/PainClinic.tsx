import Image from "next/image";

export const PainClinic = () => {
    return (
        <article className={"w-full h-full relative"}>
            <Image src={"/images/landing/hero/painClinicBg.png"} alt={""} width={2004} height={1434} className={"absolute top-[15.5rem] right-[15.5rem] md:right-44 md:top-52 lg:top-10 lg:right-10 xl:top-0 xl:right-0 scale-[2.9] md:scale-[1.8] lg:scale-125 xl:scale-100"} quality={90} />
        </article>
    );
}