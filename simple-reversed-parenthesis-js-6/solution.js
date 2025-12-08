
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
  return stack
}
console.log(nameFunction("(((())"))

