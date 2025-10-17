
function nameFunction (params, shift) {
  const abs = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < params.length; i++) {
    let index = abs.indexOf(params[i])
    result += abs[((index + shift) % 26 + 26) % 26]
  }
  return result
}
console.log(nameFunction('codewars', 1))
