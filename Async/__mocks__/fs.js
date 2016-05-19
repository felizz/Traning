/**
 * Created by vuvantu on 17/05/2016.
 */
var mocked_fs = jest.genMockFromModule('fs');
var files = {
    "file1.txt" : "hello",
    "file2.txt" : "world"
};

mocked_fs.readFile = function (filename, cb) {


    var data = files[filename];

    if (data === undefined) {
        cb("file not found", null);
    } else {
        cb(null, data);
    }

};

mocked_fs.writeFile = function(filename, data, cb){

    cb(null, data);
}

module.exports = mocked_fs;