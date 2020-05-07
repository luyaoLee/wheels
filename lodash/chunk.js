/**
 * Creates an array of elememts split into groups the length of `size`
 * If `array` can't be split evenly,the final chunk will be the remaining elements.
 * 
 * @category Array
 * @param {Array} array
 * @param {Number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks
 * 
 * @example
 * 
 * chunk([1, 2, 4, 5], 2)
 * // => [[1, 2], [4, 5]]
 * 
 * chunk([1,2,3,4], 2)
 * // => [[1, 2], [3, 4]]
 */
function chunk(array, size = 1) {
  const result = []
  const groupNum = Math.ceil(arr.length / size)
  for(let i = 0; i < groupNum; i++) {
    const group = arr.slice(i*size, (i+1)*size)
    result.push(group)
  }
  return result
}

export default chunk