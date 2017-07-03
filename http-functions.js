module.exports = function getHTML (options, callback) {
  var htmlString = ""

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      htmlString += data;
    });

    response.on('end', function(){
      callback(htmlString);
    });
  });
}

var https = require('https');
//console log each chunk of data as it is recieved
// need to invoke the function.

// var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };




// function getAndPrintHTML(options, callback) {
//   var htmlString = ""

//   https.get(options, function (response) {

//     response.setEncoding('utf8');

//     response.on('data', function(data){
//       htmlString += data;
//     });

//     response.on('end', function(){
//       callback(htmlString);
//     });
//   });
// }

// getAndPrintHTML(requestOptions, printHTML)

