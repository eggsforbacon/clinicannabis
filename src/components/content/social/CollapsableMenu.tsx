"use client"

import {List} from "@/components/icons";
import Link from "next/link";
import React, {useState} from "react";
import {BsFileExcel, BsFilePdf, BsFileWord} from "react-icons/bs";

export default function CollapsableMenu () {

    const [open, setOpen] = useState(false);

    const liStyle = "inline-flex w-full transition-all duration-300 ease-in-out hover:bg-caribbean-green/10 hover:text-caribbean-green cursor-pointer";
    const linkStyle = "w-full h-full px-4 py-2 inline-flex items-center justify-between";

    return (
        <div className="absolute top-6 right-6">
            <button onClick={() => setOpen(!open)} type={"button"} className={`transition-all duration-300 ease-in-out inline-flex items-center gap-8 ${open ? "bg-white text-caribbean-green border-white" : "text-white border-white"} border-2 px-6 py-2 rounded-full focus:outline-none`}>
                Documentos <List className={`transition-all duration-300 ease-in-out ${open ? "fill-caribbean-green" : "!fill-white"}`}
                                 size={24} />
            </button>
            <div
                className={`absolute right-0 mt-2 w-128 bg-white border border-gray-200 shadow-md rounded-md ${open ? "flex" : "hidden"}`}>
                <ul className="py-2">
                    <li className={liStyle}>
                        <Link className={linkStyle} href="/data/politica-ppss-resolucion-2063-de-2017-cartilla.pdf">
                            Cartilla PPSS - Resolución 2063 de 2017 <BsFilePdf className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link className={linkStyle}
                              href="/data/Conformación%20de%20Comité%20Social%20en%20Participación%20en%20Salud.docx">
                            Acta de Conformación de Comité Social en<br/>Participación en Salud <BsFileWord className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link className={linkStyle} href="/data/Acta%20TRD%20101%20PPSS.pdf">
                            Capacitación PPSS en Centro de Medicina Ancestral <BsFilePdf className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link className={linkStyle} href="/data/Acta%20Conformacion%20COPACO.docx">
                            Conformación COPACO <BsFileWord className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link className={linkStyle} href="/data/Asistencia%20Conformacion%20COPACO.pdf">
                            Asistencia Conformación COPACO <BsFilePdf className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                    <li className={liStyle}>
                        <Link className={linkStyle} href="/data/Cronograma%20actividades%20PPSS.xlsx">
                            Cronograma de actividades PPSS <BsFileExcel className={"h-8 aspect-square text-inherit"} size={24}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}