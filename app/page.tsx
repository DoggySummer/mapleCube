import EquipDetail from './components/meso/equipDetail'
import PotenSelect from './components/meso/potenSelect'
import { equipSelect, potenSelect } from './constant'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-center bg-gray-200">
      <div className="mx-auto mb-4 w-[600px] text-left text-3xl text-gray-600">잠재능력 시뮬레이터</div>
      <div className="mx-auto mb-4 w-[600px] rounded-lg bg-white px-4 py-4">
        <div className="ml-2 pb-2 text-xl text-blue-400">장비 정보</div>
        <div className="flex">
          <PotenSelect title="현재 잠재능력" value={potenSelect} />
          <PotenSelect title="아이템 레벨" value={equipSelect} />
        </div>
        <div className="ml-2 mt-6 pb-2 text-xl text-blue-400">목표 등급</div>
        <PotenSelect title="현재 잠재능력" value={potenSelect} />
      </div>
    </main>
  )
}
