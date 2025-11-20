
function nameFunction (params) {
  const capitals = []
  const low = []
  for (const p of params.split(' ')) {
    let char = p[0].toUpperCase().charCodeAt(0)
    if (!(char >64 && char < 91)) continue
    else {
      let firstChar = p[0].charCodeAt(0)
      if (firstChar >= 65 && firstChar <= 90) capitals.push(p)
      else low.push(p)
    }
  }
  return capitals.concat(low).join(' ')
}
console.log(nameFunction('123 baby You and Me'))
// console.log('a'.charCodeAt(0))
// console.log('z'.charCodeAt(0))
// console.log('A'.charCodeAt(0))
// console.log('Z'.charCodeAt(0))
