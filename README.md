Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
Expected Output: Pizza { toppings: ["pepperoni", "extra cheese"], size: "large"}

Describe: Pizza.prototype.calculateSizePrice()

Test: "It should declare a sizePrice variable = to 10 and return that variable"
Code: Pizza.prototype.calculateTotalPrice();
Expected Output: 10

Test: "It should add 0 to sizePrice if testPizza has "small" as the size value and return the new value of sizePrice"
Code: testPizza.calculateTotalPrice();
Expected Output: 10

Test: "It should add 2 to sizePrice if testPizza has "medium" as the size value and return the new value of sizePrice"
Code: testPizza.calculateTotalPrice();
Expected Output: 12

Test: "It should add 4 to sizePrice if testPizza has "large" as the size value and return the new value of sizePrice"
Code: testPizza.calculateTotalPrice();
Expected Output: 14

Test: "It should add 8 to sizePrice if testPizza has "x large" as the size value and return the new value of sizePrice"
Code: testPizza.calculateTotalPrice();
Expected Output: 18

Describe: Pizza.prototype.calculateToppingsPrice()

Test: "It should declare a toppingsPrice variable equal to 0 and return that value"
Code: Pizza.prototype.calculateToppingsPrice();
Expected Output: 0


