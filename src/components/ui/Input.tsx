import React, {ReactNode, useRef, useState} from "react";

export const Input = (
    props: {
        type: string,
        label: string | JSX.Element,
        color: string,
        labelColor?: string,
        unFocusedColor?: string,
        name: string,
        icon?: ReactNode,
        required?: boolean,
        autoFocus?: boolean,
        background?: string,

    }
) => {

    const inputRef = useRef(null);
    const currentRef = props.type === "area" ? inputRef.current as unknown as HTMLTextAreaElement : inputRef.current as unknown as HTMLInputElement;
    const [isFocused, setIsFocused] = useState(false);
    const [labelOpacity, setLabelOpacity] = useState("opacity-100");

    const color: string = `border-${props.color} text-${props.color}`;
    const deselectedColor: string = `border-${props.unFocusedColor || "neutral-200"} text-${props.unFocusedColor || "neutral-200"}`;
    const backgroundColor : string = props.background || "bg-transparent";

    const handleFocusIn = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(true);
        if (currentRef !== null && currentRef.value !== "") {
            setLabelOpacity("opacity-100");
        }
    }

    const handleFocusOut = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(false);
        if (currentRef !== null && currentRef.value !== "") {
            setLabelOpacity("opacity-0");
        }
    }


    return props.type === "area" ? (
        <div className={"w-full lg:w-128 relative mt-6"}>
            <label htmlFor={props.name}
                   className={`bg-transparent transition duration-300 ease-in-out ${labelOpacity} ${isFocused ? color : deselectedColor} absolute text-base left-4 top-2 ${isFocused ? "-translate-x-4 -translate-y-10" : "translate-x-0 translate-y-0"} `}>{props.label}</label>
            <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
                 className={`relative w-full lg:w-128 flex items-center justify-center h-64 border-solid ${backgroundColor} border-2  ${isFocused ? color : deselectedColor} rounded-lg transition duration-700 ease-in-out`}>
                <textarea {...props} ref={inputRef}
                          className={`px-4 resize-none w-full h-full bg-transparent border-transparent focus:border-none focus:ring-transparent focus:outline-none`}/>
            </div>
        </div>
    ) : (
        <div className={"w-full lg:w-128 relative mt-6"}>
            <label htmlFor={props.name}
                   className={`bg-transparent transition duration-300 ease-in-out ${labelOpacity} ${isFocused ? color : deselectedColor} text-base absolute left-16 top-4 ${isFocused ? "-translate-x-14 -translate-y-12" : "translate-x-0 translate-y-0"}`}>{props.label}</label>
            <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
                 className={`w-full lg:w-128 relative flex items-center justify-center h-14 border-solid ${backgroundColor} border-2 ${isFocused ? color : deselectedColor} rounded-lg transition duration-700 ease-in-out`}>
                {props.icon || <div className={"p-3 w-14 h-full"}/>}
                <input {...props} ref={inputRef}
                       className={`px-1 w-full h-full bg-transparent border-transparent focus:border-none focus:ring-transparent focus:outline-none`}/>
            </div>
        </div>
    );
}