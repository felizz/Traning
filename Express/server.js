/**
 * Created by vuvantu on 19/05/2016.
 */
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendfile('mainPanel.html');
});



app.get('/get_files', function (req, res) {
    var readFileParallel = require('../Async/readFileParallel');


    var input_filename_1 = req.query.file_name_1;
    var input_filename_2 = req.query.file_name_2;

    readFileParallel(input_filename_1, input_filename_2, input_filename_1 + "_" + input_filename_2, (error, data) => {
        
        if(error){
           var error_message = {};
           error_message.error = error
           res.send(error_message);
        }
        else {
            var respone_message = "file1 : " + data[0] + "\nfile2 : " + data[1];
           console.log(respone_message);

           res.send(respone_message);
       }

    });

})

var server = app.listen(8081, function () {


    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});
