import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { strings } from "../../model/strings";
import { sendContactForm } from "../../lib/api";

export const Seminario = () => {
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
            objectfit: "Cover"
        },

        imgAgenda: {
            width: "35%",
            display: "block",
            margin: "auto",
            objectFit: 'cover',
        }
    };

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
            <section style={style.ImgContent}>
                {/* Inicio Head */}
                <div className={'w-100 sm:mb-20 lg:mb-40'}>
                    <Image src={"/images/LandingSeminario/Landing page - Clinicannabis - Seminario__Mesa de trabajo 1.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.bnrHead} />
                </div>
                {/*   form y contexr   */}
                <div className={"content-form-TXT lg:mb-40"}>
                    <div className="infoSeminarioForm">
                        <article>
                            <p className={" text-xl text-P-seminario sm:mb-5 lg:mb-15"}><b>{strings.seminario.parrafo["1"].blackText}</b>{strings.seminario.parrafo["1"].normalText}</p>

                            <p className={" text-xl text-P-seminario sm:mt-5 lg:mt-5 sm-mg-txt"}><b>{strings.seminario.parrafo["2"].blackText}</b>{strings.seminario.parrafo["2"].normalText}</p>
                        </article>
                    </div>

                    <div className={'mg-Crd'}>
                        <div class="card-Crd">
                            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdmxYGuJwxoT-TMJtB6155LG80Dil0bMh53P0JsXBu_AiZVzg/viewform"} className={`text-button`} target="_blank">
                                <p className={"text-lg text-P-seminario card__title"}><b>{strings.seminario.cardInfo["3"].title}</b></p>
                            </Link>

                            <div class="card__date">
                               <p>{strings.seminario.cardInfo["3"].fecha}</p>
                            </div>
                            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdmxYGuJwxoT-TMJtB6155LG80Dil0bMh53P0JsXBu_AiZVzg/viewform"} className={`text-button`} target="_blank">
                                <div class="card__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Inicio Agenda */}
                <div className="Agenda mb-20">
                    <div className={'mb-20'}>
                        <Image src={"/images/LandingSeminario/Clinicannabis-Seminario-04.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            style={style.imgAgenda} className={'img-conf'} />
                        <p className={"text-center text-2xl text-text-title"}>{strings.seminario.subtitle}</p>
                    </div>
                    <div className={"CronogramaSeminario InfoCronograma"}>
                        <div className="StepCrono-1">
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg text-xl-6"}><b>{strings.seminario.sections["1"].time}</b></p>
                                <p className={"text-left text-lg mb-6 text-xl-6"}>{strings.seminario.sections["1"].info}</p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["2"].time}</b></p>
                                <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["2"].info}</p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["3"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["3"].info} -
                                    {strings.seminario.sections["3"].name} - {strings.seminario.sections["3"].contry}
                                </p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["4"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["4"].info} -
                                    {strings.seminario.sections["4"].name} - {strings.seminario.sections["4"].contry}
                                </p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["5"].time}</b></p>
                                <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["5"].info}</p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["6"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["6"].info} <br />
                                    {strings.seminario.sections["6"].name} - {strings.seminario.sections["6"].contry}
                                </p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["7"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["7"].info} <br />
                                    {strings.seminario.sections["7"].name} - {strings.seminario.sections["7"].contry}
                                </p>
                            </div>
                        </div>

                        <div className="StepCrono-2">
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["8"].time}</b></p>
                                <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["8"].info}</p>
                            </div>

                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["9"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["9"].info}- <br />
                                    {strings.seminario.sections["9"].name} - {strings.seminario.sections["9"].contry}
                                </p>
                            </div>

                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["10"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["10"].info} - <br />
                                    {strings.seminario.sections["10"].name} - {strings.seminario.sections["10"].contry}
                                </p>
                            </div>

                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["11"].time}</b></p>
                                <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["11"].info}</p>
                            </div>

                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["12"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["12"].info} <br />
                                    {strings.seminario.sections["12"].name} - {strings.seminario.sections["12"].contry}

                                </p>
                            </div>

                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["13"].time}</b></p>
                                <p className={"text-left text-lg mb-6 leading-5"}>
                                    {strings.seminario.sections["13"].info} - <br />
                                    {strings.seminario.sections["13"].name} - {strings.seminario.sections["13"].contry}
                                </p>
                            </div>
                            <div className="infoSeminario text-text-title">
                                <p className={"text-left text-lg"}><b>{strings.seminario.sections["14"].time}</b></p>
                                <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["14"].info}</p>
                            </div>
                        </div>
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
                        <div class="card">
                            <div class="card-info">
                                <div class="card-avatar">
                                    <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-07.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                        style={{}} />
                                </div>
                            </div>

                            <div class="card-social card-title text-text-title">
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
                < div className="ubication" >
                    <div className={''}>
                        <Image src={"/images/LandingSeminario/Ubication.png "} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                            style={style.imgAgenda} className={'img-conf'} />
                    </div>
                    <div className="Google-map">
                        <iframe className={"map"}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.563306712596!2d-76.53850312611074!3d3.4557794511935027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f19d047757%3A0x14b8c3e63b55e08a!2sCali%20Marriott%20Hotel!5e0!3m2!1sen!2sco!4v1684265260790!5m2!1sen!2sco"
                            width="1262" height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div >
                {/* Inicio footer */}
                < div className={'w-100'} >
                    <Image src={"/images/LandingSeminario/Landing page-Clinicannabis-Seminario--03.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.bnrHead} />
                </div >
            </section >
        </>
    );
}

export default Seminario;