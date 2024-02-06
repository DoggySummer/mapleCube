export type itemLevel = 0 | 1 | 2 | 3
interface mesoCost {
  id: number
  rankLevel: number
  equipLevel: 0 | 1 | 2 | 3
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

export const rankSelect = [
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

export const rankUpPossibility = [
  {
    id: 0,
    possibility: 0.15,
  },
  {
    id: 1,
    possibility: 0.035,
  },
  {
    id: 2,
    possibility: 0.014,
  },
]

export const mesoCost: mesoCost[] = [
  {
    id: 0,
    rankLevel: 0,
    equipLevel: 0,
    cost: 4000000,
  },
  {
    id: 1,
    rankLevel: 1,
    equipLevel: 0,
    cost: 16000000,
  },
  {
    id: 2,
    rankLevel: 2,
    equipLevel: 0,
    cost: 34000000,
  },
  {
    id: 3,
    rankLevel: 3,
    equipLevel: 0,
    cost: 40000000,
  },
  {
    id: 4,
    rankLevel: 0,
    equipLevel: 1,
    cost: 42500000,
  },
  {
    id: 5,
    rankLevel: 1,
    equipLevel: 1,
    cost: 17000000,
  },
  {
    id: 6,
    rankLevel: 2,
    equipLevel: 1,
    cost: 36125000,
  },
  {
    id: 7,
    rankLevel: 3,
    equipLevel: 1,
    cost: 42500000,
  },
  {
    id: 8,
    rankLevel: 0,
    equipLevel: 2,
    cost: 4500000,
  },
  {
    id: 9,
    rankLevel: 1,
    equipLevel: 2,
    cost: 18000000,
  },
  {
    id: 10,
    rankLevel: 2,
    equipLevel: 2,
    cost: 38250000,
  },
  {
    id: 11,
    rankLevel: 3,
    equipLevel: 2,
    cost: 45000000,
  },
  {
    id: 12,
    rankLevel: 0,
    equipLevel: 3,
    cost: 5000000,
  },
  {
    id: 13,
    rankLevel: 1,
    equipLevel: 3,
    cost: 20000000,
  },
  {
    id: 14,
    rankLevel: 2,
    equipLevel: 3,
    cost: 42500000,
  },
  {
    id: 15,
    rankLevel: 3,
    equipLevel: 3,
    cost: 50000000,
  },
]

export const hitCeilingCount = [
  {
    id: 0,
    rank: 0,
    count: 10,
  },
  {
    id: 1,
    rank: 1,
    count: 42,
  },
  {
    id: 2,
    rank: 2,
    count: 107,
  },
]
