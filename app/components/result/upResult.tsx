import React from 'react'

const UpResult = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto mb-4 w-[90vw] text-left text-3xl text-gray-600 sm:w-[600px]">결과</div>
      <div className=" mx-auto mb-4 w-[90vw] rounded-lg bg-white px-4 py-4 pl-6 sm:w-[600px]">
        <div className="pb-2 text-xl text-blue-400">기댓값</div>
        <div className="">1903482934 (약 1.3억) 메소 사용 후 목표 등급에 도달하실 수 있습니다</div>
        <div className="mt-6 pb-2 text-xl text-blue-400">천장 칠 확률</div>
        <div className="pb-1">에픽 {'>'} 유니크 : 3% </div>
        <div className="pb-1">유니크 {'>'} 레전더리 : 1% </div>
      </div>
    </div>
  )
}

export default UpResult
