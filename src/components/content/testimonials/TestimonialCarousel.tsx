import React, {ReactNode, useState} from "react";
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";

export const TestimonialCarousel = (props: {
    children: ReactNode[];
}) => {
    const UNIT = 33.333333;
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(props.children.length - 1);
    const [next, setNext] = useState(1);
    const [mouseInitial, setMouseInitial] = useState(0);
    const [displacement, setDisplacement] = useState(-UNIT);
    const [duration, setDuration] = useState("duration-300");
    const goPrev = () => {
        setDisplacement((prev) => (prev + UNIT));
    }
    const goNext = () => {
        setDisplacement((prev) => (prev - UNIT));
    };

    const handleTransitionEnd = () => {
        const position = displacement === 0 ? -1 : displacement === -UNIT * 2 ? 1 : 0;
        // console.log(position);
        switch (position) {
            case 0:
                break;
            case 1:
                setPrev(current);
                setCurrent(next);
                setNext((old) => (old === props.children.length - 1 ? 0 : old + 1));
                setDuration("duration-0");
                setDisplacement(-UNIT);
                setDuration("duration-300");
                break;
            default:
                if (position === -1) {
                    setNext(current);
                    setCurrent(prev);
                    setPrev((old) => (old === 0 ? props.children.length - 1 : old - 1));
                    setDuration("duration-0");
                    setDisplacement(-UNIT);
                    setDuration("duration-300");
                }
                break;
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setMouseInitial(e.touches[0].clientX);
        console.log("Touch down");
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        // const width = (e.target as HTMLDivElement).offsetWidth;
        // const clientX = e.changedTouches[0].clientX;
        // const percentage = ((clientX / width) - 0.5) * 200
        // console.log(`Displaced ${percentage}%`);
        if (mouseInitial === 0) return;
        const deltaX = e.touches[0].clientX;
    };

    const goTo = (i: number) => {
        setCurrent(i);
        setPrev(i === 0 ? props.children.length - 1 : i - 1);
        setNext(i === props.children.length - 1 ? 0 : i + 1);
    };

    return (
        <div className={"overflow-x-clip overflow-y-visible relative w-screen lg:w-320"} /*onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove} onTouchEnd={() => setMouseInitial(0)}*/>
            <section className={`transition-transform ${duration} ease-in-out flex w-fit`}
                     style={{transform: `translateX(${displacement}%)`}} onTransitionEnd={handleTransitionEnd}>
                {props.children[prev]}
                {props.children[current]}
                {props.children[next]}
            </section>
            <section
                className={"absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-between w-full"}>
                <button onClick={goPrev}>
                    <ChevronLeft size={32}/>
                </button>
                <button onClick={goNext}>
                    <ChevronRight size={32}/>
                </button>
            </section>
            <section className={"absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6"}>
                {props.children.map((_, i) => {
                    return (
                        <button onClick={() => goTo(i)}
                            className={`rounded-full aspect-square h-3 ${i !== current ? "bg-green-sheen/40" : "bg-viridian-green"} border-[1px] border-solid border-green-sheen`}/>
                    );
                })}
            </section>
        </div>
    );
}