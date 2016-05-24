/**
 * Created by vuvantu on 23/05/2016.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
/*
localhost:3000 default to load index.html in public folder
 */
app.set('port', (process.env.PORT || 3000));
































app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

