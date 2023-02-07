import {Person} from "react-bootstrap-icons";
import React, {ReactNode, useState} from "react";

export const Input = (
    props : {
        type : string,
        label : string,
        color : string,
        unFocusedColor? : string,
        name : string,
        icon? : ReactNode,
        required? : boolean,
        autoFocus? : boolean,
    }
) => {

    const [isFocused, setIsFocused] = useState(false);

    const color : string = `border-${props.color} text-${props.color}`;
    const deselectedColor : string = `border-${props.unFocusedColor || "neutral-400"} text-${props.unFocusedColor || "neutral-400"}`;

    const handleFocusIn = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(true);
    }

    const handleFocusOut = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(false);
    }

    return props.type === "area" ? (
        <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
            className={`w-128 relative flex items-center justify-center h-64 border-solid border-2 ${isFocused ? color : deselectedColor} rounded-lg transition duration-700 ease-in-out`}>
            <label htmlFor={props.name} className={"absolute z-30 left-6 -top-2.5 px-2 bg-neutral-50 text-sm "}>{props.label}</label>
            <textarea {...props} className={"px-4 resize-none w-full h-full bg-transparent border-transparent focus:border-none focus:ring-transparent focus:outline-none"}/>
        </div>
    ) : (
        <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
             className={`w-128 relative flex items-center justify-center h-14 border-solid border-2 ${isFocused ? color : deselectedColor} rounded-lg transition duration-700 ease-in-out`}>
            <label htmlFor={props.name} className={"absolute z-30 left-12 -top-2.5 px-2 bg-neutral-50 text-sm "}>{props.label}</label>
            {props.icon || <div className={"p-3 w-14 h-full"}/>}
            <input {...props} className={"px-1 w-full h-full bg-transparent border-transparent focus:border-none focus:ring-transparent focus:outline-none"}/>
        </div>
    );
}