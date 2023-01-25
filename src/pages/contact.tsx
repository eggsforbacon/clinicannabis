import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import {strings} from "../accessibility/strings";
import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import {Map} from "../components/content/contact/Map";
import {ContactForm} from "../components/content/contact/ContactForm";

const Contact: NextPage = () => {

    return (
        <main>
            <Head>
                <title>Contáctanos</title>
                <meta name={"description"}
                      content={"¿Quieres descubrir por qué somos la mejor alternativa para tratar el dolor? Contáctanos, estás en las mejores manos"}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"contact"}/>
            <article className={"flex items-center justify-center"}>
                <section className={"z-10 p-16 flex items-center justify-around w-full rounded-2xl shadow-lg bg-neutral-50 h-256 mx-16 mt-8 mb-32"}>
                    <ContactForm />
                    <Map />
                </section>
            </article>
            <Footer/>
        </main>
    );
}

export default Contact;