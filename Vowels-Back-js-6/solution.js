
function shift (params, shift) {
  const abs = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < params.length; i++) {
    let index = abs.indexOf(params[i])
    result += abs[Math.abs((index + shift) % 26)]
  }
  return result
}
console.log(shift('codewars', -1))
