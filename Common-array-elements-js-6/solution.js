function common(a, b, c) {
  const dictForElem = (elem) => {
    const dict = {}
    for (const elemElement of elem) {
      if (dict[elemElement]) dict[elemElement] += 1
      else dict[elemElement] = 1
    }
    return dict
  }

  const dictionaries = Array.from(arguments).map(dictForElem)

  const commonKeys = Object.keys(dictionaries[0]).filter(key => dictionaries.every(d => key in d))

  return commonKeys.reduce((sum, key) => {
      const minCount = Math.min(...dictionaries.map(d => d[key]))
      return sum + minCount * Number(key)
  }, 0)
}

console.log(common( [2,2,3],[3,2,2],[3,2,3]))
