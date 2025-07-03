const ic = require('node-icecream')()

class Block {
    constructor(array) {
        this.width = array[0]
        this.height  = array[1]
        this.length = array[2]
    }
    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    getHeight() {
        return this.height
    }
    getVolume() {
        return this.length * this.width * this.height
    }
    getSurfaceArea() {
        return 2 * ((this.length * this.width ) + (this.length * this.height ) + (this.height * this.width ))
    }
}
var b = new Block([2,4,6])
ic(b.getWidth())
ic(b.getHeight())
ic(b.getLength())
ic(b.getVolume())
ic(b.getSurfaceArea())
