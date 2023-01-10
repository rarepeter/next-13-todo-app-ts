import { NextApiRequest, NextApiResponse } from "next"

const Authentication = (req: NextApiRequest, res: NextApiResponse, next: any) => {
    console.log(req.headers)
    if (req.cookies[`next-auth.csrf-token`] && req.headers.auth) {
        return next()
    }
    return res.status(400).json({ message: "Not authorized!" })
}

export default Authentication