
function nameFunction (params) {
  const numbers ='0123456789'
  let minElem = 0
  let ans = []
  for (const param of params.split(' ')) {
    console.log(param)
    for (const paramElement of param) {
      if (numbers.includes(paramElement)) {
        ans[Number(paramElement)] = param
      }
    }
  }
  return ans.slice(1).join(' ')
}
console.log(nameFunction("is2 Thi1s T4est 3a"))

