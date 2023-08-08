import React, {useState} from "react";
import {Input} from "../../ui/Input";
import {strings} from "../../../model/strings";
import {Envelope, EnvelopePaper} from "react-bootstrap-icons";
import {TOSCheckbox} from "../../TOSCheckbox";
import {sendSubscribeForm} from "../../../lib/api";
import swal from 'sweetalert';

export const FloatingSignupForm = () => {

    const [formHidden, setFormHidden] = useState(true);
    const [formSending, setFormSending] = useState("Sin enviar");
    const [formSendingClass, setFormSendingClass] = useState("select-none text-transparent pointer-events-none");

    const handleShowForm = (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => {
        setFormHidden(!formHidden);
    };

    const [data, setData] = useState({
        email: "",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        setFormSending("Espera un momento por favor...");
        setFormSendingClass("text-neutral-400");
        await setData({
            email: form.subEmail.value,
        });
        sendSubscribeForm(data).then((res) => {
            const ok = res.status === 200;
            const title = ok ? "¡Gracias!" : "Lo sentimos :(";
            const message = ok ? "Te has suscrito con éxito a nuestro newsletter." : "No pudimos agregarte a nuestro newsletter. Intenta más tarde, o comunícate con nosotros a través de WhatsApp si el problema persiste.";
            const icon = ok ? "success" : "error";
            const buttonText = ok ? "¡Genial!" : "Cerrar";
            setFormSending(ok ? "¡Gracias por suscribirte!" : "Ocurrió un error");
            setFormSendingClass(ok ? "text-green-400 animate-shake-bottom" : "text-red-500 animate-shake-horizontal");
            swal({
                title,
                text: message,
                icon,
                buttons: {
                    button: {
                        text: buttonText
                    },
                }
            }).then(() => {
                form.reset();
                setFormHidden(true);
                setFormSendingClass("select-none text-transparent pointer-events-none")
                setFormSending("Ya envió");
            })
        });
    }

    return (
        <div className={`${formHidden ? "pointer-events-none" : "pointer-events-auto"} w-full z-20 h-full absolute top-0 left-0`}>
            <span onClick={handleShowForm} className={`${formHidden ? "pointer-events-none" : "pointer-events-auto"} hover:cursor-default select-none fixed z-0 top-0 left-0 w-full h-full`} />
            <aside
                className={"z-50 fixed right-2 bottom-4 left-2 lg:right-8 lg:bottom-8 w-[95%] flex flex-col-reverse items-end justify-end gap-4"}>
                <button
                    onClick={handleShowForm}
                    className={"pointer-events-auto py-4 rounded-full px-10 relative z-20 font-semibold text-white flex items-center justify-center space-x-4 bg-viridian-green/50 backdrop-blur-lg fill-white shadow-md border-solid border-[3px] border-viridian-green transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:bg-caribbean-green hover:border-white"}>
                    <EnvelopePaper size={32}/>
                    <p className={"max-md:hidden"}>{strings.blog.form.cta}</p>
                </button>
                <form onSubmit={handleSubmit}
                    className={`${formHidden ? "translate-y-[600px] animate-fade-out-top-blog" : "translate-y-[600px] animate-fade-in-bottom-blog"} opacity-0 z-10 bottom-24 w-full lg:max-w-[36rem] py-8 px-10 absolute flex flex-col items-center justify-start gap-4 bg-white border-solid border-neutral-400 border-2 rounded-2xl`}>
                    <h2 className={"font-semibold text-3xl text-rich-black"}>{strings.blog.form.title}</h2>
                    <p>{strings.blog.copy}</p>
                    <Input required type={"email"} label={strings.blog.form.fields.mail} color={"GO-green"} name={"subEmail"}
                           unFocusedColor={"neutral-400"} icon={<Envelope className={"p-3 w-14 h-full"} />}/>
                    <TOSCheckbox/>
                    <p className={formSendingClass}>{formSending}</p>
                    <input type={"submit"}
                           className={"mt-10 px-12 py-2 text-lg lg:text-2xl text-neutral-400 border-solid border-2 border-neutral-400 rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:border-GO-green focus:border-GO-green lg:hover:bg-GO-green focus:bg-GO-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"}
                           value={strings.blog.form.fields.submit}/>
                </form>
            </aside>
        </div>
    );
}
