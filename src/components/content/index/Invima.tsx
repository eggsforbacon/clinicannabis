import {ExclamationTriangleFill} from "react-bootstrap-icons";
import Image from "next/image";
import {useContext} from "react";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";

export const Invima = () => {
    return (
        <article className={"w-full h-192 lg:h-[38rem] relative overflow-clip shadow-lg z-10"}>
            <Image src={"/images/landing/INVIMABg.png"} alt={""} width={1920} height={671} className={"absolute scale-[8] lg:!scale-100 top-64 lg:top-0 right-[68rem] lg:left-0 z-0 selection-none"} quality={100} loading={"lazy"}/>
            <section className={"relative w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 px-6 lg:px-64"}>
                <h2 className={"text-viridian-green text-7xl lg:text-9xl leading-[0.9] lg:leading-[0.75] font-semibold"}>¡Cuida<br/><strong className={"tracking-tighter"}>&nbsp;&nbsp;&nbsp;tu <span className={"text-caribbean-green"}>salud!</span></strong></h2>
                <section className={"text-midnight-green text-center lg:text-left h-72 lg:w-144 flex flex-col items-center justify-center gap-4"}>
                    <section className={"flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-evenly w-full"}>
                        <ExclamationTriangleFill size={76} className={"animate-heartbeat fill-midnight-green aspect-square h-full"}/>
                        <p className={"text-xl lg:text-4xl lg:w-104"}>Conoce las alertas sanitarias del INVIMA</p>
                    </section>
                    <a href={"https://app.invima.gov.co/alertas/alertas-sanitarias-general"} target={"_blank"} rel={"noreferrer"} className={"rounded-full px-16 py-2 text-xl bg-transparent border-solid border-2 border-midnight-green transition duration-100 lg:hover:cursor-pointer lg:hover:bg-white/10 lg:hover:backdrop-blur-2xl focus:bg-white/10 focus:backdrop-blur-2xl lg:hover:scale-110"}>Más información</a>
                </section>
            </section>
        </article>
    );
}