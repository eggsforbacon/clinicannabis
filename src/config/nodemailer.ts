import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_MAILER_USER;
const pass = process.env.NEXT_PUBLIC_MAILER_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
});

export const mailOptions = {
    from: email,
    to: email, // "comercial@clinicannabis.com.co"
}