/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4]

function result (data) {
  // Your Code Here
  const sortData = data.sort((a, b) => a - b)
  let resultArr = []
  for (let i = 0; i < sortData.length; i++) {
    if (sortData[i] !== sortData[i + 1]) {
      resultArr.push(sortData[i])
    }
  }

  return resultArr
}

console.log(result(data))
