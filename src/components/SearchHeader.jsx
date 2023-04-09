import Image from "next/image"
import Link from "next/link"
import { SearchBox, SearchHeaderOptions } from "."
import {AiTwotoneSetting} from 'react-icons/ai'
import { BsGrid3X3GapFill } from "react-icons/bs"

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href='/'>
          <Image src='/logo.png' width='140' height='40' alt="Pgm-Search" />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
         <AiTwotoneSetting size={45} className="fill-orange-500 hover:scale-105 transition duration-150 bg-transparent p-2 hover:bg-zinc-200 rounded-full cursor-pointer" />
         <BsGrid3X3GapFill size={45} className="fill-purple-500 hover:scale-105 transition duration-150 bg-transparent p-2 hover:bg-zinc-200 rounded-full cursor-pointer" />
        </div>
        <button className="bg-[#EF4C37]/80 text-sm text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition duration-200 hover:shadow-lg ml-2">Sign In</button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
export default SearchHeader