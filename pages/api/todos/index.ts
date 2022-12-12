import todoHandler from "backend/handlers/TodoHandler";
import { NextApiRequest, NextApiResponse } from "next";


export default todoHandler
    .post((req: NextApiRequest, res: NextApiResponse) => {
        const { userEmail, todo } = req.body
    })
    