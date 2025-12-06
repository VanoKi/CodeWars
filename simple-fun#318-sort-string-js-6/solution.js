
function nameFunction (params) {
  let abc = ''
  for (let i = 97; i < 123; i++) {
    abc += String.fromCharCode(i)
  }
  for (let i = 65; i < 91; i++) {
    abc += String.fromCharCode(i)
  }
  const ans = []
  const toSort = []
  for (const elem of params) {
    if (!abc.includes(elem)) ans.push(elem)
    else {
      ans.push('')
      toSort.push(elem)
    }
  }
  const sorted = toSort.sort((x, y) => {
    let lx = x.toLowerCase()
    let ly = y.toLowerCase()
    if (lx < ly) return -1
    if (lx > ly) return 1
    return 0
  })
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == '') {
      ans[i] = sorted.shift()
    }
  }
  return ans
}
console.log(nameFunction("cCBbAa"))

console.log('a'.charCodeAt(0))
console.log('z'.charCodeAt(0))
console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))

