import {NextApiRequest, NextApiResponse} from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.NEXT_PUBLIC_CAPTCHA_KEY}&response=${req.body.token}`,
            })
                .then((reCaptchaRes) => reCaptchaRes.json())
                .then((reCaptchaRes) => {
                    if (reCaptchaRes?.score > 0.5) {
                        res.status(200).json({
                            status: "success",
                            message: "Enquiry submitted successfully",
                        });
                    } else {
                        res.status(200).json({
                            status: "failure",
                            message: "Google ReCaptcha Failure",
                        });
                    }
                });
        } catch (err) {
            res.status(405).json({
                status: "failure",
                message: "Error submitting the enquiry form",
            });
        }
    }
    return res.status(405).json({"message": "Method not Allowed"});
}

export default handler;
