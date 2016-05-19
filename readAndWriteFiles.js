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
                resolve(data);
            }
        })
    });
}

/**
 *
 * @param input_filename1
 * @param input_filename2
 * @param output_filename
 *
 * @return promise
 */

function readAndWriteFiles(input_filename1, input_filename2, output_filename){

    return Promise.all(
            [
                readFile(input_filename1),
                readFile(input_filename2)
            ]
        )
        .then((contents) => {
            
            var data = contents[0] + contents[1];
            return writeFile(output_filename, data);

        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

module.exports = readAndWriteFiles;