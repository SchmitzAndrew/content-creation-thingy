import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

import { NextApiRequest, NextApiResponse } from 'next'

export default async function addKeywords(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    console.log(body)

    console.log("id", body.buisnessId)
    console.log("keyword1", body.keyword_1) 
    console.log("keyword2", body.keyword_2)
    console.log("keyword3", body.keyword_3)

    const result = await prisma.keywords.createMany({
        data: [
            { buisnessId: body.buisnessId, keyword: body.keyword_1 },
            { buisnessId: body.buisnessId, keyword: body.keyword_2 },
            { buisnessId: body.buisnessId, keyword: body.keyword_3 },
        ],
        skipDuplicates: true,
    })

    console.log(result)
    res.redirect('/outlines')
}
    
