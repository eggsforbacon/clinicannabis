import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import {strings} from "../model/strings";
import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import {Map} from "../components/content/contact/Map";
import {ContactForm} from "../components/content/contact/ContactForm";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Image from "next/image";
import Link from "next/link";

const Contact: NextPage = () => {

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <main>
                <Head>
                    <title>Contáctanos</title>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name={"description"}
                          content={"¿Quieres descubrir por qué somos la mejor alternativa para tratar el dolor? Contáctanos, estás en las mejores manos."}/>
                    <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
                </Head>
                <Navbar selection={"contact"} />
                <article className={"flex items-center justify-center relative pt-16"}>
                    <Image src={"/images/contact/background.png"} alt={""} quality={100} width={1920} height={1080}
                           className={"brightness-[45%] scale-[5] lg:scale-100 absolute z-0 top-1/3 -left-10 lg:top-0 lg:left-0"}/>
                    <section
                        className={"z-10 pt-16 lg:py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center justify-between w-full"}>
                        <section className={"flex flex-col items-center lg:items-start justify-center gap-8 text-neutral-200 lg:w-112"}>
                            <h1 className={"font-black text-white text-5xl lg:text-8xl"}>{strings.contact.headline}</h1>
                            <p className={"text-center lg:text-left text-xl lg:text-3xl font-normal"}>{strings.contact.copy}</p>
                            <Link href={"/"}>
                                <Image className={"hidden lg:block -ml-12"} src={"/images/svg/clinic_white.svg"} alt={""} width={560} height={560} />
                            </Link>
                        </section>
                        <ContactForm/>
                        {/*<Map/>*/}
                    </section>
                </article>
                <Footer/>
            </main>
        </GoogleReCaptchaProvider>
    );
}

export default Contact;