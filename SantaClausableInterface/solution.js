const ic = require('node-icecream')();

function isSantaClausable(obj) {
    const interface = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
    const ans = []
    for (const key of interface) {
            if (key in obj) {
                if (typeof obj[key] === 'function') {
                    ans.push(true);
                }else{
                    ans.push(false);
                }
            }else{
                ans.push(false);
            }
        }
        return ans.every(Boolean);
        // return ans;
    }

  let santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

let notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

ic(isSantaClausable(santa));