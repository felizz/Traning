/**
 * Created by vuvantu on 11/05/2016.
 */

jest.unmock("../myReadFile.js");

jest.mock("fs");

describe("myReadFile.js - myReadFile", () => {

    /*
    Test 1: file name not found -> error tell us file not found
    Test 2: file name found, tell us result
     */
    const myReadFile = require("../myReadFile");
    var fs = require("fs");
    var data ;


    beforeEach((done) =>{
        data = fs.readFile("../file1.txt",jasmine.any(Function));
        done();
    });

    it("check if file name found or not", () =>{
        console.log("Data = " + data);
    });

});
