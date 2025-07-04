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
    let chars = {}
    for (let i = 0; i < photo.length; i++) {
        if (photo.charCodeAt(i) > 96 && photo.charCodeAt(i) < 123) {
            if (photo[i] in chars) chars[photo[i]] += 1
            else chars[photo[i]] = 1
        }
    }
    ic(chars)

    return '??'
}

ic(roadKill("====rraabbiitt=="))
