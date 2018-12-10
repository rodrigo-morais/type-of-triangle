import getTringleType from '../../../src/lib/triangle'

describe('#getTriangleType', () => {
  describe('when sides are 0', () => {
    it('returns INVALID TRIANGLE', () => {
      expect(getTringleType(0, 0, 0)).toEqual('INVALID TRIANGLE')
    })
  })

  describe('when at least one side is 0', () => {
    it('returns INVALID TRIANGLE', () => {
      expect(getTringleType(4, 0, 3)).toEqual('INVALID TRIANGLE')
    })
  })

  describe('when one side is bigger than the sum of the other two sides', () => {
    it('returns INVALID TRIANGLE', () => {
      expect(getTringleType(4, 10, 3)).toEqual('INVALID TRIANGLE')
    })
  })

  describe('when all sides are equal', () => {
    it('returns an EQUILATERAL triangle', () => {
      expect(getTringleType(3, 3, 3)).toEqual('EQUILATERAL')
    })
  })

  describe('when two sides are equal', () => {
    it('returns an ISOSCELES triangle', () => {
      expect(getTringleType(3, 4, 3)).toEqual('ISOSCELES')
    })
  })

  describe('when all sides are different', () => {
    it('returns an SCALENE triangle', () => {
      expect(getTringleType(3, 6, 4)).toEqual('SCALENE')
    })
  })
})
