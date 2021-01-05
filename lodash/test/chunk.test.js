import assert from 'assert'
import chunk from '../src/chunk.js'

describe('chunk', () => {
  const arr = [0, 1, 2, 3, 4, 5]

  it('should return chunked arrays', () => {
    const actual = chunk(arr, 3)
    assert.deepStrictEqual(actual, [[0, 1, 2], [3, 4, 5]])
  })

  it('should return the last chunk as remaining elements', () => {
    const actual = chunk(arr, 4)
    assert.deepStrictEqual(actual, [[0, 1, 2, 3], [ 4, 5]])
  })
})