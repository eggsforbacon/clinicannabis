import Image from "next/image";
import React, {useState} from "react";
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

        imgAgenda:{
            display: "block",
            margin: "auto",
        }
    };

    
    const [data , setData] = useState({
        name: "", 
        email: "", 
        phone: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = (e.target);
        await setData({
            name : form.ctName.value,
            email : form.ctEmail.value,
            phone : form.ctPhone.value,
        });
        console.log("Form says: ", data);
        await sendContactForm(data);
    }

    return(
        <section style={style.ImgContent}>
            {/* Inicio Head */}
            <div className={'w-100 sm:mb-20 lg:mb-40'}>
                <Image src={"/images/LandingSeminario/Landing page - Clinicannabis - Seminario_Mesa de trabajo 1.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520} 
                style={style.bnrHead} />
            </div>

            {/* Inicio parte del Form e info */}
            <div className={"flex items-center justify-evenly lg:mb-40"}>
                <div className="infoSeminarioForm">
                    <article>
                        <p className={'mb-10'}><strong>Santiago de Cali será sede del Seminario Iberoamericano Cannabinoides</strong> 
                            en la práctica clínica, una apuesta por realizar un recorrido
                            académico a través de los conceptos básicos de la medicina cannábica.
                        </p>

                        <p><strong>Clinicannabis Medicina Integrativa, pionera en la aplicación de medicina cannábica en el suroccidente colombiano</strong>,
                            es el anfitrión de este gran evento que reúne a profesionales de amplia trayectoria y estudiantes universitarios 
                            de las áreas de la salud, para adentrarse en el campo del Sistema Endocannabinoide y sus aplicaciones en el manejo del dolor. 
                        </p>
                    </article>
                </div>

                <div>
                    <form className={"justify-start items-center gap-4"}>
                        <label className="form-label"> Nombre
                            <input type={"text"} required label={"Tu nombre"} color={"white"} name={"ctName"} className="px-4 py-3 rounded-full"/>
                        </label>

                        <label className="form-label"> Email
                            <input type={"email"} required label={"Tu correo"} color={"white"} name={"ctEmail"} className="px-4 py-3 rounded-full"/>
                        </label>

                        <label className="form-label"> Teléfono
                            <input type={"Phone"} required label={"Tu nombre"} color={"white"} name={"ctPhone "} className="px-4 py-3 rounded-full"/>
                        </label>
                        
                        <input type="checkbox" required className="text-pink-500"/> Acepto Términos y Condiciones

                        <input type={"submit"} className={"px-12 py-2 text-lg lg:text-2xl text-white border-solid border-2 border-white rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:border-viridian-green focus:border-viridian-green lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"} value={"Enviar"}/>
                    </form>
                </div>
            </div>
            {/* Inicio Agenda */}
            <div className="Agenda">
            <div className={'w-100 sm:mb-20 lg:mb-40'}>
                <Image src={"/images/LandingSeminario/Landing page - Clinicannabis - Seminario_Mesa de trabajo 1.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520} 
                style={style.imgAgenda} />
            </div>
            </div>
            {/* Inicio Conferecistas */}

            {/* Inicio Google Maps */}

            {/* Inicio footer */}
            <div className={'w-100'}>
                <Image src={"/images/LandingSeminario/Landing page-Clinicannabis-Seminario-03.png"} loading={"lazy"} alt={"Seminario iberoamericano"} width={1920} height={520} 
                style={style.bnrHead} />
            </div>
        </section>
    );
}

export default Seminario;