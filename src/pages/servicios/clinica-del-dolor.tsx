import {NextPage} from "next";
import Head from "next/head";
import Navbar from "../../components/ui/Navbar";
import React from "react";
import {strings} from "../../model/strings";
import Footer from "../../components/Footer";

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
            <article className={"flex flex-col items-center justify-center py-40 box-border px-4 gap-20"}>
                <section className={"relative flex flex-col items-center justify-start gap-4"}>
                    <h2 className={"text-[2.7rem] leading-[0.8] font-black text-skobeloff"}>&nbsp;{strings.services.painClinic.intro.headline}&nbsp;&nbsp;
                        <span className={"text-5xl text-rich-black"}>{strings.services.painClinic.intro.remark}</span>
                    </h2>
                    <p className={"text-lg font-semibold text-center text-rich-black"}>{strings.services.painClinic.intro.copy}</p>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-lg font-base text-center text-rich-black"}>
                    <p>{strings.services.painClinic.types.intro}</p>
                    <p>{strings.services.painClinic.types.articular}</p>
                    <p>{strings.services.painClinic.types.neural}</p>
                    <p>{strings.services.painClinic.types.oncological}</p>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-lg font-base text-center text-rich-black"}>
                    <h2 className={"text-3xl font-black"}>{strings.services.painClinic.therapy.title}</h2>
                    <ul className={"list-disc mx-9 flex flex-col items-start text-start"}>
                        {strings.services.painClinic.therapy.items.map((p : JSX.Element, i : number) => {
                            return (
                                <li key={`therapy${i}`}>{p}</li>
                            );
                        })}
                    </ul>
                </section>
                <section
                    className={"relative flex flex-col items-center justify-start gap-8 text-lg font-base text-center text-rich-black"}>
                    <h2 className={"text-3xl font-black"}>{strings.services.painClinic.regenerative.title}</h2>
                    <ul className={"list-disc mx-9 flex flex-col items-start text-start"}>
                        {strings.services.painClinic.regenerative.items.map((p : JSX.Element, i : number) => {
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