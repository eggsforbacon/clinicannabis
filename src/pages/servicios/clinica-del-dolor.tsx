import {NextPage} from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import {strings} from "../../model/strings";
import Navbar from "../../components/Navbar";

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
                className={"flex flex-col items-center justify-center pt-32 pb-36 box-border px-4 gap-20 relative"}>
                <div
                    className={"absolute h-full w-full top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"}> {/* The gradient thing*/}
                    <div className={"relative w-full h-168"}>
                        <span
                            className={"w-full h-full bg-gradient-to-b from-viridian-green/70 absolute top-0 right-0"}/>
                        <span
                            className={"absolute rounded-full aspect-square h-168 -top-[22rem] left-1/2 -translate-x-1/2 bg-gradient-radial from-skobeloff via-skobeloff/30 via-45% to-skobeloff/0 to-70%"}/>
                        <span
                            className={"absolute aspect-square rounded-full h-136 -right-[60%] bg-gradient-radial from-caribbean-green via-caribbean-green/20 via-35% to-skobeloff/0 to-45%"}/>
                        <span
                            className={"absolute aspect-square w-168 -right-[60%] bg-gradient-to-tl from-caribbean-green/60 via-caribbean-green/30 via-45%"}/>
                        <span className={"absolute h-full w-full bg-gradient-to-tr from-neutral-100/80 from-35%"}/>
                    </div>
                    {/* First section "QUÉ ES EL DOLOR CRÓNICO" */}
                    <div className={"relative w-full h-[36rem]"}>
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
                    <div className={"relative w-full h-[38rem]"}>
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

                <section className={"relative flex flex-col items-center justify-start gap-4 h-[38rem]"}>
                    <Image src={"/images/servicios/painClinic/whiteCurve.svg"} alt={""} width={280} height={280}
                           className={"absolute -top-32 -right-24 z-0"}/>
                    <h2 className={"text-[2.7rem] leading-[0.8] font-black text-skobeloff"}>&nbsp;{strings.services.painClinic.intro.headline}&nbsp;&nbsp;
                        <span className={"text-5xl text-rich-black"}>{strings.services.painClinic.intro.remark}</span>
                    </h2>
                    <p className={"text-lg font-semibold text-center text-rich-black"}>{strings.services.painClinic.intro.copy}</p>
                    <Image src={"/images/servicios/painClinic/doctorEcho.png"} alt={""} width={956} height={637}
                           className={"scale-[1.6] -left-10 absolute bottom-0 opacity-60"}/>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-6 text-lg font-base text-center text-rich-black z-10"}>
                    <p>{strings.services.painClinic.types.intro}</p>
                    <p>{strings.services.painClinic.types.articular}</p>
                    <p>{strings.services.painClinic.types.neural}</p>
                    <p>{strings.services.painClinic.types.oncological}</p>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-lg font-base text-center text-rich-black"}>
                    <Image src={"/images/servicios/painClinic/glovesMolecules.png"} alt={""} width={1370} height={888}
                           className={"scale-[2.25] -left-[5.25rem] absolute bottom-[8.75rem] opacity-60 z-0"}/>
                    <h2 className={"relative text-3xl font-black"}>{strings.services.painClinic.therapy.title}</h2>
                    <ul className={"relative list-disc mx-9 flex flex-col items-start text-start"}>
                        {strings.services.painClinic.therapy.items.map((p: JSX.Element, i: number) => {
                            return (
                                <li key={`therapy${i}`}>{p}</li>
                            );
                        })}
                    </ul>
                    <Image src={"/images/servicios/painClinic/bloodSampleShaker.png"} alt={""} width={1441} height={759}
                           className={"scale-[2.125] right-32 absolute -bottom-80 opacity-30 z-0"}/>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-lg font-base text-center text-rich-black"}>
                    <h2 className={"text-3xl font-black"}>{strings.services.painClinic.regenerative.title}</h2>
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