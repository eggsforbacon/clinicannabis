import React, {LegacyRef, ReactNode} from "react";

export const Carousel = (
    props: {
        index: number
        items : ReactNode[] | any[],
        ref? : LegacyRef<any>,
        animate? : string,
        horizontal? : boolean
    }
) => {

    const length = props.items.length;
    const index = props.index;
    const prev = (index === 0) ? (length - 1) : (index - 1);
    const next = (index === length - 1) ? 0 : (index + 1);

    const elements = props.items;

    return (
        <article ref={props.ref} className={props.horizontal? `w-fit` : `rounded-3xl overflow-clip w-192 h-192 relative flex flex-col items-center justify-center shadow-lg transition duration-1000 ease-in-out lg:hover:-translate-y-2 ${props.animate || ""}`}>
            <ul className={props.horizontal? "w-fit h-fit flex" : "h-fit w-full flex flex-col justify-center items-stretch"}>
                {elements[prev]}
                {elements[index]}
                {elements[next]}
            </ul>
        </article>
    );
}