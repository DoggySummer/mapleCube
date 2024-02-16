export type itemLevel = 0 | 1 | 2 | 3
interface mesoCost {
  id: number
  rankLevel: number
  equipLevel: 0 | 1 | 2 | 3
  cost: number
}

export interface SelectType {
  value: number
  lang: string
}

export const itemLevelSelect = [
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

export const itemTypeSelect = [
  {
    id: 0,
    value: 0,
    lang: '무기',
  },
  {
    id: 1,
    value: 1,
    lang: '엠블렘',
  },
  {
    id: 2,
    value: 2,
    lang: '보조무기(포스실드, 소울링 제외)',
  },
  {
    id: 3,
    value: 3,
    lang: '포스실드, 소울링',
  },
  {
    id: 4,
    value: 4,
    lang: '방패',
  },
  {
    id: 5,
    value: 5,
    lang: '모자',
  },
  {
    id: 6,
    value: 6,
    lang: '상의',
  },
  {
    id: 7,
    value: 7,
    lang: '신발',
  },
  {
    id: 8,
    value: 8,
    lang: '장갑',
  },
  {
    id: 9,
    value: 9,
    lang: '망토',
  },
  {
    id: 10,
    value: 10,
    lang: '벨트',
  },
  {
    id: 11,
    value: 11,
    lang: '어깨장식',
  },
  {
    id: 12,
    value: 12,
    lang: '얼굴장식',
  },
  {
    id: 13,
    value: 13,
    lang: '눈장식',
  },
  {
    id: 14,
    value: 14,
    lang: '귀고리',
  },
  {
    id: 15,
    value: 15,
    lang: '반지',
  },
  {
    id: 16,
    value: 16,
    lang: '팬던트',
  },
  {
    id: 17,
    value: 17,
    lang: '기계심장',
  },
]

interface itemOption {
  value: number
  lang: string
  type: string
}

export const itemOptionCommon: itemOption[] = [
  {
    value: 0,
    lang: '없음',
    type: '잡옵',
  },
  {
    value: 1,
    lang: 'STR %',
    type: 'STR',
  },
  {
    value: 2,
    lang: 'DEX %',
    type: 'DEX',
  },
  {
    value: 3,
    lang: 'INT %',
    type: 'INT',
  },
  {
    value: 4,
    lang: 'LUK %',
    type: 'LUK',
  },
  {
    value: 5,
    lang: '올스탯 %',
    type: '올스탯',
  },
  {
    value: 6,
    lang: '최대 HP %',
    type: 'HP',
  },
]

export const itemOptionWeapon: itemOption[] = [
  {
    value: 7,
    lang: '공격력 %',
    type: '공격력',
  },
  {
    value: 8,
    lang: '마력 %',
    type: '마력',
  },
  {
    value: 9,
    lang: '방어율 무시 %',
    type: '몬스터',
  },
  {
    value: 10,
    lang: '보스 공격력 %',
    type: '보스',
  },
  {
    value: 11,
    lang: '데미지 %',
    type: '데미지',
  },
]

export const itemOptionEmblem: itemOption[] = [
  {
    value: 7,
    lang: '공격력 %',
    type: '공격력',
  },
  {
    value: 8,
    lang: '마력 %',
    type: '마력',
  },
  {
    value: 9,
    lang: '방어율 무시 %',
    type: '몬스터',
  },
  {
    value: 11,
    lang: '데미지 %',
    type: '데미지',
  },
]

export const itemOptionGlove: itemOption[] = [
  {
    value: 12,
    lang: '크리티컬 데미지 %',
    type: '크뎀',
  },
]
export const itemOptionTop: itemOption[] = [
  {
    value: 13,
    lang: '재사용 대기시간 초',
    type: '쿨감',
  },
]

export const itemOptionAccessory: itemOption[] = [
  {
    value: 14,
    lang: '메소 획득량 %',
    type: '메소',
  },
  {
    value: 15,
    lang: '아이템 드롭률 %',
    type: '아이템',
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
