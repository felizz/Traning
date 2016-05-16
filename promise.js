/**
 * Created by vuvantu on 16/05/2016.
 */
var fs = require("fs");

function readFile(filename) {
    return new Promise( (resolve,reject) => {
        fs.readFile(filename, (error, data)=>{
            if(error){
                reject(error);
            }
            else {
                resolve(data);
            }
        });

    } );
}
function writeFile(filename, data){
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (error) => {
            if(error){
                reject(error);
            }
            else {
                console.log("In write file function success");
                resolve(data);
            }
        })
    });
}



function readAndWriteFiles(input_filename1, input_filename2, output_filename){

    var input_promise1 = readFile(input_filename1);
    var input_promise2 = readFile(input_filename2);

    Promise.all([input_promise1, input_promise2])
        .then(function(contents){
            var data = contents[0] + " " + contents[1];
            return writeFile(output_filename, data);
        })
        .then(function(written_data){
            console.log("concatenated data has been written to file successfully");
            return written_data;
        })
        .catch(function(err){
            console.log("Cannot read and combine file together..., error" + JSON.stringify(err));
        });
}
readAndWriteFiles("file1.txt", "file2.txt", "file3.txt");
module.exports = readAndWriteFiles;