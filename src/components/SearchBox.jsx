'use client'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {TfiMicrophone} from 'react-icons/tfi'
import {BsSearchHeart} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

const SearchBox = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')
  const [term, setTerm] = useState(searchTerm || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!term.trim()) return
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex px-5 py-2  ml-10 mr-5 flex-grow max-w-3xl border border-purple-300 shadow-xl rounded-full '>
      <input type="text" className="w-full outline-none text-zinc-700" value={term} onChange={(e) => setTerm(e.target.value)} />
      <RxCross2 onClick={() => setTerm('')} size={22} color='#ef4c37b5' className='cursor-pointer sm:mt-2 sm:mr-2 hover:scale-110 transition duration-200' />
     <div className="flex items-center">
     <TfiMicrophone size={40} className='fill-[#EF4C37]/70 hidden sm:inline-flex hover:scale-105 transition duration-200 cursor-pointer pl-4 mr-3 border-l-2 border-purple-400/70' />
      <button type="submit"><BsSearchHeart size={22} className='fill-[#EF4C37]/70 hidden sm:inline-flex cursor-pointer hover:scale-105 transition duration-200' /></button>
     </div>
    </form>
  )
}
export default SearchBox