import normalCube01 from '@/public/normalCube01.png'
import normalCube02 from '@/public/normalCube02.png'
import normalCube03 from '@/public/normalCube03.png'
import normalCube04 from '@/public/normalCube04.png'

import cashCube01 from '@/public/cashCube01.png'
import cashCube02 from '@/public/cashCube02.png'
import cashCube03 from '@/public/cashCube03.png'
import cashCube04 from '@/public/cashCube04.png'
import meso from '@/public/meso.png'
import { StaticImageData } from 'next/image'

export interface cubeDataType {
  id: number
  name: string
  isUpperChange: boolean
  cubeType: 'normal' | 'cash' | 'meso'
  price: number
  isMemory: boolean
  img: StaticImageData
}

export const cubeData: cubeDataType[] = [
  {
    id: 0,
    name: '수상한 큐브',
    price: 0,
    isUpperChange: true,
    cubeType: 'normal',
    isMemory: false,
    img: normalCube01,
  },
  {
    id: 1,
    name: '장인의 큐브',
    price: 0,
    isUpperChange: true,
    cubeType: 'normal',
    isMemory: false,
    img: normalCube02,
  },
  {
    id: 2,
    name: '명장의 큐브',
    price: 0,
    isUpperChange: true,
    cubeType: 'normal',
    isMemory: false,
    img: normalCube03,
  },
  {
    id: 3,
    name: '레드 큐브',
    price: 900,
    isUpperChange: true,
    cubeType: 'cash',
    isMemory: false,
    img: cashCube01,
  },
  {
    id: 4,
    name: '블랙 큐브',
    price: 1650,
    isUpperChange: true,
    cubeType: 'cash',
    isMemory: true,
    img: cashCube02,
  },
  {
    id: 5,
    name: '수상한 에디셔널 큐브',
    price: 0,
    isUpperChange: false,
    cubeType: 'normal',
    isMemory: false,
    img: normalCube04,
  },
  {
    id: 6,
    name: '에디셔널 큐브',
    price: 1800,
    isUpperChange: false,
    cubeType: 'cash',
    isMemory: false,
    img: cashCube03,
  },
  {
    id: 7,
    name: '화이트 에디셔널 큐브',
    price: 3000,
    isUpperChange: false,
    cubeType: 'cash',
    isMemory: true,
    img: cashCube04,
  },
  {
    id: 8,
    name: '메소(윗잠)',
    price: 3000,
    isUpperChange: true,
    cubeType: 'meso',
    isMemory: true,
    img: meso,
  },
  {
    id: 9,
    name: '메소(아랫잠)',
    price: 3000,
    isUpperChange: false,
    cubeType: 'meso',
    isMemory: true,
    img: meso,
  },
]
