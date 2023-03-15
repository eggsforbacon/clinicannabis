import {strings} from "../model/strings";
import Link from "next/link";
import Image from "next/image";
import {
    Envelope,
    Facebook,
    Geo,
    GeoAlt,
    Instagram,
    Mailbox,
    Phone,
    Voicemail,
    Whatsapp,
    Youtube
} from "react-bootstrap-icons";

const Footer = () => {

    const linkFamilyStyle: string = "h-full flex flex-col items-stretch justify-start space-y-2";
    const linkStyle: string = "text-white font-normal transition ease-in-out duration-300 lg:hover:text-caribbean-green focus:text-caribbean-green";

    return (
        <>
            <footer
                className={"z-0 bg-rich-black lg:bg-white flex w-full h-fit lg:h-256 relative flex-col justify-end items-center mt-auto overflow-x-clip"}>
                {/*<Image src={"/images/backgrounds/footer.svg"}*/}
                {/*       className={"z-0 w-full h-auto pointer-events-none selection:bg-transparent absolute lg:scale-[1.85] xl:scale-[1.1] -top-28 lg:bottom-28 lg:left-36 xl:left-auto lg:top-auto xl:bottom-0"} alt={""}*/}
                {/*       height={932} width={1920} priority/>*/}
                <Image src={"/images/svg/leafFooter.svg"}
                       className={"z-0 pointer-events-none selection:bg-transparent absolute right-0 -bottom-0 opacity-5"}
                       alt={""}
                       height={16 * 50} width={16 * 50} priority/>
                <section className={"z-0 h-144 w-full bg-rich-black text-white"}>
                    <section className={"px-10 xl:mx-96 h-full flex flex-col items-stretch justify-between"}>
                        <section className={"px-3 py-10 h-full flex items-center justify-start gap-16"}>
                            <section className={"flex flex-col items-stretch justify-start gap-10"}>
                                <div className={"flex flex-col items-start justify-start gap-4"}>
                                    <h2 className={"text-3xl w-72"}>{strings.footer.questions.headline}
                                        <strong> {strings.footer.questions.remark}</strong></h2>
                                    <p className={"text-xl font-normal"}>{strings.footer.questions.invitation}</p>
                                </div>
                                <section className={"flex items-center justify-start gap-6"}>
                                    <Whatsapp className={"fill-white h-full"} size={22}/>
                                    <Link href={"https://wa.me/+573174834360"}
                                          className={linkStyle}>{strings.footer.questions.phone}
                                    </Link>
                                </section>
                                <section className={"flex items-center justify-start gap-6"}>
                                    <Envelope className={"fill-white h-full"} size={22}/>
                                    <Link href={"mailto:info@clinicannabis.com.co"}
                                          className={linkStyle}>{strings.footer.questions.email}
                                    </Link>
                                </section>
                                <section className={"flex items-center justify-start gap-6"}>
                                    <GeoAlt className={"fill-white h-full"} size={22}/>
                                    <Link href={"https://goo.gl/maps/WXLy4un1udeGgoc9A"}
                                          className={linkStyle}>{strings.footer.questions.address}<br/>{strings.footer.questions.addressScript}
                                    </Link>
                                </section>
                            </section>
                            <section className={"h-full w-full flex items-center justify-start gap-10"}>
                                <ul className={"flex flex-col items-stretch justify-start gap-4 h-full mr-10 w-full"}>
                                    <li><h3 className={"text-white text-xl"}>{strings.footer.clinic.headline}</h3></li>
                                    <li><Link href={"/"}
                                              className={`${linkStyle} font-light text-xl`}>{strings.footer.clinic.home}</Link>
                                    </li>
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.history}</Link>*/}
                                    {/*</li>*/}
                                    <li><Link href={"/"}
                                              className={`${linkStyle} font-light text-xl`}>{strings.footer.clinic.experience}</Link>
                                    </li>
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.stories}</Link>*/}
                                    {/*</li>*/}
                                </ul>
                                <ul className={"flex flex-col items-stretch justify-start gap-4 h-full mr-10 w-full"}>
                                    <li><h3 className={"text-white text-xl"}>{strings.footer.fast.headline}</h3></li>
                                    <li><Link href={"/contact"}
                                              className={`${linkStyle} font-light text-xl`}>{strings.footer.fast.contact}</Link>
                                    </li>
                                    <li><Link href={"/legal#data"}
                                              className={`${linkStyle} font-light text-xl`}>{strings.footer.fast.data}</Link>
                                    </li>
                                    {/*<li><Link href={"/info"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.FAQ}</Link>*/}
                                    {/*</li>*/}
                                    {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.experts}</Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </section>
                        </section>
                        <span className={"w-full h-px bg-green-sheen"}/>
                        <section className={"px-3 py-10 h-full flex items-center justify-between"}>
                            <Image src={"/images/svg/clinic_white.svg"} alt={""} width={16} height={16}
                                   className={"-ml-6 h-20 w-auto"}/>
                            <ul className={"flex items-center justify-start"}>
                                <li>
                                    <Link href={"https://www.facebook.com/Clinicanabis"} target={"_blank"}>
                                        <Facebook
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                        <p className={"sr-only"}>Facebook</p>
                                    </Link>
                                </li>
                                <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                                <li>
                                    <Link href={"https://www.instagram.com/clinicanabis/"} target={"_blank"}>
                                        <Instagram
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                        <p className={"sr-only"}>Instagram</p>
                                    </Link>
                                </li>
                                <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                                <li>
                                    <Link href={"https://www.youtube.com/@clinicannabis9526"} target={"_blank"}>
                                        <Youtube
                                            className={"h-6 w-6 fill-green-sheen transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
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