
function nameFunction (params) {
  let abc = ''
  for (let i = 97; i < 123; i++) {
    abc += String.fromCharCode(i)
  }
  for (let i = 65; i < 91; i++) {
    abc += String.fromCharCode(i)
  }
  // return abc
  const ans = []
  const toSort = []
  for (const elem of params) {
    if (!abc.includes(elem)) ans.push(elem)
    else {
      ans.push('')
      toSort.push(elem)
    }
  }
  return toSort.sort()
}
console.log(nameFunction("cCBbAa"))

console.log('a'.charCodeAt(0))
console.log('z'.charCodeAt(0))
console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))

