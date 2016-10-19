// the require directives are used to load Node.js modules
var express = require('express');
var app = express();

// create an endpoint
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// listen for client's request
app.listen(8081, function () {
  console.log('Fullstack Dashboard app running at http://127.0.0.1:8081/');
});
