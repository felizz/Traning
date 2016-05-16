/**
 * Created by vuvantu on 12/05/2016.
 */
jest.unmock("../generator.js");

jest.mock("fs");

// //Violate DRY principle http://programmers.stackexchange.com/questions/73065/what-are-dry-kiss-solid-etc-classified-as
// describe("", () => {
//     it ("is fs to be call with right parameters", (done) => {
//
//         var fs = require("fs");
//         var readAndWriteFiles = require("../generator");
//
//         readAndWriteFiles("../file1.txt", "..file2.txt", "../file3.txt");
//         done();
//
//         expect(fs.readFile).toBeCalledWith("../file1.txt", jasmine.any(Function));
//         expect(fs.readFile).toBeCalledWith("../file2.txt", jasmine.any(Function));
//         expect(fs.writeFile).toBeCalledWith("../file3.txt", jasmine.any(Function));
//
//     });
// });

