var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

function toLowerCase(string) {
  console.log(string.toLowerCase())
}

getHTML(requestOptions, toLowerCase);
