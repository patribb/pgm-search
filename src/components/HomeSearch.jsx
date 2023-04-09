'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {TbMoodSearch} from 'react-icons/tb'
import {TfiMicrophone} from 'react-icons/tfi'

const HomeSearch = () => {
  const [input, setInput] = useState('')
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  const randomSearch = async () => {
    setRandomSearchLoading(true)
    //NOTE: Random word API
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json()).then((data) => data[0])
      if (!response) return
      router.push(`/search/web?searchTerm=${response}`)
      setRandomSearchLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border sm:max-w-xl lg:max-w-2xl border-[#f07d6e]/80 px-5 py-3 rounded-full hover:shadow-xl transition-shadow focus-within:shadow-xl">
        <TbMoodSearch size={25} className='text-purple-600/70 mr-3' />
        <input type="text" className="outline-none text-zinc-600 flex-grow" onChange={(e) => setInput(e.target.value)} value={input} />
        <TfiMicrophone size={25} className='text-purple-600/70 cursor-pointer' />
      </form>
      <div className="flex flex-col sm:flex-row mt-8 space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={handleSubmit} className="btn">Google Search</button>
        <button disabled={randomSearchLoading} onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-70">{randomSearchLoading ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/spinner.svg" alt="Spinner" className='h-6 text-center' />
        ) : 'I Am feeling lucky!'}</button>
      </div>
    </>
  )
}
export default HomeSearch