/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1]

function result (numbers) {
  // Your Code Here
  const missNumber = [8]
  let missArr = []
  for (let i = 0; i <= numbers.length; i++) {
    if (missNumber.indexOf(numbers[i]) == -1) {
      missArr.push(missNumber)
    }
  }

  return missNumber[0]
}

console.log(result(numbers))
