const sumTwoSmallest = (a, b, c) => a + b + c - Math.max(...[a, b, c])

const largest = (a, b, c) => Math.max(...[a, b, c])

const isValid = (a, b, c) => a > 0 && b > 0 && c > 0 && sumTwoSmallest(a, b, c) >= largest(a, b, c)

const isEquilateral = (a, b, c) => a === b && b === c

const isIsosceles = (a, b, c) => a === b || a === c || b === c

const getTriangleType = (a, b, c) => isValid(a, b, c) ?
  isEquilateral(a, b, c) && 'EQUILATERAL' || isIsosceles(a, b, c) && 'ISOSCELES' || 'SCALENE' :
  'INVALID TRIANGLE'

export default getTriangleType
