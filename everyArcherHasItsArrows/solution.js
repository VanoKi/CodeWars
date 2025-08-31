
function archersReady (archers) {
  return archers.length > 0 ? archers.every(archer => archer >= 5) : false
}
console.log(archersReady([]))

