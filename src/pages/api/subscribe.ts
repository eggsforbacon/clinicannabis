import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "../../config/nodemailer";

const html = (data: {email: string }) => `
    <main>
        <h1>Clinicannabis: nuevo suscriptor a newsletter</h1>
        <p>${ data.email }</p>
    </main>`

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method, req.method === "POST");
    if (req.method === "POST") {
        const data = req.body;
        if (!data.email)
            return res.status(400).json({"message": "Bad Request"});

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Nuevo suscriptor a newsletter de Clinicannabis",
                text: `El correo ${data} se ha suscrito al newsletter de clinicannabis`,
                html: html(data)
            });

        } catch (error: any) {
            console.log(error);
            return res.status(400).json({message: error.message});
        }
    }

    return res.status(405).json({"message": "Method not Allowed"});
}

export default handler;