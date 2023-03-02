import {NextPage} from "next";
import Image from "next/image";
import {strings} from "../model/strings";
import {Input} from "../components/Input";
import {Envelope, Facebook, Instagram, Youtube} from "react-bootstrap-icons";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";

const FourOhFour : NextPage = () => {

    const navigate = useRouter();

    return (
        <main>
            <article className={"flex flex-col items-center justify-start pt-16 gap-8"}>
                <Image src={"/images/soon/clinilogo.jpg"} alt={""} width={500} height={300}/>
                <h1 className={"text-skobeloff text-7xl font-black"}>{strings["404"].headline}</h1>
                <p className={"text-2xl w-288 italic font-normal text-neutral-900 text-center"}>{strings["404"].copy}</p>
                <section className={"mt-20 w-full h-36 flex flex-col items-center justify-between"}>
                    <button onClick={() => navigate.push("/")} className={"px-16 py-2 text-2xl text-viridian-green bg-white border-solid border-2 border-viridian-green rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"}>
                        {strings["404"].cta}
                    </button>
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
    );
}

export default FourOhFour;