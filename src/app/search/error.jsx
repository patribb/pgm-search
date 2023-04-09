'use client'
import { useEffect } from 'react'

const Error = ({error, reset}) => {

    useEffect(() => {
      console.log(error)
    }, [error])

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl font-black mb-4 text-[#EF4C37]/90'>Something went wrong...</h1>
        <button onClick={() => reset()} className="bg-purple-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition duration-200 hover:shadow-lg">Try Again</button>
    </div>
  )
}
export default Error