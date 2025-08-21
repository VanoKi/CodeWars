function sortTheInnerContent(words:string):string
{
  let ans = ''
  for (const word of words.split(' ')) {
    let core = Array.from(word.slice(1, -1)).sort((a, b) => b.localeCompare(a)).join('')
    ans += (word.slice(0, 1) +  core + word.slice(word.length - 1) + ' ')
  }
  return ans.trim()
}

console.log(sortTheInnerContent("sort the inner content in descending order"))
