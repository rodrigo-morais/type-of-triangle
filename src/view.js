import getTriangleType from './lib/triangle.js'

const isValidInput = (side_1, side_2, side_3) => Number.isInteger(side_1) && Number.isInteger(side_2) && Number.isInteger(side_3)

const getSides = () => Array.from(document.querySelectorAll('input'))
  .map(side => parseInt(side.value))

const getButton = () => document.querySelector('button')

const getOutput = () => document.querySelector('.result')

const getType = (side_1, side_2, side_3) => isValidInput(side_1, side_2, side_3) ?
  getTriangleType(side_1, side_2, side_3) :
  'INVALID INPUT'

export const initCalc = () => getButton().addEventListener('click', () => {
  let side_1, side_2, side_3
  [side_1, side_2, side_3] = getSides()

  getOutput().innerHTML = getType(side_1, side_2, side_3)
})

document.addEventListener('DOMContentLoaded', initCalc)
