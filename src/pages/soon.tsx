import {NextPage} from "next";
import Image from "next/image";
import {strings} from "../model/strings";
import {Input} from "../components/Input";
import {Envelope, Facebook, Instagram, Youtube} from "react-bootstrap-icons";
import React, {useState} from "react";
import Link from "next/link";
import {sendContactForm, sendSubscribeForm} from "../lib/api";
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from "react-google-recaptcha-v3";

const soon: NextPage = () => {

    const [thankYouStyle, setThankYouStyle] = useState("opacity-0");
    const [subEmail, setSubEmail] = useState("");
    const {executeRecaptcha} = useGoogleReCaptcha();

    const showThankYou = () => {
        setThankYouStyle("opacity-100");
        let run = 0;
        const shownInterval = setInterval(() => {
            if (run === 1) {
                setThankYouStyle("opacity-0");
                clearInterval(shownInterval);
            }
            run++;
        }, 2500);
    }

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        showThankYou();
        const form = e.target as HTMLFormElement;
        (form.ctSubmit as HTMLInputElement).blur();
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            console.log(gReCaptchaToken, "response Google reCaptcha server");
            sendSubscribeForm({email: subEmail, gToken: gReCaptchaToken});
            setSubEmail(form.ctEmail.value);
        });

    }

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <main>
                <article className={"flex flex-col items-center justify-start pt-16 gap-8"}>
                    <Image src={"/images/soon/clinilogo.jpg"} alt={""} width={500} height={300}/>
                    <h1 className={"text-skobeloff text-7xl font-black"}>{strings.soon.headline}</h1>
                    <p className={"text-xl w-288 italic font-normal text-neutral-900 text-center"}>{strings.soon.copy}</p>
                    <section className={"mt-20 flex flex-col items-center justify-between"}>
                        <form className={"flex flex-col items-center justify-center gap-6"} onSubmit={handleSubscribe}>
                            <Input type={"email"} label={strings.soon.mail} labelColor={"bg-white"}
                                   color={"viridian-green"} name={"ctEmail"}
                                   icon={<Envelope className={"p-3 w-14 h-full"}/>}/>
                            <input type={"submit"}
                                   className={"px-16 py-2 text-2xl text-viridian-green bg-white border-solid border-2 border-viridian-green rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"}
                                   value={strings.soon.mailAction} name={"ctSubmit"}/>
                            <p className={`transition duration-500 ease-in-out ${thankYouStyle} text-viridian-green text-xl font-normal`}>¡Gracias
                                por suscribirte!</p>
                        </form>
                        <ul className={"flex items-center justify-start"}>
                            <li>
                                <Link href={"https://www.facebook.com/Clinicanabis"} target={"_blank"}>
                                    <Facebook
                                        className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                    <p className={"sr-only"}>Facebook</p>
                                </Link>
                            </li>
                            <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                            <li>
                                <Link href={"https://www.instagram.com/clinicanabis/"} target={"_blank"}>
                                    <Instagram
                                        className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                    <p className={"sr-only"}>Instagram</p>
                                </Link>
                            </li>
                            <span className={"h-full w-[2px] bg-white mx-3.5"}/>
                            <li>
                                <Link href={"https://www.youtube.com/@clinicannabis9526"} target={"_blank"}>
                                    <Youtube
                                        className={"h-6 w-6 fill-caribbean-green transition duration-300 quintic-in-out lg:hover:scale-110 focus:scale-110"}/>
                                    <p className={"sr-only"}>YouTube</p>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section
                        className={"-mt-3 text-base text-neutral-300 font-normal grid grid-cols-1 place-items-center w-full py-3"}>
                        <p>{strings.footer.copy}</p>
                    </section>
                </article>
            </main>
        </GoogleReCaptchaProvider>
    );
}

export default soon;