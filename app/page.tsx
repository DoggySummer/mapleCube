import { connectDB } from './utils/database'
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField } from '@mui/material'
import { equipSelect, potenSelect } from './constant'

import UpResult from './components/result/upResult'
import PotenSelect from './components/meso/potenSelect'
import Header from './components/header/header'
import SideBar from './components/sideBar/sideBar'
import Footer from './components/footer/footer'

export default async function Home() {
  const client = await connectDB
  const db = client.db('mapleItem')
  const result = await db.collection('epic_weapon').find().toArray()
  console.log(result)
  return (
    <main className="flex w-full flex-col justify-center bg-gray-200">
      <Header />
      <SideBar />
      <div className="mx-auto mb-4 mt-24 w-[90vw] text-left text-3xl text-gray-600 sm:w-[70vw]">
        잠재능력 시뮬레이터
      </div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[70vw]">
        <div className="ml-2 pb-2 text-xl text-blue-400">장비 정보</div>
        <div className="flex flex-col sm:flex-row">
          <PotenSelect title="현재 잠재능력" value={potenSelect} />
          <PotenSelect title="아이템 레벨" value={equipSelect} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 등급</div>
        <div className="flex items-center">
          <PotenSelect title="현재 잠재능력" value={potenSelect} />
          <FormControlLabel control={<Checkbox />} label="미라클 타임" sx={{ marginBottom: 3, marginLeft: 1 }} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">보유 메소 (선택)</div>
        <TextField
          autoComplete="off"
          label="보유 메소"
          InputProps={{
            endAdornment: <InputAdornment position="end">메소</InputAdornment>,
          }}
        />
        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white">계산하기</button>
      </div>
      <UpResult />
      <Footer />
    </main>
  )
}
