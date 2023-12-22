import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "@/config/nodemailer";

const html = (data: {email: string}) => `
    <main>
        <h1>Clinicannabis: nuevo suscriptor a newsletter de Clinicannabis</h1>
        <p>Correo: ${ data.email }</p>
    </main>`

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const data = req.body;
        if (data.email === undefined || data.email === null) {
            return res.status(400).json({"message": "Bad Request"});
        }
        try {

            const sentMessageInfo = await transporter.sendMail({
                ...mailOptions,
                subject: "Nuevo suscriptor a newsletter de Clinicannabis",
                text: `El correo ${data} se ha suscrito al newsletter de clinicannabis`,
                html: html(data)
            });
            return res.status(200).json({messageInfo: sentMessageInfo});
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    } else {
        return res.status(405).json({"message": "Method not Allowed"});
    }
}

export default handler;