import Link from "next/link";
import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {getLocalStorage, setLocalStorage} from "../../lib/storageHelper";
import GlobalContext from "../../context/GlobalContext";

export const CookieBanner = () => {

    const [cookieConsent, setCookieConsent]: [any, Dispatch<SetStateAction<any>>] = useState(null);
    const {hasWindow} = useContext(GlobalContext);

    useEffect(() => {
        const storedCookieConsent : boolean | null = getLocalStorage("cookie_consent");
        setCookieConsent(storedCookieConsent);
    }, []);

    useEffect(() => {
        if (hasWindow) {

            const newValue = cookieConsent ? 'granted' : 'denied';

            window.gtag("consent", "update", {
                "analytics_storage": newValue,
            });

            setLocalStorage("cookie_consent", cookieConsent);
        }
    }, [cookieConsent]);

    const handleAction = (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => {
        setCookieConsent(value);
        setLocalStorage("cookie_consent", value);
    }

    return (
        <div
            className={`z-50 text-neutral-900 fixed bottom-6 max-w-[960px] mx-6 left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-2xl border-2 border-caribbean-green h-24 w-full rounded-2xl py-1 px-6 box-border ${cookieConsent !== null ? "hidden" : "flex"} items-center justify-between`}>
            <p>{cookieConsent} Utilizamos <Link
                className={"cursor-pointer font-bold text-rich-black transition-all duration-300 ease-in-out hover:text-caribbean-green focus:text-caribbean-green hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4"}
                href={"/legal"}>cookies</Link> para mejorar tu experiencia.</p>
            <section className={"flex items-center justify-end gap-6"}>
                <button onClick={(e) => handleAction(e, true)}
                        className={"px-6 py-3 h-full min-w-[10rem] box-border text-center rounded-full border-2 border-transparent text-neutral-500 font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:border-viridian-green hover:text-white hover:bg-viridian-green"}>Desactivar
                </button>
                <button onClick={(e) => handleAction(e, true)}
                        className={"px-6 py-3 h-full min-w-[10rem] box-border text-center rounded-full border-2 border-transparent shadow-md bg-caribbean-green text-white font-semibold transition-all duration-300 ease-in-out hover:shadow-none hover:bg-white hover:text-caribbean-green hover:border-white"}>Permitir
                    Cookies
                </button>
            </section>
        </div>
    );
}