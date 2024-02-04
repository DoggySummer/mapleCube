import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full flex-col items-center bg-white px-5 pt-32">
      <Link href="/">
        <div className="my-4 w-full rounded-xl px-3 py-2 text-center transition-all delay-100 ease-in-out hover:bg-blue-400 hover:text-white">
          등급 업
        </div>
      </Link>
      <Link href="/choose">
        <div className="my-4 w-full rounded-xl px-3 py-2 text-center transition-all delay-100 ease-in-out hover:bg-blue-400 hover:text-white">
          잠재능력 뽑기
        </div>
      </Link>
    </div>
  )
}

export default SideBar
