const processJSON = require("./processjson");
const processString = require("./processstring");

function processInput(input, isJson) {
  if (isJson) {
    processJSON.processInput(input);
  } else {
    processString.processInput(input);
  }
}