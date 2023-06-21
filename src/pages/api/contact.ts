import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "../../config/nodemailer";

const buildHTML = (name : string, email : string, message : string) : string => {
    return "<h1>Test title</h1>";
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method);
    if (req.method === "POST") {
        const data = req.body;
        if (data.name === undefined || data.email === undefined || data.message === undefined) {
            return res.status(400).json({"message": "Bad Request"});
        }

        try {
            const sentMessageInfo = await transporter.sendMail({
                ...mailOptions,
                subject: "¡Nuevo suscriptor de Clinicannabis!",
                html: buildHTML(data.name, data.email, data.message)
            });
            return res.status(200).json({message: sentMessageInfo});

        } catch (error : any) {
            console.log(error);
            return res.status(400).json({message: error.message});
        }
    }
    else{
        return res.status(405).json({"message": "Method not Allowed"});
    }

}

export default handler;