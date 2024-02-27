'use client'
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {
  const [age, setAge] = useState(20)
  const [count, setCount] = useState(0)

  const [cont, setCont] = useState(0)
  const clickCont = () => {
    setCont(cont + 4)
    setCont(cont + 2)
    // setCont((prev) => prev + 4)
    // setCont((prev) => prev + 2)
  }
  const countAge = () => {
    setCount((count) => {
      if (count + 1 < 3) {
        setAge(age + 1)
      }
      return count + 1
    })
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const handleChange = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value)
    }
  }

  // useEffect(() => {
  //   if (count !== 0 && count < 3) {
  //     setAge(age + 1)
  //   }
  // }, [count])
  return (
    <div>
      <button onClick={countAge}>누르면한살먹기</button>
      {/* <button onClick={() => setCount(count + 1)}>누르면한살먹기</button> */}

      <div>나이 {age}</div>
      <button onClick={clickCont} className="mt-10">
        연속된 setstate사용 +4 이후 +2 되어야함
      </button>
      <div>{cont}</div>

      <div className="mt-10">
        <input ref={inputRef} type="text" onChange={handleChange} className="border border-black" />
        <p>Ref활용한 Input 값: {inputValue}</p>
      </div>
    </div>
  )
}

export default Page
