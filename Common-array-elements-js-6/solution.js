function common(a, b, c) {
  console.log([a, b, c])
  const dictForElem = (elem) => {
    const dict = {}
    for (const elemElement of elem) {
      if (dict[elemElement]) dict[elemElement] += 1
      else dict[elemElement] = 1
    }
    return dict
  }

  console.log(Array.from(arguments).map(elem => dictForElem(elem)))
}

console.log(common( [1, 2,2,3], [5, 2,3,3], [7, 2,2,3]))