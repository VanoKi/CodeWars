const ic = require('node-icecream')()

function transpose(song, interval){
    // ...
    const sharp = 'A, A#, B, C, C#, D, D#, E, F, F#, G, G#.'
        .replaceAll(',', '')
        .replace('.', '')
        .split(' ')
    const flat = 'A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.'
        .replace('.', '')
        .replaceAll(',', '')
        .split(' ')
    // return sharp[flat.indexOf(song)]
    const move = (item) => {
        let index = sharp.indexOf(song)
        if (song.includes('b')) {
            index = flat.indexOf(song)
            return sharp[(index + interval) % 12]
        }
        return sharp[(index + interval) % 12]
    }
    // return sharp[(sharp.indexOf(song) + interval) % 12]
    return song.map(item => move(item))
}

ic(transpose(['Ab', 'Gb'], 2))