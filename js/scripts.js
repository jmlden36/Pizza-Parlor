function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.totalPrice = this.calculateTotalPrice();
}