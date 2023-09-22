import React, {ReactNode, useState} from "react";
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";

export const TestimonialCarousel = (props: {
    children: ReactNode[];
}) => {
    const UNIT = (1 / props.children.length) * 100;
    const [current, setCurrent] = useState(0);
    const [displacement, setDisplacement] = useState(0);
    const goPrev = () => {
        setDisplacement((prev) => (prev + UNIT));
        setCurrent((prev) => prev - 1);
    }
    const goNext = () => {
        setDisplacement((prev) => (prev - UNIT));
        setCurrent((prev) => prev + 1);
    };

    const goTo = (i: number) => {
        setDisplacement(-UNIT * i);
        setCurrent(i);
    };

    return (
        <>
            <div
                className={"overflow-x-clip rounded-2xl backdrop-blur-md bg-green-sheen/20 overflow-y-visible relative w-screen lg:w-320 box-border pt-6 pb-20 flex flex-col justify-center gap-6 lg:gap-4"}>
                <section className={"transition-transform duration-300 ease-in-out flex w-fit"}
                         style={{transform: `translateX(${displacement}%)`}}>
                    {props.children}
                </section>
                <section
                    className={"absolute top-[90%] lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90%]"}>
                    <button
                        className={"rounded-full p-2 border-2 border-solid border-caribbean-green bg-caribbean-green/10 disabled:cursor-not-allowed disabled:bg-neutral-100/20 disabled:border-neutral-300 [&>*]:disabled:fill-neutral-300 transition duration-150 ease-in-out cursor-pointer -translate-x-2"}
                        onClick={goPrev} disabled={current === 0}>
                        <ChevronLeft className={"fill-caribbean-green"} size={32}/>
                    </button>
                    <button
                        className={"rounded-full p-2 border-2 border-solid border-caribbean-green bg-caribbean-green/10 disabled:cursor-not-allowed disabled:bg-neutral-100/20 disabled:border-neutral-300 [&>*]:disabled:fill-neutral-300 transition duration-150 ease-in-out cursor-pointer translate-x-2"}
                        onClick={goNext} disabled={current === props.children.length - 1}>
                        <ChevronRight className={"fill-caribbean-green"} size={32}/>
                    </button>
                </section>
                <section className={"flex items-center justify-center gap-6"}>
                    {props.children.map((_, i) => {
                        return (
                            <button onClick={() => goTo(i)} key={`circle${i}`}
                                    className={`rounded-full aspect-square h-3 ${i !== current ? "bg-green-sheen/40" : "bg-viridian-green"} border-[1px] border-solid border-green-sheen`}/>
                        );
                    })}
                </section>
            </div>
        </>
    );
}