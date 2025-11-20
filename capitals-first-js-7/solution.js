
function nameFunction (params) {
  const capitals = []
  const low = []
  for (const p of params.split(' ')) {
    if (p[0].toUpperCase()) capitals.push(p)
    else low.push(p)
  }
  return capitals.concat(low).join(' ')
}
console.log(nameFunction("hey You, Sort me Already!"))

