import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "../../config/nodemailer";

const html : string = "<h1>Test title</h1>"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method);
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.message) {
            return res.status(400).json({"message": "Bad Request"});
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Test subject",
                text: "This is a test string",
                html: html
            });

        } catch (error : any) {
            console.log(error);
            return res.status(400).json({message: error.message});
        }
    }

    return res.status(405).json({"message": "Method not Allowed"});
}

export default handler;