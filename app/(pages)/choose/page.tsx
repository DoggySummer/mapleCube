'use client'

import Header from '@/app/components/header/header'
import SelectBox from '@/app/components/meso/selectBox'
import SideBar from '@/app/components/sideBar/sideBar'
import React, { FormEvent, useEffect, useState } from 'react'
import { itemLevelSelect, itemOptionSelect, itemTypeSelect, rankSelect } from '../../constant'
import { InputAdornment, SelectChangeEvent, TextField } from '@mui/material'
import { numberToKorean } from '@/app/utils/utils'
import UpResult from '@/app/components/result/upResult'
import Footer from '@/app/components/footer/footer'

const Page = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  const [rank, setRank] = useState(0)
  const [itemType, setItemType] = useState('')
  const [itemLevel, setItemLevel] = useState(0)
  const [optionFirst, setOptionFirst] = useState(0)
  const [optionSecond, setOptionSecond] = useState(0)
  const [optionThird, setOptionThird] = useState(0)
  const [mesoKeep, setMesoKeep] = useState(0)

  const handleRankNow = (event: SelectChangeEvent) => {
    setRank(Number(event.target.value))
  }
  const handleItemType = (event: SelectChangeEvent) => {
    setItemType(event.target.value)
  }
  const handleItemLevel = (event: SelectChangeEvent) => {
    setItemLevel(Number(event.target.value))
  }
  const handleOptionFirst = (event: SelectChangeEvent) => {
    setOptionFirst(Number(event.target.value))
  }
  const handleOptionSecond = (event: SelectChangeEvent) => {
    setOptionSecond(Number(event.target.value))
  }
  const handleOptionThird = (event: SelectChangeEvent) => {
    setOptionThird(Number(event.target.value))
  }
  const handleMesoKeep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMesoKeep(Number(event.target.value))
  }

  useEffect(() => {
    if (itemType) {
    }
  }, [itemType])

  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[70vw]">잠재능력 뽑기</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[70vw]">
        <div className="ml-2 pb-2 text-xl text-blue-400">아이템 정보</div>
        <div className="flex flex-col sm:flex-row">
          <SelectBox title="잠재등급" selectMenu={rankSelect} value={rank} handle={handleRankNow} />
          <SelectBox title="아이템 종류" selectMenu={itemTypeSelect} value={itemType} handle={handleItemType} />
          <SelectBox title="아이템 레벨" selectMenu={itemLevelSelect} value={itemLevel} handle={handleItemLevel} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 옵션</div>
        <div className="flex items-center">
          <SelectBox title="옵션" selectMenu={itemOptionSelect} value={optionFirst} handle={handleOptionFirst} />
          <TextField
            autoComplete="off"
            label=""
            type="number"
            onChange={handleMesoKeep}
            helperText={' '}
            value={1}
            disabled={true}
          />
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
      <UpResult />
      <Footer />
    </main>
  )
}

export default Page
