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

function createFileUsingPromise(filename){
    console.log("Creating file: " + filename);
    return new Promise((resolve, reject) => {
        count += 1;
        fs.writeFile(filename, count, (error) => {
            if (error) {
                console.log("Failed to create file: " + filename + ". Error : " + error);
                reject(error);
            }
            else {
                resolve(filename);
                console.log("Created file: " + filename);
            }
        });
    });
}

function* fileNameGenerator(prefix){

    try {
        for (var i=0; i < 11; i++) {
            var file_name = 'files/' + prefix + i + '.txt';
            console.log("In generator function:Return a value (" + file_name + ") and pause until next value is asked for.i.e. asynchronously");

            // 1. This will alow us to do asynchronous things inside our existing control flow structures,
            // such as loops, conditionals and try/catch blocks (in fact, doing asynchronous work at each of the yield keywords)
            // 2. Generators do not do is give us a way of representing the result of an asynchronous operation. for that, we need promise.
            var value = yield file_name;
            console.log("In generator function: Successfully come back with value " + JSON.stringify(value));
        }

    } catch (ex){
        console.log("In generator function: Unsuccessfully come back with value " + JSON.stringify(ex));
    }
}

var promises = [];
for (var file_name of fileNameGenerator("generated_by_loop")) {
    promises.push(createFileUsingPromise(file_name));
}

//Only generate 5 files then stop because of having errors.
var iterator = fileNameGenerator("generated_by_next");
var cnt = 0;
while(true){
    var res = (cnt++ < 5) ?
        iterator.next("fulfilling_come_back")
        :
        iterator.throw("rejecting_come_back");
    if(res.done){
        //When it's done, we receive no value.
        break;
    } else {
        promises.push(createFileUsingPromise(res.value));
    }
}

console.log("I should be mix in Created file comments");

Promise.all(promises)
    .then((datas)=>{
        console.log("Generated " + datas.length + " files :" + datas[0] + "-" + datas[datas.length - 1]);
    })

