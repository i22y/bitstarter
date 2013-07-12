var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer (fs.readFileSync('index.html'), 'utf-8');

app.get('/', function(request, response) {
    var my_index = fs.readFileSync("index.html");
    response.send(my_index.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
