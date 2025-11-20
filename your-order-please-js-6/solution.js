
function nameFunction (params) {
  const numbers ='0123456789'
  let minElem = 0
  let ans = []
  for (const param of params.split(' ')) {
    console.log(param)
    for (const paramElement of param) {
      if (numbers.includes(paramElement)) {
        if (minElem < Number(paramElement)) {
          ans.push(param)
          minElem = Number(paramElement)
        }
      }
    }
  }
  return ans
}
console.log(nameFunction("is2 Thi1s T4est 3a"))

