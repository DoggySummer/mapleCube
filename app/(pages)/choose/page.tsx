'use client'

import Header from '@/app/components/header/header'
import SelectBox from '@/app/components/meso/selectBox'
import SideBar from '@/app/components/sideBar/sideBar'
import React, { FormEvent, useState } from 'react'
import { equipSelect, rankSelect } from '../../constant'
import { InputAdornment, SelectChangeEvent, TextField } from '@mui/material'
import { numberToKorean } from '@/app/utils/utils'

const Page = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  const [rank, setRank] = useState(0)
  const [itemType, setItemType] = useState('')
  const [mesoKeep, setMesoKeep] = useState(0)

  const handleRankNow = (event: SelectChangeEvent) => {
    setRank(Number(event.target.value))
  }
  const handleMesoKeep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMesoKeep(Number(event.target.value))
  }
  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[70vw]">잠재능력 뽑기</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[70vw]">
        <div className="ml-2 pb-2 text-xl text-blue-400">아이템 정보</div>
        <div className="flex flex-col sm:flex-row">
          <SelectBox title="잠재등급" selectMenu={rankSelect} value={rank} handle={handleRankNow} />
          <SelectBox title="아이템 종류" selectMenu={rankSelect} value={rank} handle={handleRankNow} />
          <SelectBox title="아이템 레벨" selectMenu={rankSelect} value={rank} handle={handleRankNow} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 옵션</div>
        <div className="flex items-center">
          <SelectBox title="아이템 레벨" selectMenu={rankSelect} value={rank} handle={handleRankNow} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">보유 메소 (선택)</div>
        <TextField
          autoComplete="off"
          label="보유 메소"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">메소</InputAdornment>,
          }}
          onChange={handleMesoKeep}
          helperText={numberToKorean(mesoKeep) + '메소'}
        />
        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white">계산하기</button>
      </div>
    </main>
  )
}

export default Page
