import {strings} from "../model/strings";
import Link from "next/link";
import Image from "next/image";
import {
    Envelope,
    Facebook,
    GeoAlt,
    Instagram,
    Twitter,
    Whatsapp,
    Youtube
} from "react-bootstrap-icons";

const Footer = () => {

    const linkStyle: string = "text-white font-light text-base xl:text-lg lg:font-normal transition ease-in-out duration-300 lg:hover:text-caribbean-green focus:text-caribbean-green";
    const linkButtonStyle : string = "flex items-center justify-start border-solid border-2 border-green-sheen lg:border-none gap-6 rounded-lg h-16 py-2 px-4 lg:p-0 lg:h-auto";

    return (
        <>
            <footer
                className={"z-0 bg-rich-black lg:bg-white flex w-full h-fit lg:h-144 relative flex-col justify-end items-center mt-auto overflow-x-clip"}>
                {/*<Image src={"/images/backgrounds/footer.svg"}*/}
                {/*       className={"z-0 w-full h-auto pointer-events-none selection:bg-transparent absolute lg:scale-[1.85] xl:scale-[1.1] -top-28 lg:bottom-28 lg:left-36 xl:left-auto lg:top-auto xl:bottom-0"} alt={""}*/}
                {/*       height={932} width={1920} priority/>*/}
                <Image src={"/images/svg/leafFooter.svg"}
                       className={"z-0 pointer-events-none selection:bg-transparent absolute right-0 -bottom-0 opacity-5"}
                       alt={""}
                       height={16 * 50} width={16 * 50} priority/>
                <section className={"z-0 h-fit lg:h-144 w-full bg-rich-black text-white"}>
                    <section className={"lg:px-10 xl:px-32 2xl:px-80 h-full flex flex-col items-stretch justify-between"}>
                        <section className={"px-6 g:px-3 py-10 h-full flex flex-col lg:flex-row items-center justify-start gap-16"}>
                            <section className={"flex w-full flex-col items-stretch justify-start gap-10 text-base lg:text-lg"}>
                                <div className={"flex flex-col items-start justify-start gap-4"}>
                                    <h2 className={"text-2xl xl:text-3xl w-72"}>{strings.footer.questions.headline}
                                        <strong> {strings.footer.questions.remark}</strong></h2>
                                    <p className={"text-lg lg:text-lg font-light"}>{strings.footer.questions.invitation}</p>
                                </div>
                                <Link href={"https://wa.me/+573174834360"} className={linkButtonStyle}>
                                    <Whatsapp className={"lg:fill-white fill-green/sheen h-full"} size={22}/>
                                    <p className={linkStyle}>{strings.footer.questions.phone}</p>
                                </Link>
                                <Link href={"mailto:info@clinicannabis.com.co"} className={linkButtonStyle}>
                                    <Envelope className={"lg:fill-white fill-green/sheen h-full"} size={22}/>
                                    <p className={linkStyle}>{strings.footer.questions.email}</p>
                                </Link>
                                <Link href={"https://goo.gl/maps/WXLy4un1udeGgoc9A"} className={linkButtonStyle}>
                                    <GeoAlt className={"lg:fill-white fill-green/sheen h-full"} size={22}/>
                                    <p className={linkStyle}>{strings.footer.questions.address}<br/>{strings.footer.questions.addressScript}</p>
                                </Link>
                            </section>
                            <section className={"h-full w-full flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-0"}>
                                <ul className={"flex flex-col items-stretch justify-start gap-4 h-full lg:mr-10 w-full"}>
                                    <li><h3 className={"text-white text-base lg:text-xl"}>{strings.footer.clinic.headline}</h3></li>
                                    <li><Link href={"/"}
                                              className={linkStyle}>{strings.footer.clinic.home}</Link>
                                    </li>
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.history}</Link>*/}
                                    {/*</li>*/}
                                    <li><Link href={"/"}
                                              className={linkStyle}>{strings.footer.clinic.experience}</Link>
                                    </li>
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.stories}</Link>*/}
                                    {/*</li>*/}
                                </ul>
                                <ul className={"flex flex-col items-stretch justify-start gap-4 h-full lg:mr-10 w-full"}>
                                    <li><h3 className={"text-white text-base lg:text-xl"}>{strings.footer.fast.headline}</h3></li>
                                    <li><Link href={"/contacto"}
                                              className={linkStyle}>{strings.footer.fast.contact}</Link>
                                    </li>
                                    <li><Link href={"/legal"}
                                              className={linkStyle}>{strings.footer.fast.data}</Link>
                                    </li>
                                    {/*<li><Link href={"/info"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.FAQ}</Link>*/}
                                    {/*</li>*/}
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.experts}</Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </section>
                        </section>
                        <span className={"w-full h-px bg-green-sheen"}/>
                        <section className={"px-3 py-10 h-full flex flex-col lg:flex-row items-center justify-between"}>
                            <Link href={"/"} className={"-ml-6 h-20 w-auto"}>
                                <Image src={"/images/svg/clinic_white.svg"} alt={""} width={16} height={16}
                                       className={"h-full w-auto"}/>
                            </Link>
                            <ul className={"grid grid-cols-2 lg:grid-cols-4 mt-4 place-items-center gap-6"}>
                                <li>
                                    <Link href={"https://www.facebook.com/Clinicanabis"} target={"_blank"} className={"text-green-sheen flex flex-col items-center justify-center gap-1 transition duration-300 ease-in-out hover:text-white"}>
                                        <Facebook
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110 hover:fill-white"}/>
                                        <p className={"text-sm font-normal"}>Clinicannabis</p>
                                        <p className={"sr-only"}>Facebook</p>
                                    </Link>
                                </li>
                                {/*<span className={"h-full w-[2px] bg-white mx-3.5"}/>*/}
                                <li>
                                    <Link href={"https://www.instagram.com/clinicannabis.col/"} className={"text-green-sheen flex flex-col items-center justify-center gap-1 transition duration-300 ease-in-out hover:text-white"} target={"_blank"}>
                                        <Instagram
                                            className={"h-6 w-6 transition fill-green-sheen duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110 hover:fill-white"}/>
                                        <p className={"text-sm font-normal"}>@clinicannabis.col</p>
                                        <p className={"sr-only"}>Instagram</p>
                                    </Link>
                                </li>
                                {/*<span className={"h-full w-[2px] bg-white mx-3.5"}/>*/}
                                <li>
                                    <Link href={"https://www.twitter.com/clinicannabis"} target={"_blank"} className={"text-green-sheen flex flex-col items-center justify-center gap-1 transition duration-300 ease-in-out hover:text-white"}>
                                        <Twitter
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110 hover:fill-white"}/>
                                        <p className={"text-sm font-normal"}>@clinicannabis</p>
                                        <p className={"sr-only"}>Twitter</p>
                                    </Link>
                                </li>
                                {/*<span className={"h-full w-[2px] bg-white mx-3.5"}/>*/}
                                <li>
                                    <Link href={"https://www.youtube.com/@clinicannabis9526"} target={"_blank"} className={"text-green-sheen flex flex-col items-center justify-center gap-1 transition duration-300 ease-in-out hover:text-white"}>
                                        <Youtube
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110 hover:fill-white"}/>
                                        <p className={"text-sm font-normal"}>@clinicannabis9526</p>
                                        <p className={"sr-only"}>YouTube</p>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </footer>
            <section
                className={"z-20 text-base text-green-sheen bg-dark-green font-normal grid grid-cols-1 place-items-center w-full py-3"}>
                <p className={"px-8 text-center"}>{strings.footer.copy}</p>
            </section>
        </>
    );
}

export default Footer;