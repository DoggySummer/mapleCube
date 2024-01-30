'use client'
import { NextRequest } from 'next/server'

import { useState } from 'react'

const AddDB = () => {
  const [form, setForm] = useState({
    optionName: '',
    optionSeq: 0,
    optionType: '',
    value: 0,
    possibility: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        body: JSON.stringify({
          optionName: form.optionName,
          optionSeq: form.optionSeq,
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
        console.log('성공이얌')
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
          <input className="border px-3 py-3" name="optionName" onChange={handleChange} />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">옵션 줄</div>
          <input className="border px-3 py-3" name="optionSeq" onChange={handleChange} />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">옵션 타입</div>
          <input className="border px-3 py-3" name="optionType" onChange={handleChange} />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">값</div>
          <input className="border px-3 py-3" name="value" onChange={handleChange} />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="pr-4 text-xl">확률</div>
          <input className="border px-3 py-3" name="possibility" onChange={handleChange} />
        </div>
        <button className="mt-7 block w-36 border bg-blue-600 px-9 py-3 text-white">수락 버튼</button>
      </form>
    </div>
  )
}

export default AddDB
