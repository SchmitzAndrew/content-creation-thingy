import AppLayout from "../components/AppLayout";
import KeywordsComponent from "../components/Keywords";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function getServerSideProps() {
    // get the most recent business in db
    const buisnesses = await prisma.buisness.findFirst(
        {
            orderBy: {
                buisnessId: 'desc'
            }
        })
    
    return {
        props: {
            buisnesses: buisnesses?.buisnessId
        }
    }
}

interface KeywordsProps {
    buisnesses: string;
}

export default function Keywords({buisnesses}: KeywordsProps)  {
    return (
        <>
            <AppLayout>
                <KeywordsComponent buisnessId = {buisnesses}/>
            </AppLayout>
        </>
    )
}