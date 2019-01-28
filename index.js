const inputReader = require("./inputreader");
const processConsoleInput = require("./processconsoleinput");
const fileReader = require("./filereader");

const mode = inputReader.modeReader("Which mode you prefer \n1. For command line \n2. For read from file\n");

if (mode === 1) {
  input = inputReader.consoleReader();
  processConsoleInput.processInput(input, inputReader.isJSON(input));
}
else if (mode === 2) {
  input = fileReader.readUserFile();
  processConsoleInput.processInput(input, inputReader.isJSON(input));
} else {
  console.log("Invalid selection error : no such mode");
}