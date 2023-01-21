import Image from "next/image";
import Link from "next/link";
import {strings} from "../accessibility/strings";

const Navbar = (
    props: {
        selection : string
    }) => {

    const selectedStyle : string = "h-0.5 absolute -bottom-[34px] px-1 rounded-sm w-full bg-clinic-jade";
    const listItemStyle : string = "flex relative flex-col items-center justify-start";
    const linkStyle : string = "font-semibold tracking-wide transition quartic-in-out duration-300 lg:hover:text-clinic-jade lg:hover:-translate-y-1 focus:text-clinic-jade";
    const buttonStyle : string = "rounded-full border-solid border-2 border-clinic-persian-green text-clinic-persian-green font-normal text-lg px-4 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-clinic-persian-green lg:hover:text-white focus:scale-110 focus:bg-clinic-persian-green focus:text-white";

    return (
        <nav
            className={"font-black text-neutral-600 flex items-center justify-between bg-white border-solid border-2 border-b-neutral-300 w-full h-fit px-28"}>
            <Image src={"/images/clinicannabis_hr.png"} alt={"Logo horizontal de Clinicannabis"} width={500 / 2} height={174 / 2}/>
            <section className={"h-full flex justify-between items-center gap-12"}>
                <ul className={"h-10 flex justify-end items-center gap-8"}>
                    <li className={listItemStyle}>
                        <Link className={`${linkStyle} ${props.selection === "home" ? "font-bold text-clinic-jade" : ""}`} href={"/"}>{strings.navbar.home}</Link>
                        <span className={props.selection === "home" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={`${linkStyle} ${props.selection === "services" ? "font-bold text-clinic-jade" : ""}`} href={"/services"}>{strings.navbar.services}</Link>
                        <span className={props.selection === "services" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={`${linkStyle} ${props.selection === "experience" ? "font-bold text-clinic-jade" : ""}`} href={"/experience-center"}>{strings.navbar.experience}</Link>
                        <span className={props.selection === "experience" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={`${linkStyle} ${props.selection === "blog" ? "font-bold text-clinic-jade" : ""}`} href={"/blog"}>{strings.navbar.blog}</Link>
                        <span className={props.selection === "blog" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={`${linkStyle} ${props.selection === "contact" ? "font-bold text-clinic-jade" : ""}`} href={"/contact"}>{strings.navbar.contact}</Link>
                        <span className={props.selection === "contact" ? selectedStyle : ""} />
                    </li>
                </ul>
                <Link href={"/"} className={buttonStyle}>{strings.navbar.cta}</Link>
            </section>
        </nav>
    );
}

export default Navbar;