import {ExclamationTriangleFill} from "react-bootstrap-icons";
import Image from "next/image";

export const Invima = () => {
    return (
        <article className={"w-full h-[38rem] relative overflow-clip shadow-lg z-10"}>
            <Image src={"/images/landing/INVIMABg.png"} alt={""} width={1920} height={671} className={"absolute top-0 left-0 z-0 selection-none"} quality={100} loading={"lazy"}/>
            <section className={"relative w-full h-full flex items-center justify-between px-64"}>
                <h2 className={"text-white text-9xl leading-[0.7] font-semibold"}>¡Cuida<br/><strong className={"tracking-tighter"}>&nbsp;&nbsp;&nbsp;tu <span className={"text-caribbean-green"}>salud!</span></strong></h2>
                <section className={"text-white h-72 w-144 flex flex-col items-center justify-center gap-4"}>
                    <section className={"flex items-center justify-evenly w-full"}>
                        <ExclamationTriangleFill size={76} className={"animate-heartbeat fill-white aspect-square h-full"}/>
                        <p className={"text-4xl w-104"}>Conoce las alertas sanitarias del INVIMA</p>
                    </section>
                    <a href={"https://app.invima.gov.co/alertas/alertas-sanitarias-general"} target={"_blank"} rel={"noreferrer"} className={"rounded-full px-16 py-2 font-base text-lg bg-transparent border-solid border-2 border-white transition duration-100 lg:hover:cursor-pointer lg:hover:bg-white/10 lg:hover:backdrop-blur-2xl focus:bg-white/10 focus:backdrop-blur-2xl lg:hover:scale-110"}>Más información</a>
                </section>
            </section>
        </article>
    );
}