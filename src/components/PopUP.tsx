/* import React from "react"; */
import Image from "next/image";
import {strings} from "../model/strings";
import React, {useContext, useEffect, useRef, useState} from "react";


export const PopUP = () => {
    // Declaracion y funcion de Estados
    const [openPopUp, setOpenPopUp] = useState(true);
    
    useEffect (() => {
        if (typeof window !== 'undefined') {
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
        }
    }, []);

    const changePopUp =() => {
        // Cambio estado popUp
        setOpenPopUp(false);
        document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    }

    return (
        <section>
            <div className={`${openPopUp ? 'contentAll-popup':'contentAll-popup-disable'} relative debug`}>
                <div className={"popup rounded-m"}>
                    <Image src={"/images/landing/Impop.jpeg"} quality={100} loading={"lazy"} alt={""} width={1920} height={820} className={"pr-5"} />

                    {/* <div className={"contentTXT-popupc"}>
                      <h1 className= {"lg:ml-5 tracking-tight leading-[0.8] lg:leading-[0.6] text-caribbean-green text-6xl lg:text-6xl font-black mb-10 mt-11"}>{strings.landing.popup.headline}</h1>
                        <p className={`lg:ml-5 w-full text-neutral-800 text-left text-base lg:text-2xl font-normal`}>{strings.landing.popup.content}</p>
                    </div> 
                    */}
                    <button onClick={changePopUp} className={"btn-close-popUp"}>X</button>
                </div>
            </div>
        </section>
    );
}

export default PopUP;