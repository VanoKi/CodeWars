
function nameFunction (params) {
  const seems = []
  let duplicates = []
  for (const param of params) {
    let index = seems.indexOf(param)
    if (index !== -1) {
      duplicates += (seems[index] + param)
    } else {
      seems.push(param)
    }
  }
  return [seems, duplicates]
}
console.log(nameFunction( "abccdefee"))
// console.log("abccdefee".indexOf('z'))