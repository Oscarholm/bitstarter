
var express = require('express');
var fs = require('fs');

var app = express();



app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var buffer = Buffer.from(fs.readFileSync('index.html'));
    response.send(buffer.toString());
//  response.send('Hello World 2!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
