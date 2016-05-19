/**
 * Created by vuvantu on 19/05/2016.
 */

jest.unmock("../readAndWriteFiles");
jest.mock("fs");

describe("readAndWriteFiles.js - readAndWriteFiles", () => {

    /*
    co pit thi ko can done()
     */
    pit("If file 1  error , echo error", () => {


        var readAndWriteFiles = require("../readAndWriteFiles");

        return readAndWriteFiles("file.txt", "file2.txt", "file3.txt")
            .catch( (error) => {
                expect(error).toEqual("file not found");
            }
            );
    });

    pit("If file 2 error , echo error", () => {


        var readAndWriteFiles = require("../readAndWriteFiles");

        return readAndWriteFiles("file1.txt", "file.txt", "file3.txt")
            .catch( (error) => {
                    expect(error).toEqual("file not found");
                }
            );
    });


    pit("If read file 1, 2 no error , echo concanated data", () => {


        var readAndWriteFiles = require("../readAndWriteFiles");

        return readAndWriteFiles("file1.txt", "file2.txt", "file3.txt")
            .then( (data) => {
                    expect(data).toEqual("helloworld");
                }
            );
    });

});

