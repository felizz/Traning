/**
 * Created by vuvantu on 18/05/2016.
 */
'use-strict';

jest.unmock("../readFileParallel");
jest.unmock("async");

jest.mock('fs'); //mock cai j phai co lenh mock



describe("readFileParallel.js - readFileParallel", () => {


    it("If input file 1 and file 2 no error, cb echo concanated data", () => {
        console.log("begin test here");


        var readFileParallel = require("../readFileParallel");

        readFileParallel("file1.txt", "file2.txt", "file3.txt", (error, data) => {


            console.log("call cb function");

            if (error){
                console.log("error [in callback of describe]" + error);
            }
            else {
                console.log("success [in callback of describe]");
                expect(data).toEqual("helloworld");
            }
        });

        console.log("end test here");


    });


});
