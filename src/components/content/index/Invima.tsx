import {ExclamationTriangleFill} from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";

export const Invima = () => {
    return (
        <article className={"w-full h-112 lg:h-96 bg-white relative overflow-clip shadow-lg z-10"}>
            <Image src={"/images/landing/INVIMABg.png"} alt={""} aria-hidden={true} width={1920} height={671}
                   className={"absolute scale-[8] lg:scale-125 top-18 lg:top-0 right-[58rem] lg:left-0 z-0 select-none pointer-events-none"}
                   quality={100} loading={"lazy"}/>
            <section
                className={"relative w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:justify-between px-6 lg:px-32 2xl:px-64 pt-8 lg:pt-0"}>
                <h2 className={"text-viridian-green text-7xl lg:text-8xl 2xl:text-9xl leading-[0.8] lg:leading-[0.75] font-normal tracking-[-0.015em]"}>
                    <strong className={"font-bold"}>¡</strong>Cuida<br/><strong
                    className={"tracking-tight font-black"}>&nbsp;&nbsp;tu <span
                    className={"text-caribbean-green"}>salud!</span></strong></h2>
                <section
                    className={"text-midnight-green text-left h-fit lg:h-72 lg:w-144 flex flex-col items-center justify-center gap-4"}>
                    <section className={"flex gap-3 lg:gap-0 items-center justify-evenly w-full px-3"}>
                        <ExclamationTriangleFill size={96}
                                                 className={"animate-heartbeat fill-midnight-green aspect-square h-full"}/>
                        <p className={"font-bold text-2xl lg:text-3xl 2xl:text-4xl lg:w-104"}>Conoce las alertas sanitarias del
                            INVIMA</p>
                    </section>
                    <Link href={"https://app.invima.gov.co/alertas/medicamentos-productos-biologicos"} target={"_blank"}
                       rel={"noreferrer"}
                       className={"rounded-full px-6 lg:px-10 py-1.5 text-xl bg-transparent border-solid border-2 border-midnight-green transition duration-100 lg:hover:cursor-pointer lg:hover:bg-white/10 lg:hover:backdrop-blur-2xl focus:bg-white/10 focus:backdrop-blur-2xl lg:hover:scale-110"}>Más
                        información</Link>
                </section>
            </section>
        </article>
    );
}