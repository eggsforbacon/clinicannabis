import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
/* import { Style } from "styles\BannerHead.css"; */
export const IberoamericanoBanner = () => {

    return (
        <section className={""}>
            <div className={"w-full font-aeonik text-lemon-chiffon font-normal pb-8  relative"}>
                <Image src={"/images/landing/bannerIberoamericano.png"}
                    alt={"Cannabinoides Seminario Iberoamericano"} width={1920} height={1200} quality={100} priority
                    className={"pointer-events-none select-none absolute w-full scale-[6.8] top-[36rem] md:top-80 left-64 md:left-52 md:scale-[2.8] lg:scale-[1.4] lg:top-auto lg:bottom-8 lg:left-0 xl:scale-125 xl:top-28 xl:left-0"} />
                
                <article className={"relative flex flex-col justify-center items-center"}>
                    <section className={"flex justify-evenly items-center w-full p-0.5 md:p-10 flex-wrap mt-[15vh]"}>
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

                    <section className={"flex flex-col justify-evenly w-full md:w-4/5 mb-[5vh] flex-wrap lg:mt-[9vh] md:mt-[2vh] md:flex-row"}>
                        <div className={"flex items-center justify-center"}>
                            <Image src={"/images/svg/calendarIbero.svg"} alt={"16 de Junio de 2023"}
                                width={90} height={80} className={""} />
                            <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                                <h3 className={"font-bold"}>Junio de 2023</h3>
                                <h4 className={""}>Santiago de Cali</h4>
                            </div>
                        </div>

                        <div className={"flex items-center justify-center"}>
                            <Image src={"/images/svg/geoIbero.svg"} alt={"16 de Junio de 2023"}
                                width={70} height={60} className={""} />
                            <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                                <h3 className={"font-bold"}>Hotel Marriott</h3>
                                <h4 className={""}>Av. 8N. #10-18</h4>
                            </div>
                        </div>

                        <div className={"flex items-center justify-center"}>
                            <Image src={"/images/svg/clockIbero.svg"} alt={"16 de Junio de 2023"}
                                width={70} height={60} className={""} />
                            <div className={"text-xl lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                                <h3 className={"font-bold"}>7:00 a.m.</h3>
                                <h4 className={""}>a 6:00 p.m.</h4>
                            </div>
                        </div>
                    </section>

                    <button className={"relative w-fit rounded-full border-solid border-2 border-lemon-chiffon text-center py-3 px-8 lg:px-6 xl:px-10 backdrop-blur-lg transition duration-300 ease-in-out hover:bg-white/20 hover:shadow-xl hover:-translate-y-4"}>
                        <Link href={"/seminario/seminario-iberoamericano"} className={`md:text-base lg:text-lg font-semibold tracking-wide`}
                            target="_blank">M&aacute;s informaci&oacute;n
                        </Link>
                    </button>

                    <section className={"w-full mt-10 lg:mt-8 xl:mt-16 flex flex-col gap-4 md:flex-row items-center md:flex-start justify-center flex-wrap"}>
                        <div>
                            <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Organizan:</h5>
                            <div className={"flex flex-col items-center md:flex-row justify-center gap-1"}>
                                <Image src={"/images/svg/curativaLogo.svg"} alt={"16 de Junio de 2023"}
                                    width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                                <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                    width={16} height={16} className={"-mx-5 scale-[0.7] lg:scale-[0.8] xl:scale-100 hidden md:block"} />
                                <Image src={"/images/svg/clinic_lemon.svg"} alt={"16 de Junio de 2023"}
                                    width={280} height={280} className={"scale-75 lg:scale-[0.85] xl:scale-100"} />
                                <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                    width={16} height={16} className={"-mx-4 lg:mx-auto scale-[0.7] lg:scale-[0.8] xl:scale-100 hidden md:block"} />
                                <Image src={"/images/svg/asomedcamLogo.svg"} alt={"16 de Junio de 2023"}
                                    width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                            </div>
                        </div>

                        <div className="">
                            <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Patrocina:</h5>
                            <div className={"flex flex-col md:flex-row items-center w-full justify-center gap-10"}>
                                <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                    width={16} height={16} className={"-mx-4 lg:mx-auto scale-[0.7] lg:scale-[0.8] xl:scale-100 hidden lg:block"} />
                                <Image src={"/images/svg/logoTp.webp"} alt={"16 de Junio de 2023"}
                                    width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100 mt-4"} />
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </section>
    );
}