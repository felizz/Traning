/**
 * Created by vuvantu on 11/05/2016.
 */
var fs = require("fs")
var async = require("async");

function readFileParallel(input_filename_1, input_filename_2, out_filename){

    async.parallel(
        [
            fs.readFile.bind(null, input_filename_1), //bind(invoker, parameters) : run a function with another function which invoke it
            fs.readFile.bind(null, input_filename_2)
        ],
        function(err, results){

            //FIXME - this is not an efficient way to concatenating string because it
            var data = results[0] + results[1];

            fs.writeFile(out_filename, data, () => {
                console.log("File " + out_filename + " saved!")
            });
        }
    );
}


module.exports = readFileParallel;
