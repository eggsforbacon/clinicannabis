import Image from "next/image";
import Link from "next/link";
import {strings} from "../accessibility/strings";
import {useRouter} from "next/router";
import React, {useState} from "react";

const Navbar = (
    props: {
        selection: string
    }) => {

    const selectedStyle: string = "h-0.5 absolute -bottom-2 lg:-bottom-[34px] px-1 rounded-sm w-full bg-caribbean-green";
    const listItemStyle: string = "flex relative flex-col items-center justify-start";
    const linkStyle: string = "font-semibold tracking-wide transition quartic-in-out duration-300 lg:hover:text-clinic-persian-green lg:hover:-translate-y-1 focus:text-clinic-persian-green";
    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    const [mobileExpanded, setMobileExpanded] = useState(false);

    const expandMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(mobileExpanded);
        setMobileExpanded(!mobileExpanded);
    }

    const navigate = useRouter();
    return (
        <nav
            className={"relative font-black text-neutral-600 flex flex-col lg:flex-row items-center justify-between bg-white lg:border-transparent lg:border-solid lg:border-2 lg:border-b-neutral-300 w-full h-fit lg:px-28"}>
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
                            href={"/experience"}>{strings.navbar.experience}</Link>
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
                </ul>
                {props.selection !== "contact" &&
                    <button className={buttonStyle} onClick={() => navigate.push("/contact")}>
                        {strings.navbar.cta}
                    </button>}
            </section>
        </nav>
    );
}

export default Navbar;