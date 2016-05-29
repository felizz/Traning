/**
 * Created by vuvantu on 21/05/2016.
 */
"use strict";

var fs = require("fs");

class Base {

    readFile(filename) {
        return new Promise((resolve, reject) => {

            fs.readFile(filename, (error, data)=> {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });

        });
    }

    writeFile(filename, data) {
        return new Promise((resolve, reject) => {

            fs.writeFile(filename, data, (error) => {
                if (error) {
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

    readAndWriteFiles(input_filename1, input_filename2, output_filename) {

        return Promise.all(
            [
                this.readFile(input_filename1),
                this.readFile(input_filename2)
            ]
            )
            .then((contents) => {

                var data = contents[0] + contents[1];
                return this.writeFile(output_filename, data);

            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

}


class Extension extends Base {

    //Overriding
    readFile(filename) {
        return new Promise((resolve, reject) => {

                fs.readFile(filename, (error, data)=> {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data.toString().toUpperCase());
                    }
                });

            }
        );
    }

    //Inherit
    getFirstCharacters(filename, num) {

        return super.readFile(filename)
            .then(
                (data) => {
                    if (data.length < num) {
                        return Promise.resolve(data);
                    }
                    else {
                        return Promise.resolve(data.slice(0, num));
                    }
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
    }

}

var utils = new Extension();

utils.getFirstCharacters("../files/file3.txt", 20).then(
    (data) => {
        console.log("getFirstCharacters (inheritance) - Data returned: " + data);
    }
).catch(
    (error) => {
        console.log("getFirstCharacters (inheritance) - Error: " + error);
    }
);
