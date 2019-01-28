var readline = require('readline');

var input = [];

var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function modeReader(message) {
  var mode;
  rl.question(message, (mode) => {
    console.log("welcome to " + (answer).toString().trim() + " mode");
    return mode;
  });
}

function consoleReader(){
  rl.prompt();
  rl.on('line', function (cmd) {
    input.push(cmd);
  });
  rl.on('close', function (cmd) {
    process.exit(0);
  });
  return input;
}

function isJSON(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}