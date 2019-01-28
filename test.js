//const mode = modeReader("Which mode you prefer \n1. For command line \n2. For read from file\n");
var fs = require("fs");
var readline = require('readline');

var mode;

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Which mode you prefer \n1. For command line \n2. For read from file\n", (mode) => {
  console.log("welcome to " + (mode).toString().trim() + " mode\n");
  //rl.close();
  //return mode;
});

if (mode === 1) {
  var input;
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  //rl.prompt();
  rl.question("Which mode you prefer \n1. For command line \n2. For read from file\n", (mode) => {
    input.push(mode);
    processInput(input, isJSON(input));
    rl.close();
    //return mode;
  });
  // rl.on('line', function (cmd) {
  //   input.push(cmd);
  //   //processInput(input, isJSON(input));
  // });
  // rl.on('close', function (cmd) {
  //   console.log("on close\n");
  //   //processInput(input, isJSON(input));
  //   process.exit(0);
  // });
  // processInput(input, isJSON(input));
}
else if (mode === 2) {
  input = readUserFile();
  processInput(input, isJSON(input));
} else {
  console.log("Invalid selection error : no such mode");
}

function readUserFile() {
  //const filePath = modeReader("Enter the path of file to read (example : input.json)\n");
  var filePath;
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Which mode you prefer \n1. For command line \n2. For read from file\n", (filePat) => {
    console.log("welcome to " + (filePat).toString().trim() + " mode");
    filePath = filePat;
    rl.close();
  });
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      console.log("File read error : "+ error);
    }
    return data;
  });
}

// const inputArray = [];

// rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });

// function modeReader(message) {
//   var mode;
// }

// function consoleReader(){
//   rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.prompt();
//   rl.on('line', function (cmd) {
//     inputArray.push(cmd);
//   });
//   rl.on('close', function (cmd) {
//     process.exit(0);
//   });
//   return inputArray;
// }

function isJSON(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function processInput(input, isJson) {
  if (isJson) {
    processJSON.processInput(input);
  } else {
    processString.processInput(input);
  }
}

var processJSON = {
  processInput : (input) => {
    console.log("Input will processed as json");
  }
}

var processString = {
  processInput : (input) => {
    var quantities = [], itemNames = [], prices = [], tax =0 , total =0;;
    for (inputIndex=0 ; i < input.length ; inputIndex++) {
      inputLine = input[i].split(" ");
      if (inputLine.length !== 0) {
        quantities.push(inputLine[0]);
        var itemName = "";
        for (inputLineIndex=1 ; inputLineIndex < (inputLine.length - 1) ; inputLineIndex++) {
          if (inputLine[inputLineIndex] !== "at") {
            itemName += inputLine[inputLineIndex];
          }
        }
        if (itemName !== "book" && itemName !== "books" && itemName === "medicine" && itemName === "medical" && itemName === "food") {
          tax += ((inputLine[inputLine-1]) * (0.1));
        }
        itemNames.push(itemName);
        bill += inputLine[inputLine.length - 1];
        prices.push(Number(inputLine[inputLine.length - 1]));
      } else {
        for (iterator = 0 ; iterator < itemNames.length ; iterator++) {
          console.log(quantities[iterator] + " " + itemNames[iterator] + " : " + prices[iterator]);
        }
        console.log("Sales Tax : " + tax);
        console.log("Total Bill : " + bill);
        quantities = [];
        itemNames = [];
        prices = [];
        tax = 0;
        total = 0;
      }
    }
  }
}