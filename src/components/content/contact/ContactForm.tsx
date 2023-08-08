import { Input } from "../../ui/Input";
import { Envelope, Person } from "react-bootstrap-icons";
import { ContactType } from "../../../model/types/ContactType";
import { sendContactForm } from "../../../lib/api";
import React, { useState } from "react";
import swal from 'sweetalert';

export const ContactForm = () => {

    const [formSending, setFormSending] = useState("Sin enviar");
    const [formSendingClass, setFormSendingClass] = useState("select-none text-transparent pointer-events-none");

    const [data, setData]: [ContactType, any] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        setFormSending("Espera un momento por favor...");
        setFormSendingClass("text-white");
        await setData({
            name: form.ctName.value,
            email: form.ctEmail.value,
            message: (form.ctMessage as HTMLTextAreaElement).value,
        });
        sendContactForm(data).then((res)=> {
            const ok = res.status === 200;
            const title = ok ? "Estás en las mejores manos" : "Lo sentimos :(";
            const message = ok ? "Hemos recibido tu solicitud, y pronto nos pondremos en contacto contigo" : "Ocurrió un error. Intenta más tarde, o comunícate con nosotros a través de WhatsApp si el problema persiste.";
            const icon = ok ? "success" : "error";
            setFormSending(ok ? "¡Recibido!" : "Ocurrió un error");
            setFormSendingClass(ok ? "text-green-400 animate-shake-bottom" : "text-red-500 animate-shake-horizontal");
            swal({
                title,
                text: message,
                icon,
                buttons: {
                    button: {
                        text: "Cerrar"
                    },
                }
            }).then(() => {
                form.reset();
                setFormSendingClass("select-none text-transparent pointer-events-none")
                setFormSending("Ya envió");
            })
        });

        form.reset();

    }

    return (
        <form onSubmit={handleSubmit} className={"w-full lg:w-192 h-full flex flex-col justify-start items-center lg:px-8"}>
            <Input type={"text"} required label={"Tu nombre"} color={"white"} name={"ctName"} icon={<Person className={"p-3 w-14 h-full"} />} background={"bg-black/20"} />
            <Input type={"email"} required label={"Tu correo"} color={"white"} name={"ctEmail"} icon={<Envelope className={"p-3 w-14 h-full"} />} background={"bg-black/20"} />
            <Input type={"area"} required label={"¿Cómo podemos ayudarte?"} color={"white"} name={"ctMessage"} background={"bg-black/20"} />
            <p className={formSendingClass}>{formSending}</p>
            <input type={"submit"} className={"mt-10 px-12 py-2 text-lg lg:text-2xl text-white border-solid border-2 border-white rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:border-viridian-green focus:border-viridian-green lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"} value={"Enviar"} />
        </form>
    );
}