
var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express();



app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var html = buffer.from(fs.readFileSync('index.html'));
    response.send(html.toString());
//  response.send('Hello World 2!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
