import Cookies from "js-cookie";
import {IncomingMessage} from "http";


export interface ICookieData {
    jwt: string,
}

export const setToken = (data: ICookieData, withWindow : boolean = false) => {
    if (withWindow) {
        Cookies.set("spi_jwt", data.jwt, {secure: true});
        return true;
    }

    return false;
}

export const unsetToken = () => {
    if (typeof window === "undefined") return;
    Cookies.remove("spi_jwt", {secure: true});
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get("spi_jwt");
}

export const getTokenFromServerCookie = (req : IncomingMessage) => {
    if (!req.headers.cookie) return undefined;
    const cookies = req.headers.cookie
        .split("; ");
    const jwtCookie = cookies
        .find((cookie : string) => {
            if (cookie.trim().startsWith("spi_jwt=")) return cookie;
        });
    if (!jwtCookie) return undefined;
    return jwtCookie.split('=')[1];
}