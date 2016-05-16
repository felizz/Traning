/**
 * Created by vuvantu on 11/05/2016.
 */
'use-strict';

var fs = require("fs");

function myReadFile(filename){
    return fs.readFile(filename, (error, data) => {

    });
}
module.exports = myReadFile;

