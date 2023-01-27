import {ReactNode} from "react";

export const Carousel = (
    props: {
        indexState: [number, any],
        items : ReactNode[] | any[],
    }
) => {

    const length = props.items.length;
    const [index, setIndex] = props.indexState;
    const prev = (index === 0) ? (length - 1) : (index - 1);
    const next = (index === 3) ? 0 : (index + 1);

    const elements = props.items;

    return (
        <article className={"rounded-3xl overflow-clip w-192 h-192 relative flex flex-col items-center justify-center shadow-lg transition duration-1000 ease-in-out lg:hover:-translate-y-2"}>
            <section className={"h-fit w-full flex flex-col justify-center items-stretch"}>
                {elements[prev]}
                {elements[index]}
                {elements[next]}
            </section>
        </article>
    );
}