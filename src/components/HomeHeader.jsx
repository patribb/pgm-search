import Link from "next/link"
import {BsGrid3X3GapFill} from 'react-icons/bs'

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 items-center">
            <Link className="hover:underline text-zinc-600" target="_blank" href="https://mail.google.com">Gmail</Link>
            <Link className="hover:underline text-zinc-600" target="_blank" href="https://image.google.com">Images</Link>
            <BsGrid3X3GapFill size={50} className="fill-pink-500 hover:scale-105 transition duration-150 bg-transparent p-2 hover:bg-zinc-200 rounded-full cursor-pointer" />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition duration-200 hover:shadow-lg">Sign In</button>
        </div>
    </header>
  )
}
export default HomeHeader