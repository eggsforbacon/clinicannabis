import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
/* import { Style } from "styles\BannerHead.css"; */
export const IberoamericanoBanner = () => {
    const navigate = useRouter();

    return (
        <section
            className={"font-aeonik text-lemon-chiffon font-normal w-full h-168 lg:h-192 xl:h-208 relative mt-6 lg:mt-16 flex flex-col items-center justify-start lg:pt-24 xl:pt-32"}>
            <Image src={"/images/landing/bannerIberoamericano.png"}
                   alt={""} width={1920} height={1080}
                   className={"pointer-events-none select-none absolute w-full scale-[2.5] top-[17rem] left-52 md:scale-[1.9] lg:scale-[1.4] lg:top-auto lg:bottom-8 lg:left-0 xl:scale-100 xl:top-0 xl:left-0"}
                   quality={100} priority/>
            <article className={"relative w-full lg:px-24 xl:px-44 flex flex-col justify-start items-center lg:gap-14 xl:gap-16 min-h-[20rem]"}>
                <section className={"flex items-center justify-around w-full"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"lg:text-4xl"}>Seminario<br/>Iberoamericano</h1>
                        <h2 className={"lg:text-5xl"}><strong className={"lg:text-6xl tracking-wide"}>Cannabinoides</strong><br/><span
                            className={"underline underline-offset-[14px] decoration-4"}>en la práctica clínica</span>
                        </h2>
                    </div>
                    <Image src={"/images/svg/logoIbero.svg"} alt={"Seminario Iberoamericano 2023"}
                           width={220} height={220}
                           className={""}/>
                </section>
                <section className={"flex items-center justify-center lg:gap-12 xl:gap-16"}>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/images/svg/calendarIbero.svg"} alt={"16 de Junio de 2023"}
                               width={80} height={80} className={""}/>
                        <div className={"lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                            <h3 className={"font-bold"}>Junio de 2023</h3>
                            <h4 className={""}>Santiago de Cali</h4>
                        </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/images/svg/geoIbero.svg"} alt={"16 de Junio de 2023"}
                               width={60} height={60} className={""}/>
                        <div className={"lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                            <h3 className={"font-bold"}>Junio de 2023</h3>
                            <h4 className={""}>Santiago de Cali</h4>
                        </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/images/svg/clockIbero.svg"} alt={"16 de Junio de 2023"}
                               width={60} height={60} className={""}/>
                        <div className={"lg:text-2xl xl:text-3xl flex flex-col items-start justify-center"}>
                            <h3 className={"font-bold"}>Junio de 2023</h3>
                            <h4 className={""}>Santiago de Cali</h4>
                        </div>
                    </div>
                </section>
                <button
                    className={'relative w-fit rounded-full border-solid border-2 border-lemon-chiffon text-center py-1.5 px-5 lg:px-8 lg:py-3 xl:py-4 xl:px-10 backdrop-blur-lg transition duration-300 ease-in-out lg:hover:bg-white/20 lg:hover:shadow-xl lg:hover:-translate-y-4'}>
                    <Link href={"/seminario/seminario-iberoamericano"} className={`text-lg font-semibold tracking-wide`}
                          target="_blank">M&aacute;s informaci&oacute;n</Link>
                </button>
                <section className={"flex flex-col items-stretch w-full justify-start"}>
                    <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Organizan:</h5>
                    <section className={"flex items-center w-full justify-center lg:gap-6 xl:gap-8"}>
                        <Image src={"/images/svg/curativaLogo.svg"} alt={"16 de Junio de 2023"}
                               width={220} height={220} className={"lg:scale-[0.8] xl:scale-100"}/>
                        <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                               width={16} height={16} className={""}/>
                        <Image src={"/images/svg/clinic_lemon.svg"} alt={"16 de Junio de 2023"}
                               width={280} height={280} className={"lg:scale-[0.85] xl:scale-100"}/>
                        <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                               width={16} height={16}/>
                        <Image src={"/images/svg/asomedcamLogo.svg"} alt={"16 de Junio de 2023"}
                               width={220} height={220} className={"lg:scale-[0.8] xl:scale-100"}/>
                    </section>
                </section>
            </article>
        </section>
    );
}