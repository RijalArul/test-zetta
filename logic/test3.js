/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: 'first test',
    classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }]
  },
  {
    session_name: null,
    classes: [
      { class_name: 'second class', students: [{ student_name: 'adi' }] }
    ]
  }
]

function result (data) {
  // Your Code Here
  let resultArr = []
  for (let i = 0; i < data.length; i++) {
    let obj = data[i]
    Object.keys(obj).forEach(index => {
      if (!obj[index]) {
        delete obj[index]
      }
      let classes = obj['classes']

      classes.forEach(clas => {
        Object.keys(clas).forEach(index => {
          if (!clas[index]) {
            delete clas[index]
          }
        })
        resultArr.push(clas)
      })
      resultArr.push(obj)
    })
  }
  return resultArr
}

console.log(result(data))
