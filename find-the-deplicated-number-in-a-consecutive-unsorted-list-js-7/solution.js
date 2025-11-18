
function nameFunction (params) {
  const seem = []
  for (const param of params) {
    if (seem.includes(param)) return param
    else seem.push(param)
  }
}
console.log(nameFunction([3, 2, 5, 1, 3, 4]))

