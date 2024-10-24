const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"]

// console.log(1998 - 1924)
// console.log((14 % 12) +1)
// console.log(14 % 5)

function chineseZodiac(year){
    let cycle = year-1924
    let animalIndex = (cycle%12)
    let elementsIndex = Math.floor(cycle/2)%5
    return `${elements[elementsIndex]} ${animals[animalIndex]}`
}

console.log(chineseZodiac(2016))