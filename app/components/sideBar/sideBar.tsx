import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-full w-44 flex-col items-center bg-white px-5 pt-32 lg:flex">
      <Link href="/" className="my-4 w-full">
        <div className="w-full rounded-xl px-3 py-2 text-center transition-all delay-100 ease-in-out hover:bg-blue-400 hover:text-white">
          등급 업
        </div>
      </Link>
      <Link href="/choose" className="my-4 w-full">
        <div className="w-full rounded-xl px-3 py-2 text-center transition-all delay-100 ease-in-out hover:bg-blue-400 hover:text-white">
          잠재능력 뽑기
        </div>
      </Link>
    </div>
  )
}

export default SideBar
