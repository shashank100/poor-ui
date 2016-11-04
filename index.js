var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/pages/index.html');
});

/*
app.get('/sitemap.xml', function(request, response) {
  response.sendFile(__dirname + '/sitemap.xml');
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
