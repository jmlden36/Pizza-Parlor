function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateSizePrice = function() {
  let sizePrice = 10;
  let sizeChoice = this.size;
  switch (sizeChoice) {
    case ("small"):
      sizePrice += 0;
      break;
    case ("medium"):
      sizePrice += 2;
      break;
    case ("large"):
      sizePrice += 4;
      break;
    case ("x large"):
      sizePrice += 8;
      break;
    default:
      console.log("I can't do that yet");
  }
  return sizePrice;
}

Pizza.prototype.calculateToppingsPrice = function() {
  let toppingsPrice = 0;
  let toppingsMultiplier = this.toppingsArrayToArrayLength();
  toppingsPrice += toppingsMultiplier *2
  console.log(toppingsMultiplier)
  return toppingsPrice;
}

Pizza.prototype.toppingsArrayToArrayLength = function() {
  return this.toppings.length
}