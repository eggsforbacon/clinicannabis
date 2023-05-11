/* import React from "react"; */
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";


export const PopUP = () => {
    // Declaracion y funcion de Estados
    const [openPopUp, setOpenPopUp] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
        }
    }, []);

    const changePopUp = () => {
        // Cambio estado popUp
        setOpenPopUp(false);
        document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    }

    return (
        <section>
            <div className={`${openPopUp ? 'contentAll-popup' : 'contentAll-popup-disable'} relative`}>
                <div className={"popup rounded-m w-100"}>
                    <Image src={"/images/landing/Img-popUP.webp"} quality={100} loading={"lazy"} alt={""} width={1920} height={820} className={""} />
                    <button onClick={changePopUp} className={"btn-close-popUp"}>X</button>
                    
                    <div className="BtnPop-1 btnPop-1">
                        <button type="button" className="btn btn-primary">
                            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfltUdT9RnNeMB-6Kwhf6a2R8ozJnaLjp_GCRBqbkNuPBnPVg/viewform"} className={`!text-white font-bold text-xl`} target="_blank">
                                <span aria-hidden="true">←</span> Preinscribete aquí
                            </Link>
                        </button>
                    </div>

                    <div className="BtnPop-2 btnPop-2">
                        <button type="button" className="btn btn-primary">
                            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfltUdT9RnNeMB-6Kwhf6a2R8ozJnaLjp_GCRBqbkNuPBnPVg/viewform"} className={`!text-white font-bold text-xl`} target="_blank">
                                <span aria-hidden="true">↑</span> Preinscribete aquí
                            </Link>                        
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopUP;