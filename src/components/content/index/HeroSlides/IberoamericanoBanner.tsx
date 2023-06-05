import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
/* import { Style } from "styles\BannerHead.css"; */
export const IberoamericanoBanner = () => {
    const navigate = useRouter();

    return (
        <section
            className={"font-aeonik text-lemon-chiffon font-normal w-full h-[60rem] md:h-192 xl:h-208 relative mt-6 lg:mt-16 flex flex-col items-center justify-start pt-24 xl:pt-32"}>
            <Image src={"/images/landing/bannerIberoamericano.png"}
                alt={""} width={1920} height={1080}
                className={"pointer-events-none select-none absolute w-full scale-[4.2] top-[26rem] md:top-[17rem] left-64 md:left-52 md:scale-[1.9] lg:scale-[1.4] lg:top-auto lg:bottom-8 lg:left-0 xl:scale-125 xl:top-28 xl:left-0"}
                quality={100} priority />
            <article className={"relative w-full lg:px-24 xl:px-44 flex flex-col justify-start items-center gap-10 lg:gap-14 xl:gap-16 min-h-[20rem]"}>
                <section className={"flex flex-col md:flex-row items-center justify-around w-full"}>
                    <div className={"flex flex-col items-stretch text-center md:text-left md:items-start"}>
                        <h1 className={"text-3xl lg:text-4xl"}>Seminario<br />Iberoamericano</h1>
                        <h2 className={"text-4xl lg:text-5xl"}><strong className={"text-5xl lg:text-6xl tracking-wide"}>Cannabinoides</strong><br /><span
                            className={"underline underline-offset-[10px] lg:underline-offset-[14px] decoration-[3px] lg:decoration-4"}>en la práctica clínica</span>
                        </h2>
                    </div>
                    <Image src={"/images/svg/logoIbero.svg"} alt={"Seminario Iberoamericano 2023"}
                        width={220} height={220}
                        className={"scale-[0.65] md:scale-100"} />
                </section>
                <section className={"flex flex-col md:flex-row items-center justify-start -mt-12 md:mt-auto md:justify-center gap-2 md:gap-10 lg:gap-12 xl:gap-16"}>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/images/svg/calendarIbero.svg"} alt={"16 de Junio de 2023"}
                            width={80} height={80} className={""} />
                        <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                            <h3 className={"font-bold"}>Junio de 2023</h3>
                            <h4 className={""}>Santiago de Cali</h4>
                        </div>
                    </div>
                    <section className={"flex items-center justify-center gap-6 md:gap-10 lg:gap-12 xl:gap-16"}>
                        <div className={"flex items-center justify-center"}>
                            <Image src={"/images/svg/geoIbero.svg"} alt={"16 de Junio de 2023"}
                                width={60} height={60} className={""} />
                            <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                                <h3 className={"font-bold"}>Junio de 2023</h3>
                                <h4 className={""}>Santiago de Cali</h4>
                            </div>
                        </div>
                        <div className={"flex items-center justify-center"}>
                            <Image src={"/images/svg/clockIbero.svg"} alt={"16 de Junio de 2023"}
                                width={60} height={60} className={""} />
                            <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                                <h3 className={"font-bold"}>Junio de 2023</h3>
                                <h4 className={""}>Santiago de Cali</h4>
                            </div>
                        </div>
                    </section>
                </section>
                <button
                    className={'relative w-fit rounded-full border-solid border-2 border-lemon-chiffon text-center py-3 px-8 lg:px-6 xl:px-10 backdrop-blur-lg transition duration-300 ease-in-out hover:bg-white/20 hover:shadow-xl hover:-translate-y-4'}>
                    <Link href={"/seminario/seminario-iberoamericano"} className={`md:text-base lg:text-lg font-semibold tracking-wide`}
                        target="_blank">M&aacute;s informaci&oacute;n</Link>
                </button>
                <section className={"flex w-full items-center !debug justify-evenly"}>
                    <section className="debug">
                        <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Organizan:</h5>
                        <section className={"flex items-center w-full justify-center gap-10"}>
                            <Image src={"/images/svg/curativaLogo.svg"} alt={"16 de Junio de 2023"}
                                width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                            <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                width={16} height={16} className={"-mx-4 scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                            <Image src={"/images/svg/clinic_lemon.svg"} alt={"16 de Junio de 2023"}
                                width={280} height={280} className={"!debug scale-75 lg:scale-[0.85] xl:scale-100"} />
                            <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                width={16} height={16} className={"-mx-4 lg:mx-auto scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                            <Image src={"/images/svg/asomedcamLogo.svg"} alt={"16 de Junio de 2023"}
                                width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                        </section>
                    </section>
                    
                    <section>
                        <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Patrocina:</h5>
                        <section className={"flex items-center w-full justify-center gap-10"}>
                            <Image src={"/images/svg/logo-tp-horizontal.png"} alt={"Patrocina Telepacìfico"}
                                width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />                        
                        </section>
                    </section>
                </section>
            </article>
        </section>
    );
}