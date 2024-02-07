'use client'

import Header from '@/app/components/header/header'
import SelectBox from '@/app/components/meso/selectBox'
import SideBar from '@/app/components/sideBar/sideBar'
import React, { FormEvent, useState } from 'react'

const Page = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  const [rank, setRank] = useState(0)
  const [itemType, setItemType] = useState('')
  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[70vw]">등급 업</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[70vw]">
        <div className="ml-2 pb-2 text-xl text-blue-400">장비 정보</div>
        <div className="flex flex-col sm:flex-row">{/* <SelectBox /> */}</div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 등급</div>
        <div className="flex items-center"></div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">보유 메소 (선택)</div>

        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white">계산하기</button>
      </div>
    </main>
  )
}

export default Page
