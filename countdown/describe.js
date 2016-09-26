
const querystring = require('querystring');

const url = require('url');

var name = url.parse(process.argv[2]);



console.log('The protocol is ' + name.protocol + '\n' +
'The host is ' + name.host + '\n' + 'The hostname is ' + name.hostname + '\n'
+ 'The port is ' + name.port + '\n' + 'The path is ' + name.path + '\n' +
'The pathname is ' + name.pathname)

if (name.query) {
    console.log("The query is " + name.query);
    var x = querystring.parse(name.query);
    for (var prop in x) {
        console.log('The value of the ' + prop + ' parameter is ' + x[prop]);
    }
}
