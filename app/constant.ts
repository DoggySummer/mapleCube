interface mesoCost {
  id: number
  potenLevel: 'rare' | 'epic' | 'unique' | 'legendary'
  equipLevel: '159' | '199' | '249' | '300'
  cost: number
}

export interface SelectType {
  id: number
  value: number
  lang: string
}

export const equipSelect = [
  {
    id: 0,
    value: 0,
    lang: '159 이하',
  },
  {
    id: 1,
    value: 1,
    lang: '160 ~ 199',
  },
  {
    id: 2,
    value: 2,
    lang: '200 ~ 249',
  },
  {
    id: 3,
    value: 3,
    lang: '250 이상',
  },
]

export const potenSelect = [
  {
    id: 0,
    value: 0,
    lang: '레어',
  },
  {
    id: 1,
    value: 1,
    lang: '에픽',
  },
  {
    id: 2,
    value: 2,
    lang: '유니크',
  },
  {
    id: 3,
    value: 3,
    lang: '레전더리',
  },
]


export const mesoCost: mesoCost[] = [
  {
    id: 0,
    potenLevel: 'rare',
    equipLevel: '159',
    cost: 4000000,
  },
  {
    id: 1,
    potenLevel: 'epic',
    equipLevel: '159',
    cost: 16000000,
  },
  {
    id: 2,
    potenLevel: 'unique',
    equipLevel: '159',
    cost: 34000000,
  },
  {
    id: 3,
    potenLevel: 'legendary',
    equipLevel: '159',
    cost: 40000000,
  },
  {
    id: 4,
    potenLevel: 'rare',
    equipLevel: '199',
    cost: 42500000,
  },
  {
    id: 5,
    potenLevel: 'epic',
    equipLevel: '199',
    cost: 17000000,
  },
  {
    id: 6,
    potenLevel: 'unique',
    equipLevel: '199',
    cost: 36125000,
  },
  {
    id: 7,
    potenLevel: 'legendary',
    equipLevel: '199',
    cost: 42500000,
  },
  {
    id: 8,
    potenLevel: 'rare',
    equipLevel: '249',
    cost: 4500000,
  },
  {
    id: 9,
    potenLevel: 'epic',
    equipLevel: '249',
    cost: 18000000,
  },
  {
    id: 10,
    potenLevel: 'unique',
    equipLevel: '249',
    cost: 38250000,
  },
  {
    id: 11,
    potenLevel: 'legendary',
    equipLevel: '249',
    cost: 45000000,
  },
  {
    id: 12,
    potenLevel: 'rare',
    equipLevel: '300',
    cost: 5000000,
  },
  {
    id: 13,
    potenLevel: 'epic',
    equipLevel: '300',
    cost: 20000000,
  },
  {
    id: 14,
    potenLevel: 'unique',
    equipLevel: '300',
    cost: 42500000,
  },
  {
    id: 15,
    potenLevel: 'legendary',
    equipLevel: '300',
    cost: 50000000,
  },
]
