import { WebSearchResults } from "@/components"
import Link from "next/link"

const WebSearchPage = async ({searchParams}) => {
  await new Promise(r => setTimeout(r, 2000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const data = await response.json()
  const results = data.items

  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl font-black mb-4 text-[#EF4C37]/90'>No results found</h1>
        <p className="text-purple-700 text-sm">Try search for something else or back to home...</p>
        <Link className="font-black text-purple-500 mt-10 hover:underline" href='/'>Go Home</Link>
    </div>
    )
  }

  return (
    <>
    {results && <WebSearchResults results={data} />}
    </>
  )
}
export default WebSearchPage