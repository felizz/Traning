/**
 * Created by vuvantu on 11/05/2016.
 */
var fs = require("fs");
var async = require("async");

/**
 *
 * @param input_filename_1
 * @param input_filename_2
 * @param out_filename
 * @param cb(error, data)   error is one of error in readFile or writeFile
 *                          data is concanated file1_file2
 */
function readFileParallel(input_filename_1, input_filename_2, out_filename, cb){

    async.parallel(
        [
            fs.readFile.bind(null, input_filename_1),

            //bind(invoker, parameters) : run a function with another function which invoke it
            fs.readFile.bind(null, input_filename_2)

        ],

        function(err, results){
            if(err){
                //if err in readFile
                cb(err, null);
            }
            else {
                //FIXME - this is not an efficient way to concatenating string because it
                var data = results[0] + results[1];

                fs.writeFile(out_filename, data, (error) => {

                    if(error){
                        err += error;
                    }
                });

                cb(err, data);
            }
        }
    );
}

module.exports = readFileParallel;
