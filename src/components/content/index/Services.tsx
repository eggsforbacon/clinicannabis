import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import {ServiceCard} from "../../ServiceCard";
import Link from "next/link";
import {SwiperCarousel} from "../../SwiperCarousel";
import React from "react";

export const Services = () => {
    const {width: wWidth} = useWindowDimensions();
    const serviceImageStyle = "absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full";
    const linkStyle = "lg:text-transparent flex flex-col text-center gap-4 items-center justify-center relative z-10 w-full h-full lg:bg-transparent transition duration-300 lg:hover:text-white text-[1.75rem] leading-[1] text-white lg:focus:text-white lg:hover:bg-dark-green/70 lg:hover:cursor-pointer lg:focus:bg-black/25 bg-black/60";

    const servicesTitles = [
        "Cannabis Medicinal", "Medicina Funcional", "Sueros Terapéuticos", <>{"Sistema"}<br/>{"Súper Inductivo"}</>, <>{"Clínica del"}<br/><span className={"text-caribbean-green md:text-inherit"}>{"Dolor"}</span></>,
    ];

    const servicesBgs = [
        "bg-[url('/images/landing/curve-cards/1.webp')]",
        "bg-[url('/images/landing/curve-cards/2.webp')]",
        "bg-[url('/images/landing/curve-cards/3.webp')]",
        "bg-[url('/images/landing/curve-cards/4.webp')]",
        "bg-[url('/images/landing/curve-cards/5.webp')]",
    ];

    const serviceLinks = [
        "/servicios#medicinal-cannabis",
        "/servicios#functional-medicine",
        "/servicios#serums",
        "/servicios#sis",
        "/servicios#pain",
    ];

    const servicePositions: [string, string][] = [
        ["bg-[right_-34rem_top_-12rem] bg-[length:1360px_auto]", "bg-[right_-30rem_top_-12rem] bg-[length:1360px_auto]"],
        ["bg-[right_-24rem_top] bg-[length:1060px_auto]", "bg-[right_-18rem_top] bg-[length:1080px_auto]"],
        ["bg-[right_-20rem_top] bg-[length:960px_auto]", "bg-[right_-16rem_top] bg-[length:1020px_auto]"],
        ["bg-[right_-22rem_top] bg-[length:990px_auto]", "bg-[right_-18rem_top] bg-[length:1080px_auto]"],
        ["bg-[left_-2rem_top] bg-[length:460px_auto]", "bg-[right_-18rem_top] bg-[length:1080px_auto]"],
    ];

    const serviceCards = servicesTitles.map(
        (title, index) => {
        return (
            <ServiceCard name={title} to={serviceLinks[index]} background={servicesBgs[index]}
                         interaction={"Descubre"} index={index}
                         bgPos={wWidth > 640 ? servicePositions[index][1] : servicePositions[index][0]}/>
        );
    });

    if (wWidth > 768) {
        return (
            <ul className={"z-10 h-72 flex justify-center gap-2 w-full hero-clip bg-white overflow-clip"}>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={serviceLinks[0]}>{servicesTitles[0]}</Link>
                    <section
                        className={`${servicesBgs[0]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={serviceLinks[1]}>{servicesTitles[1]}</Link>
                    <section
                        className={`${servicesBgs[1]} bg-[600px_auto] bg-[center_top_-2rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={serviceLinks[2]}>{servicesTitles[2]}</Link>
                    <section className={`${servicesBgs[2]}  ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={serviceLinks[3]}>{servicesTitles[3]}</Link>
                    <section
                        className={`${servicesBgs[3]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                    </section>
                </li>
                <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                    <Link className={linkStyle} href={serviceLinks[4]}>{servicesTitles[4]}</Link>
                    <section
                        className={`${servicesBgs[4]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                    </section>
                </li>
            </ul>
        );
    } else {
        return (
            <section className={"w-screen relative"}>
                <SwiperCarousel items={serviceCards} delay={6000} pagination navigation/>
            </section>
        )
    }

}