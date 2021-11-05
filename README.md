Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
Expected Output: Pizza { toppings: ["pepperoni", "extra cheese"], size: "large"}

Describe: Pizza.prototype.calculateTotalPrice()

Test: "It should declare a price variable = to 10 and return that variable"
Code: Pizza.prototype.calculateTotalPrice();
Expected Output: 10

Test: "It should add 0 to price if testPizza has "small" as the size value and return the new value of price"
Code: testPizza.calculateTotalPrice();
Expected Output: 10

Test: "It should add 2 to price if testPizza has "medium" as the size value and return the new value of price"
Code: testPizza.calculateTotalPrice();
Expected Output: 12

Test: "It should add 4 to price if testPizza has "large" as the size value and return the new value of price"
Code: testPizza.calculateTotalPrice();
Expected Output: 14

Test: "It should add 8 to price if testPizza has "x large" as the size value and return the new value of price"
Code: testPizza.calculateTotalPrice();
Expected Output: 18