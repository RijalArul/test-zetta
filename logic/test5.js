/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight']

function result (words) {
  // Your Code Here
  let sliceWord
  words.forEach(word => {
    // Check if the first word is prefix
    if (word.indexOf('fl') == 0) {
      sliceWord = word.slice(0, 2)
    }
  })

  return sliceWord
}

console.log(result(words))
