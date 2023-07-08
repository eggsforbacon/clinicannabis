import {NextPage} from "next";
import Navbar from "../components/Navbar";
import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import {TestimonialSlide} from "../components/content/testimonials/TestimonialSlide";
import Image from "next/image";
import {SwiperCarousel} from "../components/SwiperCarousel";


const Testimonios: NextPage = () => {

    const testimonials = [
        <TestimonialSlide firstName={"Alexander"} lastName={"Ordóñez"} reel={"https://youtube.com/shorts/l4D3MyIRPXY"}
                          description={"Conoce el testimonio de Alexander Ordóñez, un paciente con múltiples fracturas en el pie izquierdo, que tuvo una pronta rehabilitación gracias a las terapias con el Sistema Súper Inductivo de Clinicannabis, el cual produce un campo electromagnético de 2.5 Tesla actuando sobre el tejido celular y acelerando los procesos de recuperación."}/>,
        <TestimonialSlide firstName={"Rosalba"} lastName={"Domínguez"} reel={"https://youtube.com/shorts/U4auWXfSX4E"}
                          description={"Nuestra paciente ha tomado medicamentos para la epilepsia desde sus 13 años de edad, sin encontrar una evolución significativa en su tratamiento. En Clinicannabis, nuestro equipo médico ha realizado un estudio integral, encontrando posibles alternativas para tratar su patología a través de formulación magistral de CBD y THC, con mejoría del sueño y mioclonías en remisión."}/>,
        <TestimonialSlide firstName={"Maria Angélica"} lastName={"Espitia"} reel={"https://youtu.be/mSs8-2qjrFE"}
                          description={"Maria Angélica Espitia es una paciente que sufrió una fractura de clavícula. siendo sometida a 3 procedimientos quirúrgicos sin éxito que le llevaron a desarrollar una pseudo artrosis. En Clinicannabis encontró alivio a su dolor e inflamación por medio de la formulación magistral a base de CBD y THC, terapias alternativas como terapia neural, Moxibustión, ventosa y sueroterapia. Además, esta paciente fue preparada para sus cirugías a través del Sistema Súper Inductivo que potencia el efecto reparador en el sistema muscular, óseo, nervioso y tegumentario. Este proceso se realizó bajo acompañamiento y cuidado de todo nuestro equipo médico."}/>,
        <TestimonialSlide firstName={"Maria Isabel"} lastName={"de Tinoco"}
                          reel={"https://youtube.com/shorts/d6503Pac6YY"}
                          description={"En Clinicannabis acompañamos a María Isabel en su proceso de sanación: una mujer que tras 4 años de padecer un fuerte dolor al sentarse, por fin recibió un diagnóstico. Tras estudios médicos y el asesoramiento de nuestro equipo especializado se descubrió un pinzamiento de nervio, abriendo la puerta a un proceso de recuperación."}/>,

    ];

    return (
        <main>
            <Head>
                <title>Testimonios de pacientes</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={""}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={""}/>
            <article className={"relative flex flex-col pt-52 items-center justify-start gap-6 lg:gap-32 overflow-x-clip"}>
                <Image src={"/images/testimonios/background.svg"} alt={""} height={1920} width={1920}
                       className={"absolute top-72 left-0 select-none z-0 scale-[7] lg:scale-100"}/>
                <Image src={"/images/testimonios/leaf.svg"} alt={""} height={1920} width={1920}
                       className={"absolute -bottom-[60%] left-0 select-none z-0"}/>
                <div className={"relative flex flex-col items-stretch justify-start gap-6"}>
                    <h2 className={"text-midnight-green font-black text-6xl lg:text-8xl text-center w-full"}>Testimonios</h2>
                    <p className={"text-lg lg:text-2xl text-neutral-700 text-center box-border px-6 lg:px-0 lg:w-208"}>Conoce aquí las experiencias de salud
                        de nuestros pacientes. Cada uno de ellos ha contado con la
                        experiencia de nuestro equipo médico para brindar una mejor calidad de vida.</p>
                </div>
                <section className={"relative flex flex-col items-center justify-center w-screen h-288"}>
                    <SwiperCarousel items={testimonials} delay={6000} pagination navigation loop />
                </section>
            </article>
            <Footer/>
        </main>
    );
}

export default Testimonios