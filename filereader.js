const fs = require("fs");
const inputReader = require("./inputreader");

const filePath = inputReader.modeReader("Enter the path of file to read (example : input.json)\n");

function readUserFile() {
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      console.log("File read error : "+ error);
    }
    return data;
  });
}

module.exports = readUserFile;