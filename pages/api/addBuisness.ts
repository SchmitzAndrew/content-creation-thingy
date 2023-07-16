import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    console.log('Name: ', body.name)
    console.log('Description: ', body.description)
    console.log('Category: ', body.category)

    const result = await prisma.buisness.create({
        data: {
            name: body.name,
            description: body.description,
            category: body.category,
        },
    })

    console.log(result)
    res.redirect('/keywords')
}
