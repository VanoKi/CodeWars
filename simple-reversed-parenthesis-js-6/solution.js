
function nameFunction (params) {
  const stack = []
  for (let i = 0; i < params.length; i++) {
    if (params[i] == '(') stack.push(params[i])
    else stack.pop()
  }
  return stack
}
console.log(nameFunction("(((())"))

