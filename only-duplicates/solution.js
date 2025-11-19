
function nameFunction (params) {
  const dict = {}
  for (const param of params) {
    if (dict[param]) dict[param] += param
    else dict[param] = param
  }
  return dict
}
console.log(nameFunction( "abccdefee"))
