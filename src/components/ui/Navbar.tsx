"use client";

import Image from "next/image";
import {strings} from "../../model/strings";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {List} from "../icons";

const _destinations = ["home", "services", "blog", "contact"] as const;
const _canonical = {
    "home": "/",
    "services": "/servicios",
    "experience": "/experiencia",
    "blog": "/blog",
    "contact": "/contacto",
}

type _CProps = {
    selection: typeof _destinations[number] | "",
    mode?: "shop"
}

const Navbar = (props: _CProps) => {


    const [open, setOpen] = useState(false); // Menu is open or closed
    const [show, setShow] = useState(true); // Navbar is visible or invisible
    const [lastScrollY, setLastScrollY] = useState(0); // Track scroll to show/hide

    const selected: string = "font-bold text-caribbean-green underline decoration-[3px] underline-offset-[12px]";
    const link: string = "font-semibold tracking-wide transition quartic-in-out duration-300 lg:hover:text-viridian-green lg:hover:-translate-y-1 focus:text-viridian-green";

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
                setOpen(false);
            } else {
                setShow(true);
                setOpen(false);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
        }
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const expandMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
        setOpen(!open);
    }

    return (
        <nav
            className={`z-50 fixed w-full max-w-[1920px] h-28 box-border lg:py-8 lg:px-14 xl:py-6 xl:px-20 2xl:px-24 lg:bg-white lg:drop-shadow-md flex items-center lg:justify-between transition-all duration-300 ease-in-out ${show && props.selection !== "contact" ? "lg:opacity-100" : "bg-transparent drop-shadow-none lg:opacity-0 lg:hover:opacity-100"}`}>
            <section
                className={`relative h-full w-full lg:w-fit py-5 px-6 md:py-4 md:px-8 lg:p-0 flex items-center justify-between lg:justify-start transition-all duration-300 ease-in-out ${show ? "bg-white lg:bg-transparent md:drop-shadow-md lg:drop-shadow-none" : "bg-transparent drop-shadow-none"}`}>
                <Link href={"/"}
                      className={`h-full transition-all duration-300 ease-in-out ${show ? "opacity-100" : "opacity-0"} lg:opacity-100`}>
                    <Image src={"/_common/images/svg/clinic_color.svg"} alt={"Clinicannabis. Centro de Medicina Ancestral Orígenes"} width={16} height={16}
                           className={"h-full w-auto"} priority/>
                </Link>
                <button
                    className={`relative z-50 aspect-square h-12 rounded-full lg:hidden grid place-items-center ${show ? (open ? "border-caribbean-green" : "border-neutral-500") : "!border-viridian-green bg-viridian-green/10 backdrop-blur-lg"} border-2`}
                    aria-expanded={open} aria-controls={"navigation_links"} aria-label={"Menu"}
                    onClick={expandMenu}>
                    <List
                        className={`transition duration-300 ease-in-out ${show ? (open ? "fill-caribbean-green" : "!fill-neutral-500") : "fill-viridian-green"}`}
                        size={30}/>
                </button>
            </section>
            <ul className={`absolute lg:relative top-24 left-0 lg:top-auto lg:left-auto py-6 lg:p-0 lg:h-full w-full lg:w-fit box-border bg-white lg:bg-transparent drop-shadow-md lg:drop-shadow-none flex flex-col lg:flex-row items-center justify-start lg:justify-end gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-14 text-neutral-500 xl:text-sm 2xl:text-base lg:animate-none lg:pointer-events-auto lg:select-auto ${open && show ? "animate-swing-in-top-fwd" : "animate-swing-out-top-bck pointer-events-none select-none"}`}
                id={"navigation_links"}>
                {_destinations.map((d, i) => {
                    return (
                        <li key={`destination${i}`} className={link} aria-current={d === props.selection}>
                            <Link href={_canonical[d]} className={d === props.selection ? selected : ""}>
                                {strings.navbar[d]}
                            </Link>
                        </li>
                    );
                })}
                <li className={"rounded-full border-solid border-2 border-viridian-green text-viridian-green text-base px-6 py-1 transition duration-300 ease-exponential-out lg:hover:border-white focus:border-white lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white"}>
                    <Link href={`https://wa.me/+573174834360?text=${strings.navbar.ctaMessage}`} target={"_blank"}
                          rel={"noreferrer"}>
                        {strings.navbar.cta}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;