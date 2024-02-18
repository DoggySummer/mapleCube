import React from 'react'

const ChooseResult = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto mb-4 w-[90vw] text-left text-3xl text-gray-600 sm:w-[800px]">결과</div>
      <div className=" mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 pl-6 sm:w-[800px]">
        <div className="pb-2 text-xl text-blue-400">기댓값(메소)</div>
        <div className="">1903482934 (약 1.3억) 메소 사용 후 목표 옵션을 획득하실 수 있습니다</div>
        <div className="mt-6 pb-2 text-xl text-blue-400">예상 퍼센티지</div>
        <div className="pb-1">목표 옵션이 나올 확률은 1.2% 입니다</div>
        <div className="mt-6 pb-2 text-xl text-blue-400">보유 메소 대비 기댓값</div>
        <div className="pb-1">보유 메소 1903482934 (약 1.3억)으로 목표 옵션에 도달할 확률은 0.02%입니다 </div>
      </div>
    </div>
  )
}

export default ChooseResult
