import assert from 'assert'
import compact from '../src/compact.js'

describe('compact', () => {
  const arr = [1, 23, '', null, 6]
  it('should return filtered array without falsy', () => {
    const actual = compact(arr)
    assert.deepStrictEqual(actual, [1, 23, 6])
  })
})