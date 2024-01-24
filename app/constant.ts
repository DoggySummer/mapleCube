interface cubeData {
  id: number
  name: string
  isUpperChange: boolean
  isCash: boolean
  price: number
  isMemory: boolean
}

export const cubeData: cubeData[] = [
  {
    id: 0,
    name: '수상한 큐브',
    price: 0,
    isUpperChange: true,
    isCash: false,
    isMemory: false,
  },
  {
    id: 1,
    name: '장인의 큐브',
    price: 0,
    isUpperChange: true,
    isCash: false,
    isMemory: false,
  },
  {
    id: 2,
    name: '명장의 큐브',
    price: 0,
    isUpperChange: true,
    isCash: false,
    isMemory: false,
  },
  {
    id: 3,
    name: '레드 큐브',
    price: 900,
    isUpperChange: true,
    isCash: true,
    isMemory: false,
  },
  {
    id: 4,
    name: '블랙 큐브',
    price: 1650,
    isUpperChange: true,
    isCash: true,
    isMemory: true,
  },
  {
    id: 5,
    name: '수상한 에디셔널 큐브',
    price: 0,
    isUpperChange: false,
    isCash: false,
    isMemory: false,
  },
  {
    id: 6,
    name: '에디셔널 큐브',
    price: 1800,
    isUpperChange: false,
    isCash: true,
    isMemory: false,
  },
  {
    id: 7,
    name: '화이트 에디셔널 큐브',
    price: 3000,
    isUpperChange: false,
    isCash: false,
    isMemory: true,
  },
  {
    id: 8,
    name: '메소(윗잠)',
    price: 3000,
    isUpperChange: true,
    isCash: false,
    isMemory: true,
  },
  {
    id: 9,
    name: '메소(아랫잠)',
    price: 3000,
    isUpperChange: false,
    isCash: false,
    isMemory: true,
  },
]
