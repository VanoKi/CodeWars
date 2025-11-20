export function capitalize(s: string): [string, string] {
  let odd = ''
  let even = ''
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 1) {
      even += s[i].toUpperCase()
      odd += s[i]
    } else {
      even += s[i]
      odd += s[i].toUpperCase()
    }
  }
  return [odd, even];
}

console.log(capitalize("abcdef"))