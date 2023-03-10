import React, {ReactNode, useState} from 'react';
import NavbarContext from "./NavbarContext";

export const NavbarProvider = ({children} : {children: ReactNode[] | ReactNode}) => {
    const [logoShown, setLogoShown] = useState(false);

    return (
        <NavbarContext.Provider value={{
           logoShown, setLogoShown
        }}>
            {children}
        </NavbarContext.Provider>
    );
}