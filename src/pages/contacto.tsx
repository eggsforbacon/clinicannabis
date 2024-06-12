import {NextPage} from "next";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Head from "next/head";
import {strings} from "../model/strings";
import React from "react";
import {ContactForm} from "../components/content/contact/ContactForm";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../public/images/contacto/background.png";

const Contacto: NextPage = () => {

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
            container={{
                parameters: {
                    badge: "inline",
                }
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
                <article className={"flex items-center justify-center relative py-16"}>
                    <Image src={bgImage} alt={""} quality={100} loading={"lazy"} placeholder={"blur"}
                           className={"brightness-[45%] scale-[5] lg:scale-100 absolute z-0 top-1/3 -left-10 lg:top-0 lg:left-0"}/>
                    <section
                        className={"z-10 pt-16 lg:py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center justify-between w-full"}>
                        <section className={"flex flex-col items-center lg:items-start justify-center gap-8 text-neutral-200 lg:w-100"}>
                            <h1 className={"font-black text-white text-5xl lg:text-8xl"}>{strings.contact.headline}</h1>
                            <p className={"text-center lg:text-left text-xl lg:text-3xl font-normal"}>{strings.contact.copy}</p>
                        </section>
                        <ContactForm/>
                        {/*<Map/>*/}
                    </section>
                </article>
                <Link href={"/"}>
                    <Image className={"lg:block hidden absolute top-4 left-24"} src={"/images/icons/clinivital-04.png"} alt={""} width={560*.6} height={560*.6} />
                </Link>
                <Footer/>
            </main>
        </GoogleReCaptchaProvider>
    );
}

export default Contacto;