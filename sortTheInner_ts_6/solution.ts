function sortTheInnerContent(words:string):string
{
  // return words;
  let ans = ''
  for (const word of words.split(' ')) {
    // console.log(word)
    let core = Array.from(word.slice(1, -1)).sort((a, b) => b - a).join('')
    console.log(core)
    // ans += (word.slice(0, 1) +  core + word.slice(word.length - 1) + ' ')
  }
  // words.split(' ').forEach(word => console.log(word))
  return ans
}

// console.log(sortTheInnerContent("sort the inner content in descending order"))
console.log(Array.from('abcd').sort((a, b) => b.localeCompare(a)))