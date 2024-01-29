import { Button, Checkbox, FormControlLabel } from '@mui/material'
import EquipDetail from './components/meso/equipDetail'
import PotenSelect from './components/meso/potenSelect'
import { equipSelect, potenSelect } from './constant'
import Result from './components/result/result'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-center bg-gray-200">
      <div className="mx-auto mb-4 w-[90vw] text-left text-3xl text-gray-600 sm:w-[600px]">잠재능력 시뮬레이터</div>
      <div className="mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 sm:w-[600px]">
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
        <button className="mt-5 w-[100%] bg-blue-400 py-2 text-white">계산하기</button>
      </div>
      <Result />
    </main>
  )
}
