function sortTheInnerContent(words:string):string
{
  let ans = ''
  for (const word of words.split(' ')) {
    if (word.length > 3 ) {
      let core = Array.from(word.slice(1, -1)).sort((a, b) => b.localeCompare(a)).join('')
      // console.log(`word: ${word}`)
      // console.log(`core: ${core}`)
      ans += (word.slice(0, 1) +  core + word.slice(word.length - 1) + ' ')
    } else {
      ans += (word + ' ')
    }
  }
  return ans.trim()
}

console.log(sortTheInnerContent("sort the inner content in descending order"))
console.log('bt zyxunkgccp r obl psrqffdai')
