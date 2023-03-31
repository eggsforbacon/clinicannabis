import Image from "next/image";
import Link from "next/link";
import {strings} from "../model/strings";
import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from "react";
import {BagPlus, List} from "react-bootstrap-icons";
import Cart from "./content/shop/Cart";
import {CartProvider} from "../context/Cart/CartProvider";
import NavbarContext from "../context/Navbar/NavbarContext";
import {NavbarProvider} from "../context/Navbar/NavbarProvider";
import {useWindowDimensions} from "../hooks/useWindowDimensions";

const Navbar = (
    props: {
        selection: string,
        context?: string,
    }) => {

    const selectedStyle: string = "z-10 h-0.5 absolute -bottom-0.5 lg:relative px-1 rounded-sm w-full bg-caribbean-green";
    const deselectedStyle: string = "h-0.5 absolute -bottom-0.5 lg:relative px-1 rounded-sm w-full";
    const listItemStyle: string = "flex relative flex-col items-center justify-end h-full gap-12";
    const linkStyle: string = "font-semibold tracking-wide transition quartic-in-out duration-300 lg:hover:text-viridian-green lg:hover:-translate-y-1 focus:text-viridian-green";
    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:border-white focus:border-white lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    const {width: wWidth, height: wHeight} = useWindowDimensions();

    const [mobileExpanded, setMobileExpanded] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [show, setShow] = useState(wWidth <= 768);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
                setMobileExpanded(false);
            } else { // if scroll up show the navbar
                setShow(true);
                setMobileExpanded(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    const expandMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
        console.log(mobileExpanded);
        setMobileExpanded(!mobileExpanded);
    }

    const toggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCartOpen(!cartOpen);
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const linkTree = () => {
        if (props.context !== "shop") return (
            <>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "home" ? "font-bold text-caribbean-green" : ""}`}
                        href={"/"}>{strings.navbar.home}</Link>
                    <span className={props.selection === "home" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "services" ? "font-bold text-caribbean-green" : ""}`}
                        href={"/services"}>{strings.navbar.services}</Link>
                    <span className={props.selection === "services" ? selectedStyle : deselectedStyle}/>
                </li>
                {/*<li className={listItemStyle}>*/}
                {/*    <Link*/}
                {/*        className={`${linkStyle} ${props.selection === "experience" ? "font-bold text-caribbean-green" : ""}`}*/}
                {/*        href={"/experience"}>{strings.navbar.experience}</Link>*/}
                {/*    <span className={props.selection === "experience" ? selectedStyle : deselectedStyle}/>*/}
                {/*</li>*/}
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "blog" ? "font-bold text-caribbean-green" : ""}`}
                        href={"/blog"}>{strings.navbar.blog}</Link>
                    <span className={props.selection === "blog" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "contact" ? "font-bold text-caribbean-green" : ""}`}
                        href={"/contact"}>{strings.navbar.contact}</Link>
                    <span className={props.selection === "contact" ? selectedStyle : deselectedStyle}/>
                </li>
            </>

        );
        else return (
            <>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "1" ? "font-bold text-caribbean-green" : ""}`}
                          href={"/experience/pharmacy"}>{strings.experience.carousel["1"].headline}</Link>
                    <span className={props.selection === "1" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "2" ? "font-bold text-caribbean-green" : ""}`}
                          href={"/experience/coffee-shop"}>{strings.experience.carousel["2"].headline}</Link>
                    <span className={props.selection === "2" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "3" ? "font-bold text-caribbean-green" : ""}`}
                          href={"/experience/boutique"}>{strings.experience.carousel["3"].headline}</Link>
                    <span className={props.selection === "3" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "4" ? "font-bold text-caribbean-green" : ""}`}
                          href={"/experience/origins"}>{strings.experience.carousel["4"].headline}</Link>
                    <span className={props.selection === "4" ? selectedStyle : deselectedStyle}/>
                </li>
                <li className={listItemStyle}>
                    <button className={"flex flex-col items-center justify-center"} onClick={toggleCart}
                            aria-expanded={cartOpen} aria-controls={"cart-menu"}>
                        <BagPlus size={32}
                                 className={`${linkStyle} -translate-y-1 ${cartOpen ? "text-caribbean-green" : "lg:hover:!-translate-y-2 "}`}/>
                    </button>
                </li>
            </>
        );
    }

    const {setLogoShown, logoShown} = useContext(NavbarContext);

    return (
            <nav
                className={`${props.selection !== "contact" ? "block" : "block lg:hidden"} z-50 fixed transition duration-700 ease-in-out ${show ? "lg:bg-white lg:opacity-100" : "bg-transparent border-transparent lg:opacity-0 lg:bg-white lg:hover:opacity-100"} font-black text-dark-green flex flex-col lg:flex-row items-center justify-between lg:border-transparent lg:border-solid lg:border-2 lg:border-b-neutral-300 h-[5.5rem] lg:h-fit w-full lg:px-24`}>
                <section
                    className={`max-lg:z-20 w-full border-solid border-2 transition duration-700 ease-in-out ${show ? "max-md:bg-white border-none" : "bg-transparent border-none"} lg:border-none p-4 md:px-16 lg:p-0 lg:w-auto h-fit flex items-center justify-between`}>
                    <Image src={"/images/clinicannabis_hr.png"} className={`w-auto h-14 lg:h-24 lg:w-[17.25rem] transition duration-700 ease-in-out ${show ? "opacity-100" : "pointer-events-none selected:bg-transparent opacity-0"} lg:opacity-100`}
                           alt={"Logo horizontal de Clinicannabis"} width={500 / 2}
                           height={174 / 2} priority/>
                    <button className={"w-12 h-12 rounded-full lg:hidden grid place-items-center"}
                            aria-expanded={"false"}
                            aria-controls={"navigation"} aria-label={"Menu"} onClick={expandMenu}>
                        <List className={`transition duration-700 ease-in-out ${show ? (mobileExpanded ? "fill-caribbean-green" : "fill-viridian-green") : "!fill-green-sheen"}`} size={32}/>
                    </button>
                </section>
                <section
                    className={"h-120 lg:h-full flex flex-col md:flex-row justify-center lg:justify-between items-center lg:gap-12"}
                    id={"navigation"}>
                    <ul
                        className={`${mobileExpanded && show ? "max-lg:animate-swing-in-top-fwd" : "max-lg:animate-swing-out-top-bck"} bg-white lg:bg-transparent max-lg:z-10 absolute max-lg:top-0 w-full lg:w-auto border-b-solid border-b-2 border-b-neutral-300 lg:relative lg:border-none lg:border-transparent h-120 pt-36 lg:pt-0 lg:h-fit lg:mt-12 flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-10 py-8 lg:py-0`}>
                        {linkTree()}
                    </ul>
                    {props.context !== "shop" &&
                        <a className={buttonStyle} href={"https://wa.me/+573174834360"}>
                            {strings.navbar.cta}
                        </a>}
                    {props.context === "shop" && <Cart open={[cartOpen, setCartOpen]}/>}
                </section>
            </nav>
    );
}

export default Navbar;
