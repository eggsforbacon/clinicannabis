import Image from "next/image";

export const ExperienceAssistant = () => {
    return (
        <section className={"w-full h-320 relative"}>
            <Image className={"absolute select-none bottom-[27rem] left-[52rem] scale-[190]"}
                   src={"/images/experience/assistantBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
            <Image className={"absolute select-none top-1"}
                   src={"/images/experience/assistantFront.png"} alt={"Placeholder"} width={1932} height={1210}/>
            <article className={"w-256 h-2/3 relative flex flex-col items-start justify-between pt-20 pl-40"}>
                <h2 className={"leading-[0.8] text-9xl text-caribbean-green font-black"}>Asistente<br/><strong
                    className={"text-viridian-green text-[6.5rem]"}>de experiencia</strong></h2>
                <section className={"text-white mb-7"}>
                    <h3 className={"text-5xl font-black"}>Medicina Cannábica</h3>
                    <p className={"text-3xl font-normal text-justify pr-40 leading-[1.25]"}>Cumplimos con los requisitos normativos para aliviar los
                        síntomas derivados del dolor crónico. Con el uso de la medicina cannábica obtienes mejores
                        resultados en estados de: ansiedad, depresión, alteraciones del apetito y trastornos del
                        sueño.</p>
                </section>
            </article>
        </section>
    );
}