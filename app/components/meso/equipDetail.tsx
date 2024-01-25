import { Button } from '@mui/material'
import React from 'react'

const EquipDetail = () => {
  return (
    <>
      <div className="mt-3 flex w-full justify-between bg-blue-200 p-5">
        <EquipStatus />
        <EquipStatus />
      </div>
      <div className="w-full">
        <button className="flex w-1/2  items-center justify-center rounded-lg bg-red-500 py-4">내용물</button>
      </div>
    </>
  )
}

const EquipStatus = () => {
  return (
    <div>
      <div className="pb-7 text-purple-300 ">현재 등급: 에픽</div>
      <div className="pb-2 text-blue-500 ">공격력: 6%</div>
      <div className="pb-2 text-blue-500 ">공격력: 6%</div>
      <div className="pb-2 text-blue-500 ">공격력: 6%</div>
    </div>
  )
}
export default EquipDetail
