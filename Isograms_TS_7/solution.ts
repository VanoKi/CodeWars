function isIsogram(str: string): boolean{
    const word: string = str.toLocaleLowerCase()
    const stack: string[] = []
    for (let index = 0; index < word.length; index++) {
        if (stack.includes(word[index])) {
            return false;
        }
        stack.push(word[index])
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"));
