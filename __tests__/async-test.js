/**
 * Created by vuvantu on 12/05/2016.
 */

jest.unmock("../async.js");
jest.mock("fs");

/**
 * done() is used to let jest know it must wait for async to finish before it can exit;
 */

describe("async.js - readFileParallel ", () => {

    /**
     * FIXME - Write me again :)
     * Test 1: File 1 has problem -> no output, error telling us file 1 has problem
     * Test 2: File 2 has problem -> no output, error telling us file 2 has problem
     * Test 3: 2 files are readable -> no error, output is the concatenation of file 1 & file 2.
     */
    it("Reporting error happen in file 1", (done) => {
        console.log("jeje");
        var fs = require("fs");
        var readFileParallel = require("../async")

        readFileParallel("../file1.txt", "../file2.txt", "../file3.txt");
        done();


        expect(fs.readFile).toBeCalledWith("../fafds", jasmine.any(Function));
//        expect(fs.readFile.mock.instances[0]).toEqual("world");
   });



});