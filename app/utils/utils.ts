export const addCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

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

// export const numberToAbstract = (number: number): string => {
//   const numberDigit = Math.floor(Math.log10(number)) + 1
//   if (5 < numberDigit && numberDigit < 9) {
//     const numberStr: string = number.toString()
//     return numberStr.slice(0, -4) + '만 '
//   } else if (numberDigit > 8) {
//     const numberStr: string = number.toString()
//     return numberStr.slice(0, -8) + '억.' + numberStr[numberDigit - 8]
//   } else {
//     return number.toString()
//   }
// }
