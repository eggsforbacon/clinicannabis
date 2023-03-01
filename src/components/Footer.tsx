import {strings} from "../model/strings";
import Link from "next/link";
import Image from "next/image";
import {Envelope, Facebook, Geo, GeoAlt, Instagram, Mailbox, Phone, Voicemail, Youtube} from "react-bootstrap-icons";

const Footer = () => {

    const linkFamilyStyle: string = "h-full flex flex-col items-stretch justify-start space-y-2";
    const linkStyle: string = "text-white font-normal text-xl transition ease-in-out duration-300 lg:hover:text-clinic-blue-chill focus:text-clinic-blue-chill";

    return (
    <>
        <footer className={"z-0 flex w-full h-144 relative flex-col justify-end items-center mt-auto"}>
            <Image src={"/images/backgrounds/footer.svg"}
                   className={"z-0 w-full h-auto pointer-events-none selection:bg-transparent absolute bottom-0"} alt={""}
                   height={584} width={1920} priority/>
            <Image src={"/images/svg/leafFooter.svg"}
                   className={"z-0 pointer-events-none selection:bg-transparent absolute right-0 -bottom-0 opacity-5"} alt={""}
                   height={926} width={926} priority/>
            <section className={"z-0 w-full flex flex-col justify-end items-center"}>
                <section className={"w-[70%] h-[38rem] grid grid-cols-3 py-20"}>
                    <section className={"w-[120%] h-full pt-4 flex flex-col items-start justify-start gap-10"}>
                        <h1 className={"text-6xl font-black text-caribbean-green"}>{strings.footer.questions.headline}<br/><strong
                            className={"text-white"}>{strings.footer.questions.remark}</strong></h1>
                        <ul className={"flex items-start justify-start flex-col w-full gap-2"}>
                            <li className={"flex w-full min-h-[4rem] items-center justify-start gap-4"}>
                                <GeoAlt className={"fill-white h-full"} size={30}/>
                                <Link href={"https://goo.gl/maps/WXLy4un1udeGgoc9A"}
                                      className={linkStyle}>{strings.footer.questions.address}<br/>{strings.footer.questions.addressScript}
                                </Link>
                            </li>
                            <li className={"flex w-full min-h-[4rem] items-center justify-start gap-4"}>
                                <Phone className={"fill-white h-full"} size={30}/>
                                <Link href={"https://wa.me/+573174834360"}
                                      className={linkStyle}>{strings.footer.questions.phone}
                                </Link>
                            </li>
                            <li className={"flex w-full min-h-[4rem] items-center justify-start gap-4"}>
                                <Envelope className={"fill-white h-full"} size={30}/>
                                <Link href={"mailto:info@clinicannabis.com.co"}
                                      className={linkStyle}>{strings.footer.questions.email}
                                </Link>
                            </li>
                        </ul>
                        <section className={"flex flex-col w-full gap-2"}>
                            <ul className={"flex items-center justify-start"}>
                                <li>
                                    <Link href={"https://www.facebook.com/Clinicanabis"} target={"_blank"}>
                                        <Facebook
                                            className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                        <p className={"sr-only"}>Facebook</p>
                                    </Link>
                                </li>
                                <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                                <li>
                                    <Link href={"https://www.instagram.com/clinicanabis/"} target={"_blank"}>
                                        <Instagram
                                            className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                        <p className={"sr-only"}>Instagram</p>
                                    </Link>
                                </li>
                                <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                                <li>
                                    <Link href={"https://www.youtube.com/@clinicannabis9526"} target={"_blank"}>
                                        <Youtube
                                            className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                        <p className={"sr-only"}>YouTube</p>
                                    </Link>
                                </li>
                            </ul>
                            <p className={"text-xl font-light text-white"}>@Clinicannabis</p>
                        </section>
                    </section>
                    <ul className={"w-full flex flex-col gap-5 justify-end items-start pl-24 pb-20"}>
                        <li><h3 className={"text-white text-2xl"}>{strings.footer.clinic.headline}</h3></li>
                        <li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.home}</Link>
                        </li>
                        {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.history}</Link>*/}
                        {/*</li>*/}
                        <li><Link href={"/"}
                                  className={`${linkStyle} text-2xl`}>{strings.footer.clinic.experience}</Link></li>
                        {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.clinic.stories}</Link>*/}
                        {/*</li>*/}
                    </ul>
                    <ul className={"w-full flex flex-col gap-5 justify-end items-start pl-24 pb-20"}>
                        <li><h3 className={"text-white text-2xl"}>{strings.footer.fast.headline}</h3></li>
                        <li><Link href={"/contact"}
                                  className={`${linkStyle} text-2xl`}>{strings.footer.fast.contact}</Link></li>
                        <li><Link href={"/legal#data"}
                                  className={`${linkStyle} text-2xl`}>{strings.footer.fast.data}</Link></li>
                        {/*<li><Link href={"/info"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.FAQ}</Link>*/}
                        {/*</li>*/}
                        {/*<li><Link href={"/"} className={`${linkStyle} text-2xl`}>{strings.footer.fast.experts}</Link>*/}
                        {/*</li>*/}
                    </ul>
                </section>
            </section>
        </footer>
        <section
            className={"z-20 text-base text-green-sheen bg-dark-green font-normal grid grid-cols-1 place-items-center w-full py-3"}>
            <p>{strings.footer.copy}</p>
        </section>
    </>
    );
}

export default Footer;