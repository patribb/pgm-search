import { HomeHeader, HomeSearch } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image src='/logo.png' alt='Pgm-Search' width='300' height='100' />
        <HomeSearch />
      </div>
    </>
  )
}
