import Image from "next/image";
import Link from "next/link";

const Navbar = (
    props: {
        selection : string
    }) => {

    const selectedStyle : string = "h-0.5 absolute -bottom-[26px] px-1 rounded-sm w-full bg-clinic-jade";
    const listItemStyle : string = "flex relative flex-col items-center justify-start";
    const linkStyle : string = "font-semibold tracking-wide transition quartic-in-out duration-300 md:hover:text-clinic-jade md:hover:-translate-y-1"

    return (
        <nav
            className={"font-black text-neutral-600 flex items-center justify-around bg-white border-solid border-2 border-b-neutral-300 w-full h-fit"}>
            <Image src={"/images/Clinicannabis.png"} alt={"Logo de Clinicannabis"} width={500 / 2} height={174 / 2}/>
            <section className={"h-full"}>
                <ul className={"h-10 flex justify-end items-end space-x-8"}>
                    <li className={listItemStyle}>
                        <Link className={linkStyle} href={"/"}>Nuestra Clínica</Link>
                        <span className={props.selection === "home" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={linkStyle} href={"/services"}>Servicios</Link>
                        <span className={props.selection === "services" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={linkStyle} href={"/experience-center"}>Centro de experiencia</Link>
                        <span className={props.selection === "experience" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={linkStyle} href={"/blog"}>Blog médico</Link>
                        <span className={props.selection === "blog" ? selectedStyle : ""} />
                    </li>
                    <li className={listItemStyle}>
                        <Link className={linkStyle} href={"/contact"}>Contáctenos</Link>
                        <span className={props.selection === "contact" ? selectedStyle : ""} />
                    </li>
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;