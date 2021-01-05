/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {*} array
 * @returns {Array} Returns the new array of filtered values.
 */

import { falsy } from '../utils'

export default function compact(array) {
  return array.filter(item => !falsy.includes(item))
}
