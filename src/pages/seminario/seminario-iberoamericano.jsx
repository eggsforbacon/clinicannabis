import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { strings } from "../../model/strings";
import { sendContactForm } from "../../lib/api";
import useCountDown from 'react-countdown-hook';

import { Timer } from "../../components/TimerLand";
import { Helmet } from "react-helmet";

export const Seminario = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = (e.target);
        await setData({
            name: form.ctName.value,
            email: form.ctEmail.value,
            phone: form.ctPhone.value,
        });
        console.log("Form says: ", data);
        await sendContactForm(data);
    }
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [modal1, setModal1] = useState(false);
    const toggleModal1 = () => {
        setModal1(!modal1);
    }
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => {
        setModal2(!modal2);
    }
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
        setModal3(!modal3);
    }
    const [modal4, setModal4] = useState(false);
    const toggleModal4 = () => {
        setModal4(!modal4);
    }
    const [modal5, setModal5] = useState(false);
    const toggleModal5 = () => {
        setModal5(!modal5);
    }
    const [modal6, setModal6] = useState(false);
    const toggleModal6 = () => {
        setModal6(!modal6);
    }
    const [modal7, setModal7] = useState(false);
    const toggleModal7 = () => {
        setModal7(!modal7);
    }
    if (typeof window !== "undefined") {
        if (modal) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal1) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal2) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal3) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal4) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal5) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal6) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        //
        if (modal7) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Seminario Iberoamericano</title>
                <meta name="description" content="Seminario Iberoamericano Cannabinoides en la práctica clínica"></meta>
                <meta name="Robots" content="index, follow"></meta>
                <link rel="canonical" href="https://clinicannabis.com.co/seminario/seminario-iberoamericanos" />
            </Helmet>
            <section style={style.ImgContent}>
                <div className={'w-100 sm:mb-20 lg:mb-40 font-aeonik text-lemon-chiffon font-normal w-full'}>
                    <Image src={"/images/LandingSeminario/Landing-page---Clinicannabis---Seminario.jpg"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        className="ImgHeadLand" />
                    <article className={"NavLand"}>
                        <section className={"flex justify-center w-full pstn-1"}>
                            <Image src={"/images/svg/logoIbero2.webp"} alt={"Seminario Iberoamericano 2023"}
                                width={220} height={220}
                                className={"scale-[0.65] md:scale-100"} />

                            <div className={"flex flex-col items-stretch text-center md:text-left md:items-start"}>
                                <h1 className={"text-3xl lg:text-4xl"}>Seminario<br />Iberoamericano</h1>
                                <h2 className={"text-4xl lg:text-5xl"}><strong className={"text-5xl lg:text-6xl tracking-wide"}>Cannabinoides</strong><br /><span
                                    className={"underline underline-offset-[10px] lg:underline-offset-[14px] decoration-[3px] lg:decoration-4"}>en la práctica clínica</span>
                                </h2>
                            </div>
                        </section>

                        <section className={"flex justify-center icons-landg"}>
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

                        <section className={"w-full mgLogos sm-mb-20"}>
                            <div>
                                <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Organizan:</h5>
                                <div className={"flex logLanding"}>
                                    <Image src={"/images/svg/curativaLogo.svg"} alt={"16 de Junio de 2023"}
                                        width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100 pr-2 mr-5"} />
                                    <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                        width={16} height={16} className={"-mx-5 scale-[0.7] lg:scale-[0.8] xl:scale-100 lineLandg"} />
                                    <Image src={"/images/svg/clinic_lemon.svg"} alt={"16 de Junio de 2023"}
                                        width={280} height={280} className={"scale-75 lg:scale-[0.85] xl:scale-100"} />
                                    <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                        width={16} height={16} className={"-mx-4 lg:mx-auto scale-[0.7] lg:scale-[0.8] xl:scale-100 lineLandg"} />
                                    <Image src={"/images/svg/asomedcamLogo.svg"} alt={"16 de Junio de 2023"}
                                        width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100"} />
                                </div>
                            </div>

                            <div className="sm-Log2">
                                <h5 className={"uppercase text-center tracking-[0.2em] lg:text-base xl:text-lg"}>Patrocina:</h5>
                                <div className={"flex items-center w-full justify-center gap-10"}>
                                    <Image src={"/images/svg/squiggly.svg"} alt={"16 de Junio de 2023"}
                                        width={16} height={16} className={"-mx-4 lg:mx-auto scale-[0.7] lg:scale-[0.8] xl:scale-100 ds-imgLanding"} />
                                    <Image src={"/images/svg/logoTp.webp"} alt={"16 de Junio de 2023"}
                                        width={220} height={220} className={"scale-[0.7] lg:scale-[0.8] xl:scale-100 log2-landng"} />
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
                {/*   contexr   */}
                <div className={"content-form-TXT sm:mt-20"}>
                    <div className="infoSeminarioForm">
                        <article>
                            <p className={" text-xl text-P-seminario sm:mb-5 lg:mb-15"}><b>{strings.seminario.parrafo["1"].blackText}</b>{strings.seminario.parrafo["1"].normalText}</p>

                            <p className={" text-xl text-P-seminario sm:mt-5 lg:mt-5 sm-mg-txt"}><b>{strings.seminario.parrafo["2"].blackText}</b>{strings.seminario.parrafo["2"].normalText}</p>
                        </article>
                    </div>
                </div>
                <br />
                {/* <Timer /> */}
                {/* Inicio Agenda */}
                <div className="Agenda mb-20 mt-10">
                    <div className="inf-landng__pic-1 mb-20">
                        <Image src={"/images/LandingSeminario/adpatacion web - infografia_Mesa de trabajo 1.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            className={'info-img info-img-1'} />
                    </div>
                    <div className="inf-landng__pic-2 mb-20">
                        <Image src={"/images/LandingSeminario/adpatacion web - infografia-03.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            className={'info-img'} />
                    </div>
                </div>
                {/* Inicio Conferecistas */}
                <div className="conferencistas mb-10 mt-10">
                    <div className={'mb-5'}>
                        <Image src={"/images/LandingSeminario/conferenci.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            style={style.imgAgenda} className={'img-conf'} />
                    </div>

                    <div className="cards-conferences">
                        {/* Card 1 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-07.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-social card-title text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["1"].academy}
                                    <b>{strings.seminario.conference["1"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["1"].contry}</p>
                                {/*  */}
                                <button onClick={toggleModal} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal && (
                                        <div className="modal modal-0">
                                            <div onClick={toggleModal} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["1"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["1"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["1"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["1"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-08.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["2"].academy}
                                    <b>{strings.seminario.conference["2"].name}</b>
                                </p>

                                <p className={"text-center text-lg"}>{strings.seminario.conference["2"].contry}</p>
                                {/*  */}
                                <button onClick={toggleModal1} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal1 && (
                                        <div className="modal1 modal-1">
                                            <div onClick={toggleModal1} className="overlay"></div>

                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2 modal__title"}><b>{strings.seminario.conferecistas["2"].title}</b></p>
                                                <p className={"text-left text-lg mb-2 modal__description"}>{strings.seminario.conferecistas["2"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3 modal__text"}>{strings.seminario.conferecistas["2"].indice}</p>
                                                <p className={"text-left text-lg mb-4 modal__text"}>{strings.seminario.conferecistas["2"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal1}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-09.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["3"].academy}
                                    <b>{strings.seminario.conference["3"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["3"].contry}</p>

                                {/*  */}
                                <button onClick={toggleModal2} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal2 && (
                                        <div className="modal2 modal-2">
                                            <div onClick={toggleModal2} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["3"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["3"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["3"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["3"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal2}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-10.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["4"].academy}
                                    <b>{strings.seminario.conference["4"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["4"].contry}</p>
                                {/*  */}
                                <button onClick={toggleModal3} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <article className="">
                                    {modal3 && (
                                        <div className="moda3 modal-3">
                                            <div onClick={toggleModal3} className="overlay"></div>
                                            <div className={'modal-content'}>
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["4"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["4"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["4"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["4"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal3}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </article>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-12.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["6"].academy}
                                    <b>{strings.seminario.conference["6"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["6"].contry}</p>

                                {/*  */}
                                <div className="">
                                    <button onClick={toggleModal4} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>

                                    {modal4 && (
                                        <div className="modal mda-0">
                                            <div onClick={toggleModal4} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["6"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["6"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["6"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["6"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal4}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 6*/}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-13.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["7"].academy}
                                    <b>{strings.seminario.conference["7"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["7"].contry}</p>

                                {/*  */}
                                <button onClick={toggleModal5} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal5 && (
                                        <div className="modal1 mda-1">
                                            <div onClick={toggleModal5} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["7"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["7"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["7"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["7"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal5}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-14.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["8"].academy}
                                    <b>{strings.seminario.conference["8"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["8"].contry}</p>

                                {/*  */}
                                <button onClick={toggleModal6} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal6 && (
                                        <div className="modal2 mda-2">
                                            <div onClick={toggleModal6} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["8"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["8"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["8"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["8"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal6}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="card">
                            <div className="card-info">
                                <div className="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-15.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div className="card-title card-social text-text-title">
                                <p className={"text-center text-lg"}>{strings.seminario.conference["9"].academy}
                                    <b>{strings.seminario.conference["9"].name}</b>
                                </p>
                                <p className={"text-center text-lg"}>{strings.seminario.conference["9"].contry}</p>
                                {/*  */}
                                <button onClick={toggleModal7} className={'btn-modal bg-[#584280] rounded-full'}>Open</button>
                                <div className="">
                                    {modal7 && (
                                        <div className="moda3 mda-3">
                                            <div onClick={toggleModal7} className="overlay"></div>
                                            <div className="modal-content">
                                                <p className={"text-left text-lg mb-2"}><b>{strings.seminario.conferecistas["9"].title}</b></p>
                                                <p className={"text-left text-lg mb-2"}>{strings.seminario.conferecistas["9"].subtitle}</p>
                                                <p className={"text-left text-lg mb-3"}>{strings.seminario.conferecistas["9"].indice}</p>
                                                <p className={"text-left text-lg mb-4"}>{strings.seminario.conferecistas["9"].txt}</p>
                                                <button className="close-modal" onClick={toggleModal7}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                {/* Inicio Google Maps */}
                <div className={"apoyo mt-20"}>
                    
                    <div className={''}>
                        <Image src={"/images/LandingSeminario/apoyaron.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            style={style.imgAgenda} className={'img-conf'} />
                    </div>

                    <div className="inf-landng__pic-1">
                        <Image src={"/images/LandingSeminario/Apoyo-Clinicannabis-Seminario.jpg"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            className={'apoyo-img'} />
                    </div>
                    <div className="inf-landng__pic-2">
                        <Image src={"/images/LandingSeminario/infografia-apoya-05.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            className={'apoyo-img'} />
                    </div>
                </div>
                {/* Inicio footer */}
                <div className={'w-100'} >
                    <Image src={"/images/LandingSeminario/Landing page-Clinicannabis-Seminario.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.bnrHead} />
                </div >
            </section >
        </>
    );
}

const style = {
    ImgContent: {
        width: "100%",
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("/images/LandingSeminario/Landing-page-Clinicannabis-Seminario-02.png")`,
    },

    bnrHead: {
        width: "100%",
        height: "auto",
        objectfit: "Cover",
        position: "absolute",
        marginbottom: "40px",
    },

    imgAgenda: {
        width: "35%",
        display: "block",
        margin: "auto",
        objectFit: 'cover',
    }
};

export default Seminario;