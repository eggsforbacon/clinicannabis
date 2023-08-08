import {NextPage} from "next";
import Head from "next/head";
import Navbar from "../../components/ui/Navbar";
import React from "react";
import Footer from "../../components/ui/Footer";
import Image from "next/image";
import {strings} from "../../model/strings";

const ClinicaDelDolor: NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Clínica del Dolor</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={"Trabajamos para cumplir con los estándares de calidad que garanticen que nuestros tratamientos y productos te brinden una mejor calidad de vida."}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"services"}/>
            <article
                className={"flex flex-col items-center justify-center pt-32 lg:pt-0 pb-36 box-border px-4 lg:px-0 gap-20 lg:gap-10 2xl:gap-16 relative overflow-clip"}>
                <div
                    className={"absolute h-full w-full top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"}> {/* The gradient thing BUT ONLY FOR MOBILE */}
                    <div className={"relative w-full h-168 lg:hidden"}>
                        <span
                            className={"w-full h-full bg-gradient-to-b from-viridian-green/70 absolute top-0 right-0 lg:hidden"}/>
                        <span
                            className={"absolute rounded-full aspect-square h-168 -top-[22rem] left-1/2 -translate-x-1/2 bg-gradient-radial from-skobeloff via-skobeloff/30 via-45% to-skobeloff/0 to-70% lg:from-persian-green lg:via-viridian-green/40 lg:via-45% lg:to-skobeloff/0 lg:to-70% lg:left-auto lg:translate-x-0 lg:-right-64 lg:top-28"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-136 -right-[60%] bg-gradient-radial from-caribbean-green via-caribbean-green/20 via-35% to-skobeloff/0 to-45% lg:from-caribbean-green/70 lg:via-GO-green/20 lg:via-45% lg:to-white/0 lg:to-65% lg:-left-52 lg:-bottom-36"}/>
                        <span
                            className={"absolute aspect-square w-168 -right-[60%] bg-gradient-to-tl from-caribbean-green/60 via-caribbean-green/30 via-45% lg:hidden"}/>
                        <span
                            className={"absolute h-full w-full bg-gradient-to-tr from-neutral-100/80 from-35% lg:hidden"}/>
                    </div>
                    {/* First section "QUÉ ES EL DOLOR CRÓNICO" */}
                    <div className={"relative w-full h-[36rem] lg:hidden"}>
                        <span
                            className={"absolute w-168 h-144 -right-[60%] bg-gradient-to-bl from-caribbean-green/60 via-caribbean-green/30 via-45% to-white/0 to-70%"}/>
                        <span
                            className={"absolute w-full h-72 bottom-10 bg-gradient-to-b from-transparent via-midnight-green/30 via-60% to-viridian-green/0 to-95%"}/>
                        <span className={"absolute h-full w-full bg-gradient-to-r from-neutral-100/50"}/>
                        <span className={"absolute w-full h-16 bottom-0 bg-gradient-to-t from-white"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-128 bottom-4 -right-[60%] bg-gradient-radial from-midnight-green/40 via-midnight-green/20 via-35% to-midnight-green/0 to-65%"}/>
                    </div>
                    {/* Second section "EXISTEN DIFERENTES TIPOS DE DOLOR CRÓNICO" */}
                    <div className={"relative w-full h-[38rem] lg:hidden"}>
                        <span
                            className={"absolute aspect-square rounded-full h-168 -top-[19rem] -right-[90%] bg-gradient-radial from-caribbean-green/90 via-caribbean-green/40 via-35% to-caribbean-green/0 to-70%"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-128 top-0 -left-[70%] bg-gradient-radial from-skobeloff/60 via-skobeloff/20 via-35% to-skobeloff/0 to-70%"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-168 -bottom-[24rem] right-[50%] bg-gradient-radial from-caribbean-green via-caribbean-green/30 via-35% to-caribbean-green/0 to-70%"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-168 -bottom-[36rem] -right-[80%] bg-gradient-radial from-skobeloff via-skobeloff/40 via-35% to-skobeloff/0 to-70%"}/>
                    </div>
                    {/* Third section "OFRECEMOS TERAPIAS / MEDICINA REGENERATIVA" */}
                </div>
                {/*End of the gradient thing*/}

                <section
                    className={"relative flex flex-col items-center lg:items-start justify-start gap-4 h-[38rem] lg:pt-44 lg:h-[39rem] xl:h-168 2xl:h-[46rem] w-full lg:px-24 xl:px-52 2xl:px-72 z-10 lg:pain-clinic-intro-clip-lg xl:pain-clinic-intro-clip-xl lg:bg-white"}>
                    <Image src={"/images/services/painClinic/whiteCurve.svg"} alt={""} width={280} height={280}
                           className={"absolute -top-32 -right-24 z-0 lg:hidden"}/>
                    <Image src={"/images/services/painClinic/doctorEcho.png"} alt={""} width={956} height={637}
                           className={"scale-[1.6] lg:scale-y-[0.625] lg:-scale-x-[0.625] xl:-scale-x-[0.8] xl:scale-y-[0.8] -left-10 xl:-right-44 2xl:-right-36 absolute bottom-0 lg:bottom-auto lg:-top-10 lg:left-auto lg:-right-52 opacity-60 lg:opacity-50 xl:opacity-80"}/>
                    <Image src={"/images/services/painClinic/blueUpsideDownCurve.svg"} alt={""} width={420}
                           height={420}
                           className={"absolute -bottom-14 left-1/2 -translate-x-1/2 z-0 scale-125 scale-y-[1.6] lg:hidden"}/>
                    <Image src={"/images/services/painClinic/lightGreenCurve.svg"} alt={""} width={1920} height={1920}
                           className={"hidden lg:inline-block absolute top-0 z-0 scale-125 scale-x-[.9] xl:scale-x-75 xl:scale-y-[0.9] left-0 xl:left-32"}/>
                    <span
                        className={"hidden lg:block lg:absolute lg:rounded-full lg:aspect-square lg:h-168 lg:bg-gradient-radial lg:from-viridian-green lg:via-viridian-green/40 lg:via-55% lg:to-skobeloff/0 lg:to-90% lg:left-auto lg:translate-x-0 lg:-right-64 lg:top-56 lg:blur-xl z-0"}/>
                    <span
                        className={"hidden lg:block lg:absolute lg:aspect-square lg:rounded-full lg:h-144 lg:bg-gradient-radial lg:from-caribbean-green/80 lg:via-caribbean-green/10 lg:via-75% lg:to-white/0 lg:to-80% lg:-left-64 lg:-bottom-64 blur-xl z-0"}/>
                    <Image src={"/images/services/painClinic/skobeloffCurve.svg"} alt={""} width={1920} height={1920}
                           className={"hidden lg:block absolute lg:bottom-5 left-0 scale-x-125 -scale-y-[.95] lg:-rotate-[1.5deg] xl:-scale-y-[1.2] 2xl:-scale-y-[.85] xl:bottom-10 xl:rotate-[0.5deg] 2xl:rotate-[0.025deg] 2xl:bottom-6"}/>
                    <div
                        className={"relative flex flex-col items-center lg:items-start justify-start lg:w-136 lg:gap-8 lg:z-10 xl:w-168"}>
                        <h2 className={"lg:-ml-4 relative text-[2.7rem] leading-[0.8] lg:text-6xl font-black text-skobeloff lg:text-rich-black xl:text-7xl"}>&nbsp;{strings.services.painClinic.intro.headline}&nbsp;
                            <br className={"hidden lg:inline-block"}/>&nbsp;
                            <span
                                className={"text-5xl lg:text-7xl xl:text-8xl text-rich-black lg:text-caribbean-green"}>{strings.services.painClinic.intro.remark}</span>
                        </h2>
                        <p className={"relative text-lg lg:text-xl xl:text-2xl font-normal text-center lg:text-start text-rich-black"}>{strings.services.painClinic.intro.copy}</p>
                    </div>
                </section>
                <section
                    className={"relative flex flex-col items-center lg:items-start justify-start gap-6 text-lg lg:text-xl xl:text-2xl font-normal text-center lg:text-start text-rich-black z-10 lg:px-[9.8rem] xl:px-52 2xl:px-72 box-border"}>
                    <p className={"relative"}>{strings.services.painClinic.types.intro}</p>
                    <p className={"relative"}>{strings.services.painClinic.types.articular}</p>
                    <p className={"relative"}>{strings.services.painClinic.types.neural}</p>
                    <p className={"relative"}>{strings.services.painClinic.types.oncological}</p>
                </section>
                <section
                    className={"relative flex flex-col items-center lg:items-start justify-start gap-8 text-lg xl:text-xl font-normal text-center lg:text-start text-rich-black lg:z-0 lg:w-full lg:px-44 xl:px-52 2xl:px-72 box-border xl:mt-36"}>
                    <Image src={"/images/services/painClinic/glovesMolecules.png"} alt={""} width={1370} height={888}
                           quality={100}
                           className={"scale-[2.25] -left-[5.25rem] absolute bottom-[8.75rem] lg:bottom-10 opacity-60 lg:opacity-50 2xl:opacity-60 z-0 lg:-left-20 lg:scale-[1.35] xl:scale-[1.125] xl:left-1/2 xl:-translate-x-1/2"}/>
                    <Image src={"/images/services/painClinic/bloodSampleShaker.png"} alt={""} width={1441} height={759}
                           className={"scale-[2.125] right-32 absolute -bottom-80 opacity-30 z-0 lg:-bottom-[26rem] lg:scale-[1.125] lg:right-0 lg:opacity-[0.15] 2xl:opacity-[0.25] xl:scale-[1.069] xl:right-1/2 xl:translate-x-1/2 xl:-bottom-[38rem]"}/>
                    <span className={"hidden 2xl:block 2xl:absolute 2xl:h-424 2xl:-top-[44rem] left-0  2xl:w-[55vw] 2xl:bg-gradient-to-r 2xl:from-white from-25%"}/>
                    <span className={"hidden 2xl:block 2xl:absolute 2xl:h-424 2xl:-top-[44rem] right-0 2xl:w-[55vw] 2xl:bg-gradient-to-l 2xl:from-white from-25%"}/>
                    <span
                        className={"hidden lg:block lg:absolute lg:aspect-square lg:rounded-full lg:h-[86rem] lg:bg-gradient-radial lg:from-viridian-green/90 lg:via-viridian-green/20 lg:via-75% lg:to-white/0 lg:to-80% lg:-left-24 xl:left-20 lg:bottom-[34rem] xl:bottom-[44rem] blur-xl z-0"}/>
                    <span
                        className={"hidden xl:block xl:absolute xl:aspect-square xl:rounded-full xl:h-136 xl:bg-gradient-radial xl:from-viridian-green/30 xl:via-viridian-green/10 xl:via-75% xl:to-white/0 xl:to-80% xl:-right-52 xl:bottom-[48rem] blur-xl z-0"}/>
                    <span
                        className={"hidden xl:block xl:absolute xl:aspect-square xl:rounded-full xl:h-168 xl:bg-gradient-radial xl:from-neutral-200/30 xl:via-neutral-100/10 xl:via-75% xl:to-white/0 xl:to-80% xl:-right-32 xl:bottom-[48rem] blur-xl z-0"}/>
                    <span
                        className={"hidden lg:block lg:absolute lg:aspect-square lg:rounded-full lg:h-144 lg:bg-gradient-radial lg:from-caribbean-green/70 lg:via-caribbean-green/10 lg:via-75% lg:to-white/0 lg:to-80% lg:-left-52 lg:bottom-[32rem] xl:bottom-[38rem] xl:-left-60 blur-xl z-0"}/>
                    <h2 className={"relative text-3xl lg:text-6xl xl:text-7xl font-black lg:text-caribbean-green"}>{strings.services.painClinic.therapy.title}<br/><span
                        className={"lg:text-5xl xl:text-6xl lg:text-rich-black"}>{strings.services.painClinic.therapy.remark}</span>
                    </h2>
                    <ul className={"relative list-disc mx-9 flex flex-col items-start text-start"}>
                        {strings.services.painClinic.therapy.items.map((p: JSX.Element, i: number) => {
                            return (
                                <li key={`therapy${i}`}>{p}</li>
                            );
                        })}
                    </ul>
                    <span
                        className={"hidden lg:block lg:absolute lg:aspect-square lg:rounded-full lg:h-168 lg:bg-gradient-radial lg:from-viridian-green/80 lg:via-viridian-green/10 lg:via-75% lg:to-white/0 lg:to-80% lg:-right-[22rem] lg:-bottom-80 blur-xl z-0"}/>
                </section>
                <section
                    className={"relative flex flex-col items-center lg:items-start justify-start gap-8 text-lg xl:text-xl font-normal text-center lg:text-start text-rich-black lg:w-full lg:px-44 xl:px-52 2xl:px-72 xl:mb-28"}>
                    <span className={"hidden lg:block lg:absolute lg:aspect-square lg:h-192 lg:right-0 lg:-bottom-36 lg:bg-gradient-to-tl lg:from-caribbean-green/50 lg:via-caribbean-green/10 lg:via-45% lg:to-white/0 lg:to-55% lg:blur-xl"}/>
                    <span className={"hidden xl:block xl:absolute xl:aspect-square xl:h-136 xl:left-0 xl:-bottom-36 xl:bg-gradient-to-tr xl:from-caribbean-green/40 xl:via-caribbean-green/10 xl:via-45% xl:to-white/0 xl:to-55% xl:blur-3xl"}/>
                    <span
                        className={"hidden lg:block lg:absolute lg:rounded-full lg:w-[60rem] lg:h-256 xl:aspect-square xl:h-320 lg:bg-gradient-radial lg:from-viridian-green lg:via-viridian-green/40 lg:via-65% xl:via-45% lg:to-white/0 lg:to-80% lg:-right-72 lg:-bottom-[58rem] xl:-right-24 xl:-bottom-[68rem] blur-lg z-0"}/>
                    <h2 className={"relative text-3xl font-black lg:text-5xl xl:text-6xl"}>{strings.services.painClinic.regenerative.title}<br/><span
                        className={"lg:text-6xl xl:text-7xl lg:text-caribbean-green"}>{strings.services.painClinic.regenerative.remark}</span>
                    </h2>
                    <ul className={"list-disc mx-9 flex flex-col items-start text-start"}>
                        {strings.services.painClinic.regenerative.items.map((p: JSX.Element, i: number) => {
                            return (
                                <li key={`regen${i}`}>{p}</li>
                            );
                        })}
                    </ul>
                </section>
            </article>
            <Footer/>
        </main>
    );
}

export default ClinicaDelDolor;