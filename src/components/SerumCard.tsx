import { strings } from "../model/strings";
import { ISerumColors } from "../model/interfaces";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
    index: string,
    icon: any,
    colors: ISerumColors,
    images: string[],
    setCurrentColors: Dispatch<SetStateAction<{ titleColors: string, textColor: string, asideColor: string, bg?: string | undefined, index: string, aside: string }>>
    bg?: string
}

export const SerumCard = (props: IProps) => {

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        props.setCurrentColors({
            ...props.colors,
            index: props.index,
            aside: props.index + ".png"
        })
    };

    return (
        <article onClick={e => handleClick(e)} className={"w-72 flex flex-col items-center justify-start gap-4"}>
            <h3 className={"text-3xl font-bold " + props.colors.textColor}>{strings.services.serums.items[props.index].name}</h3>
            <section className={`${props.bg || "bg-transparent"} relative rounded-3xl w-full h-[23rem] overflow-clip`}>
                {props.images.map(((u, index) => {
                    return (
                        <>
                            <Image className={"absolute -bottom-4 left-0"} src={u} alt={""} width={570} height={760} />
                        </>
                    );
                }))}
            </section>
            <section className={"mt-4 text-black text-center flex flex-col items-center justify-start gap-4"}>
                {props.icon}
                <h4 className={`h-16 leading-[1] text-2xl font-semibold ${props.colors.textColor}`}>
                    {strings.services.serums.items[props.index].function}
                </h4>
                <p className={"font-normal"}>{strings.services.serums.items[props.index].descriptions.short}</p>
            </section>
        </article>

    );
}