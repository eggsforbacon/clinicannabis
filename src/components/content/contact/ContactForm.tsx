import {Input} from "../../Input";
import {Envelope, Person} from "react-bootstrap-icons";
import {ContactType} from "../../../model/types/ContactType";
import {sendContactForm} from "../../../lib/api";
import React, {useState} from "react";

export const ContactForm = () => {

    const [data , setData] : [ContactType, any] = useState({
        name : "",
        email : "",
        message : ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        await setData({
            name : form.ctName.value,
            email : form.ctEmail.value,
            message : (form.ctMessage as HTMLTextAreaElement).value,
        });
        console.log("Form says: ", data);
        await sendContactForm(data);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
    }

    return (
        <form className={"w-144 h-full flex flex-col justify-start items-start py-10 gap-14 px-8"} onSubmit={handleSubmit}>
            <h1 className={"font-black text-caribbean-green text-7xl"}>¡Contáctanos!</h1>
            <Input type={"text"} required label={"Tu nombre"} color={"viridian-green"} name={"ctName"} icon={<Person className={"p-3 w-14 h-full"} />} />
            <Input type={"mail"} required label={"Tu correo"} color={"viridian-green"} name={"ctEmail"} icon={<Envelope className={"p-3 w-14 h-full"} />} />
            <Input type={"area"} required label={"¿Cómo podemos ayudarte?"} color={"viridian-green"} name={"ctMessage"} />
            <input type={"submit"} className={"px-16 py-2 text-2xl text-viridian-green bg-white border-solid border-2 border-viridian-green rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"} value={"Enviar"}/>
        </form>
    );
}