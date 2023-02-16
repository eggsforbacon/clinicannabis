import {ContactType} from "../model/types/ContactType";

export const sendContactForm = async (data : ContactType) => {
    return fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}

export const sendSubscribeForm = async (data : {email: string }) => {
    return fetch('/api/subscribe', {
        method : "POST",
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
}