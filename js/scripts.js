function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateTotalPrice = function() {
  let price = 10;
  let sizeChoice = this.size;
  switch (sizeChoice) {
    case ("small"):
      price += 0;
      break;
    case ("medium"):
      price += 2;
      break;
    case ("large"):
      price += 4;
      break;
    case ("x large"):
      price += 8;
      break;
    default:
      console.log("I can't do that yet");
  }
  return price;
}