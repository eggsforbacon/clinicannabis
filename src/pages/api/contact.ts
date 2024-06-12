import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "@/config/nodemailer";

const buildHTML = (name : string, email : string, message : string) : string => {
    return `<h1>Una nueva persona se quiere contactar con Clinivital</h1>
            <p>Nuevo envío de formulario de contacto desde <a href='https://clinivital.com.co/contact'>Clinivital</a></p>
            <p><strong>Nombre: </strong>${name}</p>
            <p><strong>Correo: </strong>${email}</p>
            <p><strong>Mensaje: </strong>${message}</p>
            <br>
            <p>Cualquier duda o inquietud: <a href="mailto:sistemas.marabunta@gmail.com">sistemas.marabunta@gmail.com</a></p>`;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const data = req.body;
        if (data.name === undefined || data.email === undefined || data.message === undefined) {
            return res.status(400).json({"message": "Bad Request"});
        }

        try {
            const sentMessageInfo = await transporter.sendMail({
                ...mailOptions,
                subject: "¡Nuevo suscriptor de Clinivital!",
                html: buildHTML(data.name, data.email, data.message)
            });
            return res.status(200).json({message: sentMessageInfo});

        } catch (error : any) {
            return res.status(400).json({message: error.message});
        }
    }
    else{
        return res.status(405).json({"message": "Method not Allowed"});
    }

}

export default handler;