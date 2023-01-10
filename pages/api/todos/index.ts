import { PrismaClient } from "@prisma/client";
import todoHandler from "backend/handlers/TodoHandler";
import Authentication from "backend/middleware/Authentication";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default todoHandler
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const todos = await prisma.todo.findMany()
        res.status(200).json({ todos })
    })
    .post((req: NextApiRequest, res: NextApiResponse) => {
        const { userEmail, todo } = req.body
    })
