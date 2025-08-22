
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
    for (let j = 1; j <= n; j++) {
      // console.log(i)
      if (n - i == j || i + 1 == j) {
        temp.push(1)
      }else {
        temp.push(0)
      }
    }
    arr.push(temp)
  }
  return arr
}
// console.log(nameFunction(5))
let answer = nameFunction(4)
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i])
}