import Image from "next/image";
import React from 'react';

export const NanLanding = () => {
    const style = {
        bnrHead: {
            width: "100%",
            objectfit: "Cover"
        },
    };

    return (
        <>
            {/* Inicio Head */}
            <section>
                <div className={'w-100 sm:mb-20 lg:mb-40'}>
                    <Image src={"/images/LandingSeminario/Landing-page---Clinicannabis---Seminario.jpg"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.bnrHead} />
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
                    </article>
                </div>
            </section>
        </>
    );
}

export default NanLanding;