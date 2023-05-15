import React, {useEffect, useState} from "react";
import {HeroCarousel} from "./HeroSlides/HeroCarousel";
export const Hero = (props: {
    hasWindow : boolean
}) => {

    return (
        <>
            <HeroCarousel hasWindow={props.hasWindow}/>
        </>
    );
}