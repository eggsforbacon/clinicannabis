import {strings} from "../accessibility/strings";
import Link from "next/link";
import Image from "next/image";
import {Facebook, Instagram, Youtube} from "react-bootstrap-icons";

const Footer = () => {

    const linkFamilyStyle: string = "h-full flex flex-col items-stretch justify-start space-y-2";
    const linkStyle: string = "text-neutral-900 font-semibold text-lg transition ease-in-out duration-300 lg:hover:text-green-100 focus:text-green-100";

    return (
        <footer className={"flex w-full flex-col justify-center items-center bg-clinic-muted-jade"}>
            <section
                className={"flex flex-col md:min-h-168 w-full px-44 py-8 items-center text-green-100 justify-center"}>
                <article className={"grid w-full h-fit py-6 lg:grid-cols-3 lg:place-items-center"}>
                    <section className={linkFamilyStyle}>
                        <h2 className={"font-bold text-4xl tracking-widest uppercase"}>{strings.footer.questions.headline}</h2>
                        <p className={"font-normal text-neutral-900"}>{strings.footer.questions.subtitle}</p>
                        <ul className={"flex flex-col items-start space-y-8 text-neutral-900"}>
                            <li>
                                <div className={"w-full flex items-center justify-stretch"}>
                                    <section className={"flex flex-col items-stretch justify-center"}>
                                        <Link href={"tel:+576023152102"} className={linkStyle}>{strings.footer.questions.phone}</Link>
                                        <p className={"font-normal"}>{strings.footer.questions.phoneScript}</p>
                                    </section>
                                </div>
                            </li>
                            <li>
                                <div className={"w-full flex items-center justify-stretch"}>
                                    <section className={"flex flex-col items-start justify-center"}>
                                        <Link href={"mailto:info@clinicannabis.com.co"} className={linkStyle}>{strings.footer.questions.email}</Link>
                                        <p className={"font-normal"}>{strings.footer.questions.emailScript}</p>
                                    </section>
                                </div>
                            </li>
                            <li>
                                <div className={"w-full flex items-center justify-stretch"}>
                                    <section className={"flex flex-col items-start justify-center"}>
                                        <Link href={"https://goo.gl/maps/LXE5LD2FWvLQYJd5A"} className={linkStyle}>{strings.footer.questions.address}</Link>
                                        <p className={"font-normal"}>{strings.footer.questions.addressScript}</p>
                                    </section>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className={linkFamilyStyle}>
                        <h3 className={"text-2xl uppercase tracking-widest"}>{strings.footer.clinic.headline}</h3>
                        <ul className={"flex flex-col justify-start items-stretch space-y-6"}>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.clinic.home}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.clinic.history}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.clinic.experience}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.clinic.stories}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.clinic.experts}</Link></li>
                        </ul>
                    </section>
                    <section className={linkFamilyStyle}>
                        <h3 className={"text-2xl uppercase tracking-widest"}>{strings.footer.fast.headline}</h3>
                        <ul className={"flex flex-col justify-start items-stretch space-y-6"}>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.fast.contact}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.fast.data}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.fast.FAQ}</Link></li>
                            <li><Link href={"/"} className={linkStyle}>{strings.footer.fast.PQRSD}</Link></li>
                        </ul>
                    </section>
                </article>
                <span
                    className={"text-transparent border-solid border-2 border-transparent rounded-md border-t-neutral-900 w-full h-2"}/>
                <section className={"w-full flex justify-between items-center my-8 h-fit"}>
                    <Image src={"/images/clinicannabis_footer.png"} alt={"Logo de Clinicannabis"}
                           width={384 / 4}
                           height={418 / 4}/>
                    <ul className={"flex justify-end space-x-8 items-center"}>
                        <li className={"rounded-full w-12 h-12 border-[1px] grid place-items-center border-solid border-green-100 transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}>
                            <Link href={"https://www.facebook.com/Clinicanabis"} target={"_blank"}>
                                <Facebook className={"fill-green-100 p-1 w-8 h-8"}/>
                            </Link>
                        </li>
                        <li className={"rounded-full w-12 h-12 border-[1px] grid place-items-center border-solid border-green-100 transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}>
                            <Link href={"https://www.instagram.com/clinicanabis/"} target={"_blank"}>
                                <Instagram className={"fill-green-100 p-1 w-8 h-8"}/>
                            </Link>
                        </li>
                        <li className={"rounded-full w-12 h-12 border-[1px] grid place-items-center border-solid border-green-100 transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}>
                            <Link href={"https://www.youtube.com/@clinicannabis9526"} target={"_blank"}>
                                <Youtube className={"fill-green-100 p-1 w-8 h-8"}/>
                            </Link>
                        </li>
                    </ul>
                </section>
                {/*<section className={"w-full flex justify-start items-center space-x-8"}>*/}
                {/*    <Image src={"/images/sic_footer.png"} alt={"Logo de la Superintendencia de Industria y Comercio"}*/}
                {/*           width={428 / 2}*/}
                {/*           height={87 / 2}/>*/}
                {/*    <Image src={"/images/servicio_salud_footer.png"} alt={"Logo de Servicio de Salud Habilitado 2019"}*/}
                {/*           width={311 / 3}*/}
                {/*           height={288 / 3}/>*/}
                {/*    <Image src={"/images/alcaldia_sc_footer.png"} alt={"Logo de la Alcaldía de Santiago de Cali"}*/}
                {/*           width={2085 / 14}*/}
                {/*           height={2084 / 14}/>*/}
                {/*</section>*/}
            </section>
            <section
                className={"text-sm font-normal tracking-wide grid grid-cols-1 place-items-center w-full py-6"}>
                <p>{strings.footer.copy}</p>
            </section>
        </footer>
    );
}

export default Footer;