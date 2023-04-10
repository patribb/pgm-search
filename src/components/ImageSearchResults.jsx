/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { PaginationButtons } from "."

const ImageSearchResults = ({results}) => {
  return (
    <div className="pb-24 sm:pb-40  mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-5">
      {results.items.map((result) => (
        <div key={result.link} className="mb-8">
          <div className="group">
            <Link href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.title}
                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2 className="group-hover:underline truncate text-purple-600 font-semibold">
                {result.title}
              </h2>
            </Link>
            <Link href={result.image.contextLink}>
              <p className="group-hover:underline text-[#EF4C37] text-sm">
                {result.displayLink}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="ml-16">
      <PaginationButtons />
    </div>
  </div>
  )
}
export default ImageSearchResults