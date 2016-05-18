/**
 * Created by vuvantu on 17/05/2016.
 */
var mocked_fs = jest.genMockFromModule('fs');
var files = {
    "file1.txt" : "hello",
    "file2.txt" : "world"
};

mocked_fs.readFile = function (filename, cb) {
    console.log("Call mocked read file this function, paramerter : filename = " + filename);

    var data = files[filename];


    console.log("in mocked_fs_readfile data = " + data);
    if (data === undefined) {
        cb("file not found", null);
    } else {
        cb(null, data);
    }
    
};


mocked_fs.writeFile = function (filename, data, cb) {
    console.log("Call mocked write file function, paramerter : filename = " + filename + " data = " + data  + " cb");
    
    cb (null, data);
};
module.exports = mocked_fs;