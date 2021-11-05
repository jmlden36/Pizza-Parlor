function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateTotalPrice = function() {
  let price = 10;
  let sizeChoice = this.size;
  switch (sizeChoice) {
    case ("small"):
      price += 0
      break;
    default:
      console.log("I can't do that yet");
  }
  return price;
}