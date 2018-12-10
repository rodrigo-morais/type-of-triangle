import { initCalc } from '../../src/view'
import getTriangleType from '../../src/lib/triangle.js'

jest.mock('../../src/lib/triangle')

const initDOM = (html) => {
  document.body.innerHTML = html
  initCalc()

  const button = document.querySelector('button')
  button.click()

  return document.querySelector('.result').innerHTML
}

describe('#initCalc', () => {
  describe('when sides are empty', () => {
    const html = '<input type="number" />' +
      '<input type="number" />' +
      '<input type="number" />' +
      '<button />' +
      '<div class="result" />'

    it('returns INVALID INPUT', () => {
      expect.assertions(2)

      const result = initDOM(html)

      expect(result).toEqual('INVALID INPUT')
      expect(getTriangleType).not.toHaveBeenCalled()
    })
  })

  describe('when sides are invalid', () => {
    const html = '<input type="number" value="0" />' +
      '<input type="number" value="0" />' +
      '<input type="number" value="0" />' +
      '<button />' +
      '<div class="result" />'

    it('calls `getTriangleType` with 0s', () => {
      initDOM(html)

      expect(getTriangleType).toHaveBeenCalledWith(0, 0, 0)
    })
  })

  describe('when sides are valid', () => {
    const html = '<input type="number" value="3" />' +
      '<input type="number" value="4" />' +
      '<input type="number" value="5" />' +
      '<button />' +
      '<div class="result" />'

    it('calls `getTriangleType` with the sides', () => {
      initDOM(html)

      expect(getTriangleType).toHaveBeenCalledWith(3, 4, 5)
    })
  })
})
