import AppLayout from "../components/AppLayout";
import Heading from "../components/Heading";

import { useCompletion } from 'ai/react'

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

    const keywords = await prisma.keywords.findMany({
        where: {
            buisnessId : buisnesses?.buisnessId
        }
    })

    
    return {
        props: {
            buisnesses: buisnesses?.buisnessId,
            keywords: keywords?.map((keyword) => keyword.keyword)
        }
    }
}

interface KeywordsProps {
    buisnesses: string;
    keywords: string[];
}

export default function Keywords({buisnesses, keywords}: KeywordsProps)  {
    console.log(keywords)
    const { completion, input, handleInputChange, handleSubmit } = useCompletion();
    return (
        <>
            <AppLayout>
                <Heading title="Generate Outlines" />
                
                {/* <ul className = "mt-4 list-disc ">
                    {keywords.map((keyword, index) => (
                        <li key = {index} className = "ml-8 mt-2 ">{keyword}</li>
                    ))}
                </ul> */}
{/*                 
                <div className = "pt-8">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="keyword" value={keywords[0]} />
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                Generate Outlines
                            </button>
                        </div>
                    </form>
                </div> */} 
                <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
                            value={input}
                            placeholder="Describe your business..."
                            onChange={handleInputChange}
                        />
                    </form>
                    <div className="whitespace-pre-wrap my-6">{completion}</div>
                </div>
            </AppLayout>
        </>
    )
}