import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next';

const todoHandler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
    attachParams: true
})

export default todoHandler