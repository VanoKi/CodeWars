
function nameFunction (params) {
  let str =  Array.from(String(params)).reverse()
  const ans = []
  for (let i = 0; i < str.length; i += 3) {
    ans.unshift(str.slice(i, i + 3).reverse().join(''))
  }
  return ans.join(',')
}
console.log(nameFunction(12345678))

