const ic = require('node-icecream')()

function removeUrlAnchor(url){
    return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
}
const string = 'www.codewars.com/katas/'
ic(removeUrlAnchor(string))