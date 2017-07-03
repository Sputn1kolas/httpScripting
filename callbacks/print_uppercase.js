var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

function toLowerCase(string) {
  console.log(string.toUpperCase())
}

getHTML(requestOptions, toLowerCase);
