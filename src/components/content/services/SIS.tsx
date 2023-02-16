import Image from "next/image";

export const SIS = () => {
    return (
        <article className={"relative h-424"}>
            <Image src={"/images/services/service2.png"} className={"absolute -top-28 right-0"} alt={""} width={1920}
                   height={937}/>
            <Image src={"/images/services/servicesSISLeaf.svg"} className={"absolute top-[28rem] scale-[1.65] -left-[30rem] -rotate-[8deg]"} alt={""} width={16*300}
                   height={16*300}/>
            Sistema Súper Inductivo
        </article>
    );
}