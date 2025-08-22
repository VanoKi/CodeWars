
function nameFunction (n:number) {
  // return n
  const arr = Array(n).fill(Array(n).fill(0))
  // for (let i = 0; i <= n; i++) {
  //   arr.push(Array.length(n))
  // }
  return arr
}
console.log(nameFunction(5))