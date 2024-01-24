import Image from 'next/image'
import React from 'react'
import mapleFont from '@/public/fonts/Maplestory Bold.ttf'

import 수상한큐브 from '@/public/수상한 큐브.png'
import 장인의큐브 from '@/public/장인의 큐브.png'
import 명장의큐브 from '@/public/장인의 큐브.png'
import 레드큐브 from '@/public/레드큐브.png'
import 블랙큐브 from '@/public/블랙큐브.png'
import 에디셔널큐브 from '@/public/에디셔널.png'
import 수에큡 from '@/public/수상한 에디셔널 큐브.png'
import 화에큡 from '@/public/화이트 에디셔널 큐브.png'

const InputCubeBox = () => {
  return (
    <div className="pt-4">
      <InputValue />
      <InputValue />
    </div>
  )
}

const InputValue = () => {
  return (
    <div className="flex flex-col items-start pb-4">
      <div className="flex items-center">
        <Image src={수상한큐브} alt="수상한 큐브" className="mr-3" />
        <div className="font-bold">수상한 큐브</div>
      </div>
    </div>
  )
}

export default InputCubeBox
