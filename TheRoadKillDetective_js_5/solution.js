const ic = require('node-icecream')()
// export {log} from console

const ANIMALS = [
    'aardvark',   'alligator', 'armadillo',   'antelope',   'baboon',
    'bear',       'bobcat',    'butterfly',   'cat',        'camel',
    'cow',        'chameleon', 'dog',         'dolphin',    'duck',
    'dragonfly',  'eagle',     'elephant',    'emu',        'echidna',
    'fish',       'frog',      'flamingo',    'fox',        'goat',
    'giraffe',    'gibbon',    'gecko',       'hyena',      'hippopotamus',
    'horse',      'hamster',   'insect',      'impala',     'iguana',
    'ibis',       'jackal',    'jaguar',      'jellyfish',  'kangaroo',
    'kiwi',       'koala',     'killerwhale', 'lemur',      'leopard',
    'llama',      'lion',      'monkey',      'mouse',      'moose',
    'meercat',    'numbat',    'newt',        'ostrich',    'otter',
    'octopus',    'orangutan', 'penguin',     'panther',    'parrot',
    'pig',        'quail',     'quokka',      'quoll',      'rat',
    'rhinoceros', 'racoon',    'reindeer',    'rabbit',     'snake',
    'squirrel',   'sheep',     'seal',        'turtle',     'tiger',
    'turkey',     'tapir',     'unicorn',     'vampirebat', 'vulture',
    'wombat',     'walrus',    'wildebeast',  'wallaby',    'yak',
    'zebra'
]

var roadKill = function(photo) {
    // Your code here!
    const chars = new Set()
    for (let i = 0; i < photo.length; i++) {
        if (photo.charCodeAt(i) > 96 && photo.charCodeAt(i) < 123) {
            chars.add(photo[i])
        }
    }
    // return Array.from(chars)
    if (chars.size === 0) {
        return '??'
    }
    for (let i = 0; i < ANIMALS.length; i++) {
        if(Array.from(chars).every(elem => ANIMALS[i].includes(elem))) {
            return ANIMALS[i]
        }
    }
    return '??'
}

ic(roadKill("=============="))

