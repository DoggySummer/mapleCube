'use client'
import { Select } from '@mui/material'
import { NextRequest } from 'next/server'

import { useState } from 'react'

const AddDB = () => {
  const optionTypeData = ['STR', 'DEX', 'INT', 'LUK', '올스탯', '공격력', '마력', '방무', '데미지']
  const [form, setForm] = useState({
    optionName: '',
    optionType: '',
    value: 0,
    possibility: 0,
  })
  const [optionSeq, setOptionSeq] = useState('0')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSeq(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        body: JSON.stringify({
          optionName: form.optionName,
          optionSeq: optionSeq,
          optionType: form.optionType,
          value: form.value,
          possibility: form.possibility,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      console.log(res)
      if (res.ok) {
        alert('다음꺼 해라')
      } else {
        console.log('실패얌')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">이름</div>
          <input className="border px-3 py-3" name="optionName" onChange={handleChange} autoComplete="off" />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">옵션 줄</div>
          <select className="border px-3 py-3" name="optionSeq" onChange={handleSelectChange} autoComplete="off">
            <option value="1">첫 번째 줄</option>
            <option value="2">두 번째 줄</option>
            <option value="3">세 번째 줄</option>
          </select>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">옵션 타입</div>
          <select className="border px-3 py-3" name="optionSeq" onChange={handleSelectChange} autoComplete="off">
            {optionTypeData.map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              )
            })}
          </select>
          {/* <input className="border px-3 py-3" name="optionType" onChange={handleChange} autoComplete="off" /> */}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">값</div>
          <input className="border px-3 py-3" name="value" onChange={handleChange} autoComplete="off" />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">확률</div>
          <input className="border px-3 py-3" name="possibility" onChange={handleChange} autoComplete="off" />
        </div>
        <button className="mt-7 block w-36 border bg-blue-600 px-9 py-3 text-white">수락 버튼</button>
      </form>
    </div>
  )
}

export default AddDB
