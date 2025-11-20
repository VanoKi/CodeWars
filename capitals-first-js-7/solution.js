
function nameFunction (params) {
  const capitals = []
  const low = []
  for (const p of params.split(' ')) {
    let firstChar = p[0].charCodeAt(0)
    if (firstChar >= 65 && firstChar <= 90) capitals.push(p)
    else low.push(p)
  }
  return capitals.concat(low).join(' ')
}
console.log(nameFunction("hey You, Sort me Already!"))
// console.log('A'.charCodeAt(0))
// console.log('Z'.charCodeAt(0))
