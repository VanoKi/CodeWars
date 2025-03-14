const ic = require('node-icecream')()

class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
        this.history = []
    }
    howMany(array = []) {
        let count = 0
        for (let i = 0; i < array.length; i++) {
            if(!this.history.includes(array[i].toLowerCase())) {
                count += 1
                this.history.push(array[i].toLowerCase())
            }
        }
        return count
    }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose')
ic(mountMoose.title)
ic(mountMoose.artist)
// ic(mountMoose.howMany())
// ic(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']))
// ic(mountMoose.howMany())
// ic(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']))
// ic(mountMoose.howMany(['John', 'joHN', 'carl']))

