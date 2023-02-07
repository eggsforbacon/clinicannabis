import {ContactType} from "../model/types/ContactType";

export const sendContactForm = async (data : ContactType) => {
    console.log("API says: ", data);
    return fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });
}