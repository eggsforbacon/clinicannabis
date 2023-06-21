import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import {ServiceCard} from "../../ServiceCard";
import Link from "next/link";
import {SwiperCarousel} from "../../SwiperCarousel";
import React from "react";

export const Services = () => {
    const {width: wWidth} = useWindowDimensions();
    const serviceImageStyle = "absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full";
    const linkStyle = "lg:text-transparent flex flex-col text-center gap-4 items-center justify-center relative z-10 w-full h-full lg:bg-transparent transition duration-300 lg:hover:text-white text-[1.75rem] leading-[1] text-white lg:focus:text-white lg:hover:bg-dark-green/70 lg:hover:cursor-pointer lg:focus:bg-black/25 bg-black/60";
    const servicesBgs = [
        "bg-[url('/images/hero/1.webp')]",
        "bg-[url('/images/hero/2.webp')]",
        "bg-[url('/images/hero/3.webp')]",
        "bg-[url('/images/hero/4.webp')]",
    ];

    // const servicesTitles = [
    //     <>{"Cannabis"}<br/>{"Medicinal"}</>, <>{"Medicina"}<br/>{"Funcional"}</>, <>{"Sueros"}<br/>{"Terapéuticos"}</>, <>{"Sistema"}<br/>{"Súper Inductivo"}</>
    // ];

    const servicesTitles = [
        "Cannabis Medicinal", "Medicina Funcional", "Sueros Terapéuticos", <>{"Sistema"}<br/>{"Súper Inductivo"}</>
    ]

    const serviceLinks = [
        "/services#medicinal-cannabis",
        "/services#functional-medicine",
        "/services#serums",
        "/services#sis",
    ]

    const serviceCards = [
        <ServiceCard name={servicesTitles[0]} to={serviceLinks[0]} url={servicesBgs[0]} interaction={"Descubre"}
                     bgPos={"bg-[right_-34rem_top_-12rem] bg-[length:1360px_auto]"} index={0}/>,
        <ServiceCard name={servicesTitles[1]} to={serviceLinks[1]} url={servicesBgs[1]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:1060px_auto]"} index={1}/>,
        <ServiceCard name={servicesTitles[2]} to={serviceLinks[2]} url={servicesBgs[2]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:960px_auto]"} index={2}/>,
        <ServiceCard name={servicesTitles[3]} to={serviceLinks[3]} url={servicesBgs[3]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:900px_auto]"} index={3}/>,
    ];

    if (wWidth > 768) {
        return (
            <ul className={"z-10 h-72 flex justify-center gap-2 w-full hero-clip bg-white overflow-clip"}>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={"/services#medicinal-cannabis"}>{servicesTitles[0]}</Link>
                    <section
                        className={`${servicesBgs[0]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={"/services#functional-medicine"}>{servicesTitles[1]}</Link>
                    <section
                        className={`${servicesBgs[1]} bg-[600px_auto] bg-[center_top_-2rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={"/services#serums"}>{servicesTitles[2]}</Link>
                    <section className={`${servicesBgs[2]}  ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={"/services#sis"}>{servicesTitles[3]}</Link>
                    <section
                        className={`${servicesBgs[3]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                {/*<li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>*/}
                {/*    <Link className={linkStyle} href={"/experience"}>Centro de Experiencia</Link>*/}
                {/*    <section className={`bg-[url('/images/hero/5.png')] ${serviceImageStyle}`}>*/}
                {/*    </section>*/}
                {/*</li>*/}
            </ul>
        );
    } else {
        return (
            <section className={"w-full relative"}>
                <SwiperCarousel items={serviceCards} delay={6000} auto pagination/>
            </section>
        )
    }

}