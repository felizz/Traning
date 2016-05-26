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

app.post('/getFile', (req, res) => {

    console.log("get a post request");


    console.log(req.body.key_filename);

    console.log("filename requested = " );

    res.send("Sth read " + Date.now());
});






























app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

