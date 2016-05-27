var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/getFile', function(req, res) {

    console.log("Get a get request");
    console.log(req.query.file);

    var filepath = req.query.file;


    fs.readFile(filepath, (error, data) => {
        if(error){
           res.send("Such no file or directory");
        }
        else {
            res.send(data);
        }
        console.log("Data sent");

    })


});



app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
