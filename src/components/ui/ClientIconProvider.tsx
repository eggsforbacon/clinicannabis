"use client";

import {IconContext} from "react-icons";
import {IconType} from "react-icons/lib";
import {ReactElement} from "react";

export const ClientIconProvider = ({children, value}: { children: ReactElement<IconType>, value: IconContext }) => {
    return (
        <IconContext.Provider value={value}>
            {children}
        </IconContext.Provider>
    );
}