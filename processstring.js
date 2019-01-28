function processInput(input) {
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

module.exports = processInput;