
function nameFunction (params) {
  const regex = /(\d*)\(([^()]*)\)/g
  const myReplace = () => {
    let finded = regex.exec(params)
    // console.log(params)
    // console.log(finded)
    return  (finded[2] || '').repeat(+finded[1]  || 1)
  }
  while (params.includes('(')) {
    // console.log(params)
    params = params.replace(regex, myReplace())
  }
  return params
}
console.log(nameFunction('3(b(2(c)))'))

