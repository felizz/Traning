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
 * @param cb
 */
function readFileParallel(input_filename_1, input_filename_2, out_filename, cb){
    // var cb = function (error, data){
    //     if(error){
    //         console.log(error);
    //     }
    //     else {
    //         console.log(data);
    //     }
    // }
    //
    async.parallel(
        [
            // fs.readFile.bind(null, input_filename_1),
            //
            // //bind(invoker, parameters) : run a function with another function which invoke it
            // fs.readFile.bind(null, input_filename_2)

            (callback_1) => {
                fs.readFile(input_filename_1, callback_1);
            },
            (callback_2) => {
                fs.readFile(input_filename_2, callback_2);
            }
        ],

        function(err, results){
            if(err){
                console.log("[readFileParallel]  read 2 file error + ", err);
                cb(err, null);
            }
            else {
                //FIXME - this is not an efficient way to concatenating string because it
                var data = results[0] + results[1];


                console.log("[readFileParallel] read 2 file  success + " + data);


                fs.writeFile(out_filename, data, (error) => {
                    console.log("File " + out_filename + " saved!")
                        cb(error, data);
                });

            }
        }
    );
}

// readFileParallel("files/file1.txt", "files/file2.txt", "files/file3.txt", (error, data)=>{
//    if(error){
//        console.log(error);
//    }
//     console.log(data);
// });

module.exports = readFileParallel;
