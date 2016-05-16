/**
 * Created by vuvantu on 11/05/2016.
 */

/**
 * Use a generator to generate 10 files, and print out log to see clearly when
 * each file writing request is sent and when they are done.
 *
 * If possible, mix those generator code with other async task ot see how generator  help the async task to be executed earlier.
 */
var fs = require("fs");

var count = 0;
function createFile(filename){
    count += 1;
    fs.writeFile(filename, count, (error) => {
        if(error){
            console.log("cannot write file, " + filename + "error : " + error);
        }
        console.log("done " + filename);
    });
    return;
}
var file_names = ['files/file1.txt', 'files/file2.txt', 'files/file3.txt',
                'files/file4.txt', 'files/file5.txt', 'files/file6.txt',
                'files/file7.txt', 'files/file8.txt', 'files/file9.txt',
                'files/file10.txt'
                ];
var promises = [];
function* fileNameGenerator(){
    for (var i=0; i < file_names.length; i++) {
        console.log("yield and push out " + file_names[i]);
        yield file_names[i];
    }
}
for (var file_name of fileNameGenerator()) {
    createFile(file_name);
 }

