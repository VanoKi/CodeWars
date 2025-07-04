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
    const createDict = (sequence) => {
        let chars = {}
        for (let i = 0; i < sequence.length; i++) {
            if (sequence.charCodeAt(i) > 96 && sequence.charCodeAt(i) < 123) {
                if (sequence[i] in chars) chars[sequence[i]] += 1
                else chars[sequence[i]] = 1
            }
        }
        return chars
    }
    const victim = createDict(photo)
    ic(victim)
    for (let i = 0; i < ANIMALS.length; i++) {
        const animal = createDict(ANIMALS[i])
        // ic(animal)
        for (const animalKey in animal) {
            ic(animalKey)
        }
    }
    return '??'
}

ic(roadKill("====rraabbiitt=="))
