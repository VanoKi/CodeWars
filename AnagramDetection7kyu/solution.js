const ic = require('node-icecream')()

var isAnagram = function(test, original) {
    var sorted = (s ) => [...s].map(i => i.toLowerCase()).sort().join('');
    return sorted(test) === sorted(original)
};

ic(isAnagram('Buckethead', 'DeathCubeK'))