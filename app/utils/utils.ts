import { hitCeilingCount, itemLevel, mesoCost, rankUpPossibility } from '../constant'

/** 세 자리 마다 , 넣음 */
export const addCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/** 만 억 조 단위 넣기 */
export const numberToKorean = (number: number): string => {
  const numberDigit = Math.floor(Math.log10(number)) + 1
  let numberStr = ''
  if (5 < numberDigit && numberDigit < 9) {
    numberStr = number.toString()
    return numberStr.slice(0, -4) + '만 ' + numberStr.slice(-4)
  } else if (8 < numberDigit && numberDigit < 13) {
    numberStr = number.toString()
    return numberStr.slice(0, -8) + '억 ' + numberStr.slice(-8, -4) + '만 ' + numberStr.slice(-4)
  } else if (numberDigit > 12) {
    numberStr = number.toString()
    return (
      numberStr.slice(0, -12) +
      '조 ' +
      numberStr.slice(-12, -8) +
      '억 ' +
      numberStr.slice(-8, -4) +
      '만 ' +
      numberStr.slice(-4)
    )
  } else {
    return number.toString()
  }
}

/** 천장을 칠 때의 메소 */
export const HitCeiling = (rankNow: number, itemLevel: Number, rankGoal: number, isMiracle: boolean) => {
  let mesoCostEach
  let rankStatus = rankNow
  let mesoCostTotal = 0

  if (rankStatus > rankGoal || rankStatus === rankGoal) {
    return 0
  }
  if (isMiracle) {
    do {
      mesoCostEach = mesoCost.filter((item) => item.equipLevel === itemLevel && item.rankLevel === rankStatus)
      mesoCostTotal += (mesoCostEach[0].cost * hitCeilingCount[rankStatus].count) / 2
      rankStatus = rankStatus + 1
    } while (rankStatus < rankGoal)
  } else {
    do {
      mesoCostEach = mesoCost.filter((item) => item.equipLevel === itemLevel && item.rankLevel === rankStatus)
      mesoCostTotal += mesoCostEach[0].cost * hitCeilingCount[rankStatus].count
      rankStatus = rankStatus + 1
    } while (rankStatus < rankGoal)
  }

  return mesoCostTotal
}

/** 일반적인 기댓값 */
export const rankUpExpect = (rankNow: number, itemLevel: Number, rankGoal: number, isMiracle: boolean) => {
  let mesoCostEach
  let rankStatus = rankNow
  let mesoCostTotal = 0

  if (rankStatus > rankGoal || rankStatus === rankGoal) {
    return 0
  }
  if (isMiracle) {
    do {
      mesoCostEach = mesoCost.filter((item) => item.equipLevel === itemLevel && item.rankLevel === rankStatus)
      mesoCostTotal += mesoCostEach[0].cost / (rankUpPossibility[rankStatus].possibility * 2)
      rankStatus = rankStatus + 1
    } while (rankStatus < rankGoal)
  } else {
    do {
      mesoCostEach = mesoCost.filter((item) => item.equipLevel === itemLevel && item.rankLevel === rankStatus)
      mesoCostTotal += mesoCostEach[0].cost / rankUpPossibility[rankStatus].possibility
      rankStatus = rankStatus + 1
    } while (rankStatus < rankGoal)
  }
  return Math.floor(mesoCostTotal)
}

/** n메소 보유 시 당첨될 확률 */
export const fundToSuccessPossibility = (possibility: number, costPerTry: number, availableFunds: number) => {
  const tries = Math.floor(availableFunds / costPerTry)
  const cumulativeFailureProbability = Math.pow(1 - possibility, tries)
  const successPercentage = (1 - cumulativeFailureProbability) * 100
  return successPercentage.toFixed(2)
}
