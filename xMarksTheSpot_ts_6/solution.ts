
function nameFunction (n:number) {
  // return n
  // const arr = Array(n).fill(Array(n).fill(0))
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }
  // return arr
  let arr = []
  for (let i = 0; i < n; i++) {
    // console.log()
    let temp = []
    for (let j = 0; j < n; j++) {
      temp.push(0)
    }
    arr.push(temp)
  }
  return arr
}
console.log(nameFunction(5))