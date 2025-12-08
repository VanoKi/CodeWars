
function nameFunction (params) {
  const stack = []
  for (let i = 0; i < params.length; i++) {
    if (params[i] == '(') stack.push(params[i])
    else {
      if (stack.length >0 && stack[stack.length -1] === '(') {
        stack.pop()
      } else {
        stack.push(')')
      }
    }
  }
  if (stack.length % 2 !== 0) return -1
  const opens = stack.filter(c => c === '(').length
  const closes = stack.length - opens
  return Math.ceil(opens / 2) + Math.ceil(closes / 2)
}
console.log(nameFunction("(((())"))

