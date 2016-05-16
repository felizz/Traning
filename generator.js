/**
 * Created by vuvantu on 11/05/2016.
 */



var file_names = ['file1', 'file2', 'file3'];
function* fileNameGenerator(){
    for (var i=0; i < file_names.length; i++) {
        yield file_names[i];
    }
}

/**
 * Use a generator to generate 10 files, and print out log to see clearly when each file writing request is sent and when they are done.
 * If possible, mix those generator code with other async task ot see how generator  help the async task to be executed earlier.
 */

for (var file_name of fileNameGenerator()) {
    readFile(file_name);
}

for (var i=0; i < file_names.length; i++) {
    readFile(file_names[i]);
}

var file_name_iter = file_names.next();
while(true){
    //Use file_name_iter to do something;
    if(!file_name_iter.done){
        file_name_iter = file_names.next();//file_name_iter.next()
    } else {

        break;
    }
}



