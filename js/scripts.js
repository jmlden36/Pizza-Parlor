function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateTotalPrice = function() {
  const basePrice = 10;
  return basePrice;
}