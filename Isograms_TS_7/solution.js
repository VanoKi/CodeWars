function isIsogram(str) {
    var word = str.toLocaleLowerCase();
    var stack = [];
    for (var index = 0; index < word.length; index++) {
        if (stack.includes(word[index])) {
            return false;
        }
        stack.push(word[index]);
    }
    return true;
}
console.log(isIsogram("moOse"));
