const ic = require('node-icecream')()

function solve(word) {
    const vowels = "aeiou"
    const abc = []
    for (let i = 96; i < 123; i++) {
        abc.push(String.fromCharCode(i))
    }

    const sumIndexes = (seq) => {
        return [...seq].map(item => abc.indexOf(item))
            .reduce((sum, current) => sum + current, 0)
    }

    let ans = 0
    let seq = ''
    for (let i = 0; i < word.length; i++) {
        if(!vowels.includes(word[i])){
            seq += word[i]
        }else{
            let sumIndex = sumIndexes(seq)
            if(sumIndex > ans){
                ans = sumIndex
            }
            seq = ''
        }
    }

    if (seq) {
        let sumIndex = sumIndexes(seq);
        if (sumIndex > ans) {
            ans = sumIndex;
        }
    }

    return ans;
};

ic(solve('az'))