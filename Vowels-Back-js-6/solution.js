const vowelsBack = (str) => {
  const detectChar = (char) => {
    if ('aeiu'.includes(char)) {
      return -5
    } else if ('co'.includes(char)) {
      return -1
    } else if ('d'.includes(char)) {
      return -3
    } else if ('e'.includes(char)) {
      return -4
    } else {
      return 9
    }
  }

  function shift (params, shift) {
    const abs = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < params.length; i++) {
      let index = abs.indexOf(params[i])
      result += abs[Math.abs((index + shift) % 26)]
    }
    return result
  }

  for (let i = 0; i < str.length; i++) {
    console.log(shift(str[i], detectChar(str[i])))
  }
}

vowelsBack('codewars')