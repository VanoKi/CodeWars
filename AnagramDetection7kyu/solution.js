const ic = require('node-icecream')()

var isAnagram = function(test, original) {
    var sorted = (s ) => [...s].sort().join('');
    return sorted(test) === sorted(original)
};

ic(isAnagram('Buckethead', 'DeathCubeK'))