var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

function reversePrint(string) {
  var array = [];
  for(var i = 0; i < string.length; i++){
    array.push(string[i])
  }
  console.log(array.reverse().join(""))
}

getHTML(requestOptions, reversePrint)