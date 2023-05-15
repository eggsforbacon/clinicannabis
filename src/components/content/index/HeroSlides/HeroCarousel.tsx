import {useEffect, useState} from "react";
import {ClinicIntro} from "./ClinicIntro";

export const HeroCarousel = (props: {
    hasWindow : boolean,
}) => {
    const [videoPlayedOnce, setVideoPlayedOnce] = useState(false);
    const slides: JSX.Element[] = [
        <ClinicIntro hasWindow={props.hasWindow} videoState={{videoPlayedOnce, setVideoPlayedOnce}}/>,
        <p className={"top-52 absolute left-52"}>Cosa</p>,
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedElement, setSelectedElement] = useState(slides[0]);

    const switchSlide = (next= true) => {
        const condition = next ? selectedIndex < slides.length - 1 : selectedIndex > 0;
        const nextIndex = next ?
            condition ? selectedIndex + 1 : 0
            :
            condition ? selectedIndex - 1 : slides.length - 1;

        setSelectedIndex(nextIndex);
        setSelectedElement(slides[selectedIndex]);
    }

    return (
        <section className={"w-full h-192 relative"}>
            <section className={"absolute z-40 bottom-10 inset-x-0 flex items-center justify-evenly"}>
                <button onClick={() => switchSlide(false)}>Prev</button>
                <button onClick={() => switchSlide()}>Next</button>
            </section>
            {selectedElement}
        </section>
    );
}