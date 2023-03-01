import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {MedicalCannabis} from "../components/content/services/MedicalCannabis";
import {SIS} from "../components/content/services/SIS";
import {Serums} from "../components/content/services/Serums";
import {FunctionalMedicine} from "../components/content/services/FunctionalMedicine";
import {Experience} from "../components/content/services/Experience";
import Head from "next/head";
import React from "react";

const Services : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Nuestros Servicios</title>
                <meta name={"description"}
                      content={"En Clinicannabis cumplimos con los requisitos normativos para satisfacer las expectativas y necesidades de nuestros grupos de interés."}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"services"} />
            <MedicalCannabis />
            <SIS />
            <Serums />
            <FunctionalMedicine />
            <Experience />
            <Footer />
        </main>
    );
}

export default Services;