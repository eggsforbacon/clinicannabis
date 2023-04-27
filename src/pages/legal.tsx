import {NextPage} from "next";
import Navbar from "../components/Navbar";
import {Link as ScrollLink} from "react-scroll/modules";
import {strings} from "../model/strings";
import Head from "next/head";
import React from "react";

const Legal: NextPage = () => {

    const navigation = strings.legal.navigation;
    const content = strings.legal.content;

    const linkStyle = "hover:cursor-pointer";
    const lih2 = "text-2xl font-bold uppercase mt-10";
    const pStyle = "mt-3";
    const lih3 = "text-xl font-bold uppercase my-4";
    return (
        <main>
            <Head>
                <title>Tratamiento de Datos</title>
                <link rel="icon" href="/favicon.ico"/>
                {/*<meta name={"description"}*/}
                {/*      content={""}/>*/}
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={""}/>
            <section className={"md:ml-8 w-full"}>
                <article className={"flex flex-col items-center space-y-16 py-52"}>
                    <section className={"flex flex-col text-rich-black items-center justify-center gap-2"}>
                        <h1 className={"font-bold text-5xl text-center"}>{strings.legal.title}</h1>
                        <p className={"text-xs font-base"}>{strings.legal.update}</p>
                        <p className={"text-xs font-base"}>{strings.legal.version}</p>
                    </section>
                    <section
                        className={"relative flex flex-col md:flex-row items-center md:items-start justify-around h-full w-full md:w-[90%]"}>
                        <aside
                            className={"nested text-center md:text-left mb-16 sticky left-0 top-10 py-8 pr-10 shadow-md md:shadow-none border-solid border-2 border-transparent border-b-viridian-green md:border-b-transparent md:p-0 bg-white md:top-52 w-full md:w-56 flex justify-center items-center md:flex-col md:justify-start md:items-start space-y-2"}>
                            <ol className={"relative list-decimal"}>
                                <li className={linkStyle}>
                                    <ScrollLink to="objective" spy={true}
                                                duration={1200}
                                                offset={-150}>{navigation.objective}</ScrollLink>
                                </li>
                                <li className={linkStyle}>
                                    <ScrollLink to="liable" spy={true}
                                                duration={1200}
                                                offset={-150}>{navigation.liable}</ScrollLink></li>
                                <li className={linkStyle}>
                                    <ScrollLink to="definitions" spy={true}
                                                duration={1200}
                                                offset={-150}>{navigation.definitions.title}</ScrollLink>
                                </li>
                                <li className={linkStyle}>
                                    <ScrollLink to="general" spy={true}
                                                duration={1200}
                                                offset={-150}>{navigation.general}</ScrollLink>
                                </li>
                                <li className={linkStyle}>
                                    <ScrollLink to="elaboration" spy={true}
                                                duration={1200}
                                                offset={-150}>{navigation.elaboration.title}</ScrollLink>
                                </li>
                            </ol>
                        </aside>
                        <article className={"text-lg flex flex-col items-center w-4/6 justify-start -mt-10 gap-16"}>
                            <ol className={"list-decimal"}>
                                <li className={lih2} id={"objective"}><h2>{navigation.objective}</h2></li>
                                <p className={pStyle}>{content.objective}</p>
                                <li className={lih2} id={"liable"}><h2>{navigation.liable}</h2></li>
                                <p className={pStyle}>{content.liable.paragraph}</p>
                                <ul className={"list-disc ml-10 flex flex-col items-start justify-start gap-3 mt-4"}>
                                    <li>{content.liable.pbx}</li>
                                    <li>{content.liable.phone}</li>
                                    <li>{content.liable.mail}</li>
                                </ul>
                                <p className={pStyle}>{content.liable.post}</p>
                                <li className={lih2} id={"definitions"}><h2>{navigation.definitions.title}</h2></li>
                                <ul className={"list-disc ml-10 flex flex-col items-start justify-start gap-3"}>
                                    <li className={"mt-4"}>
                                        <strong>{navigation.definitions.auth}:</strong> {content.definitions.auth}</li>
                                    <li>
                                        <strong>{navigation.definitions.database}:</strong> {content.definitions.database}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.personal}:</strong> {content.definitions.personal}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.semiPrivate}:</strong> {content.definitions.semiPrivate}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.sensitive}:</strong> {content.definitions.sensitive}
                                    </li>
                                    <li><strong>{navigation.definitions.private}:</strong> {content.definitions.private}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.underage}:</strong> {content.definitions.underage}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.inCharge}:</strong> {content.definitions.inCharge}
                                    </li>
                                    <li><strong>{navigation.definitions.habeas}:</strong> {content.definitions.habeas}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.responsible}:</strong> {content.definitions.responsible}
                                    </li>
                                    <li><strong>{navigation.definitions.holder}:</strong> {content.definitions.holder}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.treatment}:</strong> {content.definitions.treatment}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.legality}:</strong> {content.definitions.legality}
                                    </li>
                                    <li><strong>{navigation.definitions.purpose}:</strong> {content.definitions.purpose}
                                    </li>
                                    <li><strong>{navigation.definitions.freedom}:</strong> {content.definitions.freedom}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.veracity}:</strong> {content.definitions.veracity}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.transparency}:</strong> {content.definitions.transparency}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.restriction}:</strong> {content.definitions.restriction}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.security}:</strong> {content.definitions.security}
                                    </li>
                                    <li>
                                        <strong>{navigation.definitions.confidentiality}:</strong> {content.definitions.confidentiality}
                                    </li>
                                </ul>
                                <li className={lih2} id={"general"}><h2>{navigation.general}</h2></li>
                                <ul className={"list-disc ml-10 mt-4 flex flex-col items-center justify-start gap-3"}>
                                    {Object.values(content.general).map((s) => <li>{s as unknown as JSX.Element}</li>)}
                                </ul>
                                <li className={lih2} id={"elaboration"}><h2>{navigation.elaboration.title}</h2></li>
                                <ol className={"ml-5"}>
                                    <li className={lih3}><h3>{navigation.elaboration.content}</h3></li>
                                    <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.content).map((s) =>
                                            <p>{s as unknown as JSX.Element}</p>)}
                                    </section>
                                    <li className={lih3}><h3>{navigation.elaboration.treatment}</h3></li>
                                    <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.treatment).map((s) =>
                                            <p>{s as unknown as JSX.Element}</p>)}
                                    </section>
                                    <li className={lih3}><h3>{navigation.elaboration.purpose}</h3></li>
                                    <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.purpose).map((s, index) => {
                                            if (index !== 4) return <p>{s as unknown as JSX.Element}</p>
                                            else {
                                                return (
                                                    <>
                                                        <p>{(s as { [key: string]: JSX.Element, }).intro}</p>
                                                        <ol className={"arrow-list ml-4 flex flex-col items-start justify-start gap-3"}>
                                                            {
                                                                Object.values(s as unknown as object).map((e, i) => {
                                                                    if (i !== 0) return (
                                                                        <li>{e as unknown as JSX.Element}</li>
                                                                    );
                                                                    return <></>
                                                                })
                                                            }
                                                        </ol>
                                                    </>
                                                )
                                            }
                                        })}
                                    </section>
                                    <li className={lih3}><h3>{navigation.elaboration.auth}</h3></li>
                                    <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.auth).map((s) =>
                                            <p>{s as unknown as JSX.Element}</p>)}
                                    </section>
                                    <li className={lih3}><h3>{navigation.elaboration.rights}</h3></li>
                                    <ol className={"list-decimal flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.rights).map((s, index) => {
                                            if (index !== 0) return (
                                                <li className={"ml-8"}>{s as unknown as JSX.Element}</li>
                                            );
                                            return <p>{s as unknown as JSX.Element}</p>
                                        })}
                                    </ol>
                                    <li className={lih3}><h3>{navigation.elaboration.responsible}</h3></li>
                                    <ol className={"list-decimal flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.responsible).map((s, index) => {
                                            if (index !== 0) return (
                                                <li className={"ml-8"}>{s as unknown as JSX.Element}</li>
                                            );
                                            return <p>{s as unknown as JSX.Element}</p>
                                        })}
                                    </ol>
                                    <li className={lih3}><h3>{navigation.elaboration.inCharge}</h3></li>
                                    <ol className={"list-decimal flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.inCharge).map((s, index) => {
                                            if (index !== 0) return (
                                                <li className={"ml-8"}>{s as unknown as JSX.Element}</li>
                                            );
                                            return <p>{s as unknown as JSX.Element}</p>
                                        })}
                                    </ol>
                                    <li className={lih3}><h3>{navigation.elaboration.procedures.title}</h3></li>
                                    <ol className={"ml-5"}>
                                        <li><h4
                                            className={"text-xl font-bold"}>{navigation.elaboration.procedures.questions}</h4>
                                        </li>
                                        <p className={"mt-4 mb-3"}>{content.elaboration.procedures.questions}</p>
                                        <li><h4
                                            className={"text-xl font-bold"}>{navigation.elaboration.procedures.demands}</h4>
                                        </li>
                                        <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                            {Object.values(content.elaboration.procedures.demands).map((s, index) => {
                                                return <p key={`p${index}`}>{s as unknown as JSX.Element}</p>
                                            })}
                                        </section>
                                        <p className={"mt-4 mb-3"}>
                                            <strong>NOTA: </strong>{content.elaboration.procedures.note}</p>
                                    </ol>
                                    <li className={lih3}><h3>{navigation.elaboration.validity}</h3></li>
                                    <section className={"flex flex-col items-start justify-start gap-3 mt-4"}>
                                        {Object.values(content.elaboration.validity).map((s, index) => {
                                            return <p key={`p${index}`}>{s as unknown as JSX.Element}</p>
                                        })}
                                    </section>
                                    <li className={lih3}><h3>{navigation.elaboration.channels}</h3></li>
                                    <p className={"mt-4 mb-3"}>{content.elaboration.channels.intro}</p>
                                    <ul className={"ml-4 dashed flex flex-col items-start justify-start gap-3"}>
                                        {Object.values(content.elaboration.channels).map((c, index) => {
                                            if (index !== 0) return <li
                                                key={`channel${index}`}>{c as unknown as JSX.Element}</li>
                                        })}
                                    </ul>
                                </ol>
                            </ol>
                        </article>
                    </section>
                </article>
            </section>
        </main>
    )
        ;
}

export default Legal;