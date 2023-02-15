import Image from "next/image";
import Link from "next/link";
import {strings} from "../model/strings";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {BagPlus} from "react-bootstrap-icons";
import Cart from "./content/shop/Cart";
import {CartProvider} from "../context/CartProvider";

const Navbar = (
    props: {
        selection: string,
        context? : string,
    }) => {

    const selectedStyle: string = "z-10 h-0.5 absolute -bottom-2 lg:-bottom-[34px] px-1 rounded-sm w-full bg-caribbean-green";
    const listItemStyle: string = "flex relative flex-col items-center justify-start";
    const linkStyle: string = "font-semibold tracking-wide transition quartic-in-out duration-300 lg:hover:text-clinic-persian-green lg:hover:-translate-y-1 focus:text-clinic-persian-green";
    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    const [mobileExpanded, setMobileExpanded] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const expandMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(mobileExpanded);
        setMobileExpanded(!mobileExpanded);
    }

    const toggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCartOpen(!cartOpen);
    }

    const linkTree = () => {
        if (props.context !== "shop") return (
            <>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "home" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/"}>{strings.navbar.home}</Link>
                    <span className={props.selection === "home" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "services" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/services"}>{strings.navbar.services}</Link>
                    <span className={props.selection === "services" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "experience" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/experience/"}>{strings.navbar.experience}</Link>
                    <span className={props.selection === "experience" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "blog" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/blog"}>{strings.navbar.blog}</Link>
                    <span className={props.selection === "blog" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link
                        className={`${linkStyle} ${props.selection === "contact" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/contact"}>{strings.navbar.contact}</Link>
                    <span className={props.selection === "contact" ? selectedStyle : ""}/>
                </li>
            </>

        );
        else return (
            <>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "1" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/experience/pharmacy"}>{strings.experience.carousel["1"].headline}</Link>
                    <span className={props.selection === "1" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "2" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/experience/coffee-shop"}>{strings.experience.carousel["2"].headline}</Link>
                    <span className={props.selection === "2" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "3" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/experience/boutique"}>{strings.experience.carousel["3"].headline}</Link>
                    <span className={props.selection === "3" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <Link className={`${linkStyle} ${props.selection === "4" ? "font-bold text-clinic-jade" : ""}`}
                        href={"/experience/origins"}>{strings.experience.carousel["4"].headline}</Link>
                    <span className={props.selection === "4" ? selectedStyle : ""}/>
                </li>
                <li className={listItemStyle}>
                    <button className={"flex flex-col items-center justify-center"} onClick={toggleCart} aria-expanded={cartOpen} aria-controls={"cart-menu"}>
                        <BagPlus size={32} className={`${linkStyle} -translate-y-1 ${cartOpen ? "text-clinic-jade" : "lg:hover:!-translate-y-2 "}`} />
                    </button>
                </li>
            </>
        );
    }

    const navigate = useRouter();
    return (
        <nav
            className={"z-10 relative font-black text-neutral-600 flex flex-col lg:flex-row items-center justify-between bg-white lg:border-transparent lg:border-solid lg:border-2 lg:border-b-neutral-300 w-full h-fit lg:px-28"}>
            <section
                className={"max-lg:z-20 w-full bg-white border-solid border-2 border-b-neutral-300 lg:border-none p-4 md:px-16 lg:p-0 lg:w-auto h-fit flex items-center justify-between"}>
                <Image src={"/images/clinicannabis_hr.png"} className={"w-auto h-14 lg:h-auto lg:w-auto"}
                       alt={"Logo horizontal de Clinicannabis"} width={500 / 2}
                       height={174 / 2} priority/>
                <button className={"w-12 h-12 rounded-full bg-clinic-jade lg:hidden"} aria-expanded={"false"}
                        aria-controls={"navigation"} aria-label={"Menu"} onClick={expandMenu }>

                </button>
            </section>
            <section
                className={"h-full flex flex-col md:flex-row justify-center lg:justify-between items-center lg:gap-12"}
                id={"navigation"}>
                <ul className={`${mobileExpanded ? "max-lg:animate-swing-in-top-fwd": "max-lg:animate-swing-out-top-bck"} max-lg:z-10 absolute max-lg:top-20 bg-white w-full lg:w-auto border-b-solid border-b-2 border-b-neutral-300 lg:relative lg:border-none lg:border-transparent h-80 lg:h-10 flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-8`}>
                    {linkTree()}
                </ul>
                {(props.selection !== "contact" && props.context !== "shop") &&
                    <button className={buttonStyle} onClick={() => navigate.push("/contact")}>
                        {strings.navbar.cta}
                    </button>}
                {props.context === "shop" && <Cart open={[cartOpen, setCartOpen]} />}
            </section>
        </nav>
    );
}

export default Navbar;