import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, resp: NextApiResponse) => {
    console.log('evento recebido')

    resp.status(200).json({ok: true})
}