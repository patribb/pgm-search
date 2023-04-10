'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex cursor-pointer items-center hover:underline">
            <BsCaretLeftFill className="h-5 text-[#EF4C37]" />
            <p className="text-purple-600 font-black">Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex cursor-pointer items-center hover:underline">
            <BsFillCaretRightFill className="h-5 text-[#EF4C37]" />
            <p className="font-black text-purple-600">Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}
export default PaginationButtons