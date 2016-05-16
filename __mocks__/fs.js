/**
 * Created by vuvantu on 16/05/2016.
 */
'use strict';

const fs = jest.genMockFromModule('fs');

function cb(error, data, filename){
    if(error){
        throw new TypeError("error "+ filename);
        return error;
    }
    return data;
}

function readFile(filename, cb){
    var data;
    if(filename === "../file1.txt"){
        data = "hello";
        cb(null, data, filename);
    }
    if(filename === "../file2.txt"){
        data = "world";
        cb(null, data, filename);
    }
    if(filename === "../file3.txt"){
        data = "world";
        cb(null, data, filename);
    }
    cb("file not found", null, filename);
}


fs.readFile = readFile
module.exports = fs;
