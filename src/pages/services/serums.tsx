import {NextPage} from "next";
import Head from "next/head";
import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import {strings} from "../../model/strings";
import {SerumCard} from "../../components/SerumCard";
import {ISerumColors} from "../../model/interfaces";
import {GenderFemale, GenderMale} from "react-bootstrap-icons";
import {MaterialSymbol} from "react-material-symbols";
import Image from "next/image";

const Serums: NextPage = () => {

    const initialColors: ISerumColors = {
        asideColor: "bg-midnight-green", textColor: "text-viridian-green", titleColors: "text-white"
    }

    const [currentColors, setCurrentColors] = useState({index: "0", aside: "default.png",  ...initialColors});

    const availableColors: ISerumColors[] = [
        {
            asideColor: "bg-[#6e5593]",
            textColor: "text-[#6e5593]",
            titleColors: "text-white",
            bg: "bg-[#f2d4f4]",
        },
        {
            asideColor: "bg-[#1A5B70]",
            textColor: "text-[#2684a2]",
            titleColors: "text-white",
            bg: "bg-[#d3e7f4]",
        },
        {
            asideColor: "bg-[#ae6d15]",
            textColor: "text-[#dd820a]",
            titleColors: "text-white",
            bg: "bg-[#edf5f9]",
        }
    ]

    const images = [
        ["/images/services/serums/backgrounds/1.png", "/images/services/serums/foregrounds/1.png"],
        ["/images/services/serums/backgrounds/2.png", "/images/services/serums/foregrounds/2.png", "/images/services/serums/foregrounds/2.1.png"],
        ["/images/services/serums/backgrounds/3.png", "/images/services/serums/foregrounds/3.png"],
    ]

    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Nuestros Sueros</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={"Los sueros endovenosos terapéuticos fortalecen el sistema inmune, contribuyendo a la revitalización celular, fomentando la eliminación de toxinas y potenciando el tratamiento para enfermedades crónicas. ¡Hay uno elaborado especialmente para ti!"}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"services"}/>
            <section className={"relative flex justify-evenly w-full h-screen pt-28"}>
                <section
                    className={"pb-16 overflow-y-auto scrollbar scrollbar-none overflow-x-clip relative w-full lg:w-[60%] flex flex-col items-stretch justify-start z-10 pt-10 px-6 lg:pl-16"}>
                    <h1 className={"leading-[0.8] lg:leading-normal text-center lg:text-left text-7xl font-black text-rich-black"}>{strings.services.serums.headline}<strong
                        className={"text-caribbean-green"}>{strings.services.serums.remark}</strong></h1>
                    <section
                        className={"relative z-0 pt-16 lg:pt-6 w-full grid grid-flow-row justify-center lg:grid-cols-2 xl:grid-cols-3 gap-y-8 items-stretch"}>
                        {availableColors.map((colors, index) => {
                            return (
                                <SerumCard setCurrentColors={setCurrentColors} bg={availableColors[index].bg} index={(index + 1).toString()}
                                           icon={<Image className={availableColors[index].textColor}
                                                        src={`/images/services/serums/icons/${index + 1}.svg`} alt={""}
                                                        width={48} height={48}/>} colors={availableColors[index]}
                                           images={images[index]}/>
                            );
                        })}
                    </section>
                </section>
                <aside
                    className={`hidden lg:block transition duration-300 ease-in-out ${currentColors.asideColor} ${currentColors.titleColors} overflow-clip w-[40%] flex flex-col items-start justify-start gap-4 relative pl-14 pr-16 pt-14`}>
                    <h2 className={"text-5xl font-bold w-96"}>Sueros terapéuticos</h2>
                    <p className={"font-normal text-lg"}>{strings.services.sections["3"].content}{strings.services.sections["3"].remark}</p>
                    <section className={"overflow-clip absolute bottom-16 -left-20 w-168 aspect-video"}>
                            <Image src={`/images/services/serums/asides/${currentColors.aside}`} className={"absolute scale-150 top-10 -left-10"} alt={""} width={1834} height={1223} />
                    </section>
                </aside>
            </section>
        </main>
    );
}

export default Serums;