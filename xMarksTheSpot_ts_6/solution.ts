
function nameFunction (n:number) {
  let arr = []
  for (let i = 0; i < n; i++) {
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
let answer = nameFunction(5)
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i])
}