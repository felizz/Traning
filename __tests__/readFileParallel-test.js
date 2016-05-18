/**
 * Created by vuvantu on 18/05/2016.
 */
'use-strict';

jest.unmock("../readFileParallel");
jest.unmock("async");

jest.mock('fs'); //mock cai j phai co lenh mock



describe("readFileParallel.js - readFileParallel", () => {


    it("If input file 1 error, cb echo error", () => {
        var readFileParallel = require("../readFileParallel");

        readFileParallel("file.txt", "file2.txt", "file3.txt", (error, data) => {


                expect(error).toEqual("file not found");
        });

    });

    it("If input file 2 error, cb echo error", () => {
        var readFileParallel = require("../readFileParallel");

        readFileParallel("file1.txt", "file.txt", "file3.txt", (error, data) => {

            expect(error).toEqual("file not found");
        });

    });

    it("If input file 1 and file 2 no error, cb echo concanated data", () => {

        var readFileParallel = require("../readFileParallel");

        readFileParallel("file1.txt", "file2.txt", "file3.txt", (error, data) => {

                expect(data).toEqual("helloworld");
        });

    });


});
