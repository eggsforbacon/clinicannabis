import Image from "next/image";
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

    return (
        <section style={style.ImgContent}>
            {/* Inicio Head */}
            <div className={'w-100 sm:mb-20 lg:mb-40'}>
                <Image src={"/images/LandingSeminario/Landing page - Clinicannabis - Seminario_Mesa de trabajo 1.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                    style={style.bnrHead} />
            </div>

            {/*      */}
            <div className={"flex items-center justify-evenly lg:mb-40"}>
                <div className="infoSeminarioForm">
                    <article>
                        <p className={" text-xl text-P-seminario"}><b>{strings.seminario.parrafo["1"].blackText}</b></p>
                        <p className={"text-lg text-seminari mb-5"}>{strings.seminario.parrafo["1"].normalText}</p>

                        <p className={" text-xl text-P-seminario"}><b>{strings.seminario.parrafo["2"].blackText}</b></p>
                        <p className={" text-lg text-seminari"}>{strings.seminario.parrafo["2"].normalText}</p>
                    </article>
                </div>

                <div>
                    <form className={"justify-start items-center gap-4"}>
                        <label className="form-label"> Nombre
                            <input type={"text"} required label={"Tu nombre"} color={"white"} name={"ctName"} className="px-4 py-3 rounded-full" />
                        </label>

                        <label className="form-label"> Email
                            <input type={"email"} required label={"Tu correo"} color={"white"} name={"ctEmail"} className="px-4 py-3 rounded-full" />
                        </label>

                        <label className="form-label"> Teléfono
                            <input type={"Phone"} required label={"Tu nombre"} color={"white"} name={"ctPhone "} className="px-4 py-3 rounded-full" />
                        </label>

                        <input type="checkbox" required className="text-pink-500" /> Acepto Términos y Condiciones
                        <input type={"submit"} className={"px-12 py-2 text-lg lg:text-2xl text-white border-solid border-2 border-white rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:border-viridian-green focus:border-viridian-green lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"} value={"Enviar"} />
                    </form>
                </div>
            </div>
            {/* Inicio Agenda */}
            <div className="Agenda mb-20">
                <div className={'mb-20'}>
                    <Image src={"/images/LandingSeminario/Clinicannabis-Seminario-04.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.imgAgenda} />
                    <p className={"text-center text-2xl text-text-title"}>{strings.seminario.subtitle}</p>
                </div>
                <div className={"CronogramaSeminario flex flex-row justify-around"}>
                    <div className="StepCrono-1">
                        <div className="infoSeminario text-text-title">
                            <p className={"text-left text-lg"}><b>{strings.seminario.sections["1"].time}</b></p>
                            <p className={"text-left text-lg mb-6"}>{strings.seminario.sections["1"].info}</p>
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
                        style={style.imgAgenda} />
                </div>

                <div className="cards-conferences flex flex-wrap justify-evenly	">
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-07.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-social card-title text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["1"].academy}
                                <b>{strings.seminario.conference["1"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["1"].contry}</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-08.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["2"].academy}
                                <b>{strings.seminario.conference["2"].name}</b>
                            </p>

                            <p className={"text-left text-lg"}>{strings.seminario.conference["2"].contry}</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-09.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["3"].academy}
                                <b>{strings.seminario.conference["3"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["3"].contry}</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-10.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["4"].academy}
                                <b>{strings.seminario.conference["4"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["4"].contry}</p>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-11.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["5"].academy}
                                <b>{strings.seminario.conference["5"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["5"].contry}</p>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-12.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["6"].academy}
                                <b>{strings.seminario.conference["6"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["6"].contry}</p>
                        </div>
                    </div>
                    {/* Card 7*/}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-13.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["7"].academy}
                                <b>{strings.seminario.conference["7"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["7"].contry}</p>
                        </div>
                    </div>
                    {/* Card 8 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-14.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["8"].academy}
                                <b>{strings.seminario.conference["8"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["8"].contry}</p>
                        </div>
                    </div>
                    {/* Card 9 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-15.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["9"].academy}
                                <b>{strings.seminario.conference["9"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["9"].contry}</p>
                        </div>
                    </div>
                    {/* Card 10 */}
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar">
                                <Image src={"/images/LandingSeminario/Conferences/Landing page - Clinicannabis - Seminario-16.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                                    style={{}} />
                            </div>
                        </div>

                        <div class="card-title card-social text-text-title">
                            <p className={"text-left text-lg"}>{strings.seminario.conference["10"].academy}
                                <b>{strings.seminario.conference["10"].name}</b>
                            </p>
                            <p className={"text-left text-lg"}>{strings.seminario.conference["10"].contry}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Inicio Google Maps */}
            <div className="ubication">
                <div className={''}>
                    <Image src={"/images/LandingSeminario/Ubication.png "} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                        style={style.imgAgenda} />
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.563306712596!2d-76.53850312611074!3d3.4557794511935027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f19d047757%3A0x14b8c3e63b55e08a!2sCali%20Marriott%20Hotel!5e0!3m2!1sen!2sco!4v1684265260790!5m2!1sen!2sco"
                        width="1262" height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            {/* Inicio footer */}
            <div className={'w-100'}>
                <Image src={"/images/LandingSeminario/Landing page-Clinicannabis-Seminario-03.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520}
                    style={style.bnrHead} />
            </div>
        </section>
    );
}

export default Seminario;