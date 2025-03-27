const ic = require('node-icecream')()

function removeUrlAnchor(url){
    return url.slice(0, url.indexOf('#'))
}
const string = 'www.codewars.com/katas/'
ic(removeUrlAnchor(string))