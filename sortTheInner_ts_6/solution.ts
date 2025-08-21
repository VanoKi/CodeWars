function sortTheInnerContent(words:string):string
{
  // return words;
  let ans = ''
  for (const word of words.split(' ')) {
    // console.log(word)
    if (word.length <= 3) {
      ans += (word + ' ')
    } else {
      ans += (Array.from(word).reverse().join('') + ' ')
    }
  }
  // words.split(' ').forEach(word => console.log(word))
  return ans
}

console.log(sortTheInnerContent("sort the inner content in descending order"))