
function nameFunction (params) {
  let seems = ''
  let duplicates = ''
  for (const param of params) {
    if (seems.includes(param)) duplicates += param
    else seems += param
  }
  return [seems, duplicates]
}
console.log(nameFunction( "abccdefee"))

