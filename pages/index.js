import Image from "next/image";
import Link from "next/link";


const index = () => {
  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl ">
          Hello This is Aditya
        </h1>
        <Link href="/about">        
            <button className="border border-white py-2 px-4 rounded-xl">
              Click Me
            </button>
        </Link>
      </div>
    </div>
  )
}

export default index