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
