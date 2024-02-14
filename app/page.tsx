'use client'

import { connectDB } from './utils/database'
import { Checkbox, FormControlLabel, InputAdornment, SelectChangeEvent, TextField } from '@mui/material'

import { itemLevelSelect, rankSelect } from './constant'

import UpResult from './components/result/upResult'
import SelectBox from './components/meso/selectBox'
import Header from './components/header/header'
import SideBar from './components/sideBar/sideBar'
import Footer from './components/footer/footer'
import { useState } from 'react'
import { HitCeiling, numberToKorean, rankUpExpect } from './utils/utils'

export default function Home() {
  // const client = await connectDB
  // const db = client.db('mapleItem')
  // const result = await db.collection('epic_weapon').find().toArray()
  // console.log(result)

  const [mesoKeep, setMesoKeep] = useState(0)
  const [isMiracle, setIsMiracle] = useState(false)
  const [form, setForm] = useState({
    rankNow: 0,
    rankGoal: 0,
    itemLevel: 0,
  })
  const handleChange = (event: SelectChangeEvent) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }))
  }
  const handleMesoKeep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMesoKeep(Number(event.target.value))
  }
  const handleIsMiracle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMiracle(event.target.checked)
  }

  const onSubmit = () => {
    const ceilingMeso = HitCeiling(form.rankNow, form.itemLevel, form.rankGoal, isMiracle)
    const ceilingMesoKor = numberToKorean(ceilingMeso)
    const expectedRankUpMeso = rankUpExpect(form.rankNow, form.itemLevel, form.rankGoal, isMiracle)
    const expectedRankUpMesoKor = numberToKorean(expectedRankUpMeso)
    console.log(form)
    console.log('천장 메소: ' + ceilingMesoKor)
    console.log('기대치 메소: ' + expectedRankUpMesoKor)
  }

  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[70vw]">등급 업</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[70vw]">
        <div className="ml-2 pb-2 text-xl text-blue-400">아이템 정보</div>
        <div className="flex flex-col sm:flex-row">
          <SelectBox
            title="현재 잠재능력"
            selectMenu={rankSelect}
            handle={handleChange}
            value={form.rankNow}
            name="rankNow"
          />
          <SelectBox
            title="아이템 레벨"
            selectMenu={itemLevelSelect}
            handle={handleChange}
            value={form.itemLevel}
            name="itemLevel"
          />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 등급</div>
        <div className="flex items-center">
          <SelectBox
            title="목표 잠재능력"
            selectMenu={rankSelect}
            handle={handleChange}
            value={form.rankGoal}
            name="rankGoal"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleIsMiracle} />}
            label="미라클 타임"
            sx={{ marginBottom: 3, marginLeft: 1 }}
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
        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white" onClick={onSubmit}>
          계산하기
        </button>
      </div>
      <UpResult />
      <Footer />
    </main>
  )
}
