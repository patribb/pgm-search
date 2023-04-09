'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {FaCameraRetro} from 'react-icons/fa'
import {TbMoodSearch} from 'react-icons/tb'

const SearchHeaderOptions = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')

  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }

  return (
    <div className='flex space-x-2 border-b w-full justify-center lg:justify-start lg:pl-52 text-zinc-700 text-sm'>
      <div onClick={() => selectTab('All')} className={`flex items-center space-x-1 border-b-4 border-transparent hover:cursor-pointer pb-3 px-2 active:text-[#EF4C37] ${pathname === '/search/web' && '!text-purple-900 !border-purple-500'}`}>
       <TbMoodSearch size={20} className='text-[#EF4C37]/70' /> 
       <p className="text-zinc-600">All</p>
      </div>
      <div onClick={() => selectTab('Images')} className={`flex items-center space-x-1 border-b-4 border-transparent hover:cursor-pointer pb-3 px-2 active:text-[#EF4C37] ${pathname === '/search/image' && '!text-purple-900 !border-purple-500'}`}>
       <FaCameraRetro size={20} className='text-[#EF4C37]/70' /> 
       <p className="text-zinc-600">Images</p>
      </div>
    </div>
  )
}
export default SearchHeaderOptions