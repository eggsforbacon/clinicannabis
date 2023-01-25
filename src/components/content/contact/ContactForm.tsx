import {Input} from "../../Input";
import {Envelope, Person} from "react-bootstrap-icons";

export const ContactForm = () => {
    return (
        <form className={"w-144 h-full flex flex-col justify-start items-start py-10 gap-14 px-8"}>
            <h1 className={"font-black text-caribbean-green text-7xl"}>¡Contáctanos!</h1>
            <Input type={"text"} required label={"Tu nombre"} color={"viridian-green"} name={"ctName"} icon={<Person className={"p-3 w-14 h-full"} />} />
            <Input type={"mail"} required label={"Tu correo"} color={"viridian-green"} name={"ctEmail"} icon={<Envelope className={"p-3 w-14 h-full"} />} />
            <Input type={"area"} required label={"¿Cómo podemos ayudarte?"} color={"viridian-green"} name={"ctMessage"} />
        </form>
    );
}