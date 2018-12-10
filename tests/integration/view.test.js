import { initCalc } from '../../src/view'

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
      const result = initDOM(html)

      expect(result).toEqual('INVALID INPUT')
    })
  })

  describe('when sides are invalid and equal 0', () => {
    const html = '<input type="number" value="0" />' +
      '<input type="number" value="0" />' +
      '<input type="number" value="0" />' +
      '<button />' +
      '<div class="result" />'

    it('returns INVALID TRIANGLE', () => {
      const result = initDOM(html)

      expect(result).toEqual('INVALID TRIANGLE')
    })
  })

  describe('when sides are invalid and one is bigger than the sum of other two', () => {
    const html = '<input type="number" value="10" />' +
      '<input type="number" value="3" />' +
      '<input type="number" value="4" />' +
      '<button />' +
      '<div class="result" />'

    it('returns INVALID TRIANGLE', () => {
      const result = initDOM(html)

      expect(result).toEqual('INVALID TRIANGLE')
    })
  })

  describe('when sides are valid and different', () => {
    const html = '<input type="number" value="3" />' +
      '<input type="number" value="4" />' +
      '<input type="number" value="5" />' +
      '<button />' +
      '<div class="result" />'

    it('returns SCALENE type', () => {
      const result = initDOM(html)

      expect(result).toEqual('SCALENE')
    })
  })

  describe('when sides are valid and two are equal', () => {
    const html = '<input type="number" value="3" />' +
      '<input type="number" value="4" />' +
      '<input type="number" value="4" />' +
      '<button />' +
      '<div class="result" />'

    it('returns ISOSCELES type', () => {
      const result = initDOM(html)

      expect(result).toEqual('ISOSCELES')
    })
  })

  describe('when sides are valid and equal', () => {
    const html = '<input type="number" value="4" />' +
      '<input type="number" value="4" />' +
      '<input type="number" value="4" />' +
      '<button />' +
      '<div class="result" />'

    it('returns EQUILATERAL type', () => {
      const result = initDOM(html)

      expect(result).toEqual('EQUILATERAL')
    })
  })
})
