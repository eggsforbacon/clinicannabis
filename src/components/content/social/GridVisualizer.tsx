"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

enum values {
    PHOTOS,
    INVITATIONS,
    VIDEOS,
}

export default function GridVisualizer() {

    const {
        PHOTOS,
        INVITATIONS,
        VIDEOS,
    } = values; // destructuring an enum is WILD 💀

    const LIMITS = [24, 2, 4];

    const [selected, setSelected] = useState(PHOTOS);

    const urls = (i: number) => [
        `/social/photos/${i}.jpg`,
        `/social/invitations/${i}.jpg`,
        `/social/videos/${i}.webm`,
    ];

    return (
        <>
            <div className={"w-full flex items-center justify-center"}>
                <ul className={"grid grid-cols-3 w-full place-items-center px-16 py-16 border-b-2 border-b-viridian-green/50"}>
                    <li className={`transition-all duration-200 ease-in-out hover:text-viridian-green text-2xl ${selected === PHOTOS ? "text-caribbean-green" : "text-neutral-500"} font-semibold`}>
                        <button onClick={() => setSelected(PHOTOS)}>Fotos</button>
                    </li>
                    <li className={`transition-all duration-200 ease-in-out hover:text-viridian-green text-2xl ${selected === VIDEOS ? "text-caribbean-green" : "text-neutral-500"} font-semibold`}>
                        <button onClick={() => setSelected(VIDEOS)}>Videos</button>
                    </li>
                    <li className={`transition-all duration-200 ease-in-out hover:text-viridian-green text-2xl ${selected === INVITATIONS ? "text-caribbean-green" : "text-neutral-500"} font-semibold`}>
                        <button onClick={() => setSelected(INVITATIONS)}>Convocatorias</button>
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-3 place-items-center overflow-clip rounded-2xl"}>
                {
                    [...Array(LIMITS[selected])].map((_, i) => {
                        return (
                            <Link key={i} passHref target={"_blank"} href={urls(i)[selected]} className={"grid place-items-center overflow-clip h-120 w-full"}>
                                {
                                    selected === PHOTOS || selected === INVITATIONS
                                        ? (
                                            <Image src={urls(i)[selected]} alt={urls(i)[selected]} width={1920} height={1080} className={"h-full w-auto object-cover"}/>
                                        ) : (
                                            <video playsInline className={"h-full w-auto object-cover"}>
                                                <source src={urls(i)[selected]} type={"video/webm"}/>
                                            </video>
                                        )
                                }
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
}