const ic = require('node-icecream')();

function isSantaClausable(obj) {
    for (const key in obj) {
        // if (Object.prototype.hasOwnProperty.call(object, key)) {
        //     const element = object[key];
            ic(key);
        }
    }

  let santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

ic(isSantaClausable(santa));