# _Pizza-Parlor_

#### By _**James Matthew Luker**_

#### _Pizza-Parlor is an interactive webpage that allows a user to order a pizza from Antonio's Gourmet Pizza Parlor._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery-3.6.0._
* _Visual Studio Code_
* _Markdown_

## Description

_Pizza Parlor is an interactive webpage designed for Antonio's Gourmet Pizza Parlor.  This website allows a user to choose from 4 different pizza sizes and up to 5 additional toppings for a pizza they would like to order.  When they submit their order the price of the pizza will be calculated depending on what size they picked and how many toppings they chose._

## Test Drive Development

**Describe: Pizza()**

**Test**: "It should return a Pizza object with two properties for toppings and size"
* **Code**: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
* **Expected Output**: Pizza { toppings: ["pepperoni", "extra cheese"], size: "large"}

**Describe: Pizza.prototype.calculateSizePrice()**

**Test**: "It should declare a sizePrice variable = to 10 and return that variable"
* **Code**: Pizza.prototype.calculateTotalPrice();
* **Expected Output**: 10

**Test**: "It should add 0 to sizePrice if testPizza has "small" as the size value and return the new value of sizePrice"
* **Code**: testPizza.calculateTotalPrice();
* **Expected Output**: 10

**Test**: "It should add 2 to sizePrice if testPizza has "medium" as the size value and return the new value of sizePrice"
* **Code**: testPizza.calculateTotalPrice();
* **Expected Output**: 12

**Test**: "It should add 4 to sizePrice if testPizza has "large" as the size value and return the new value of sizePrice"
* **Code**: testPizza.calculateTotalPrice();
* **Expected Output**: 14

**Test**: "It should add 8 to sizePrice if testPizza has "x large" as the size value and return the new value of sizePrice"
* **Code**: testPizza.calculateTotalPrice();
* **Expected Output**: 18

**Describe: Pizza.prototype.calculateToppingsPrice()**

**Test**: "It should declare a toppingsPrice variable equal to 0 and return that value"
* **Code**: Pizza.prototype.calculateToppingsPrice();
* **Expected Output**: 0

**Test**: "It should take in the value of this.toppingsArrayToArrayLength and multiply that value by 2 and return that new value"
* **Code**: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
      testPizza.calculateToppingsPrice();
* **Expected Output**: 4

**Describe: Pizza.prototype.toppingsArrayToArrayLength()**

**Test**: "It should take in the toppings array of strings from a Pizza object and return the number of indices of that array"
* **Code**: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
      testPizza.toppingsArrayToArrayLength();
* **Expected Output**: 2

**Describe: Pizza.prototype.calculateTotalPrice()**

**Test**: "It should take in the value of calculateToppingsPrice() and calculateSizePrice() on a Pizza object, add them together and return that value"
* **Code**: const testPizza = new Pizza(["pepperoni", "extra cheese"], "large");
      testPizza.calculateTotalPrice()
* **Expected Output**: 18

## Setup/Installation Requirements

*  Note: The {} symbols are to indicate what code needs to be written.  Do not use the {} symbol in your code
* _Open your terminal and use the code {cd ~/Desktop} to navigate to your computer's desktop._
* _In your terminal type the code {git clone https://github.com/jmlden36/Pizza-Parlor.git} to clone the portfolio repository onto your desktop._
* _Find the Pizza-Parlor project folder on your desktop and open it._
* _Now open the index.html file that resides inside the Pizza-Parlor project folder which will open the Pizza-Parlor HTML webpage._
* _Choose a pizza size by clicking the radio button that corresponds with the size pizza you would like._
* _Click the "Click Here To Submit Your Pizza Order" to see your receipt below._
* _Repeat this process as many times as you want with different choices if you want to see a different receipt._
* _You can also access Pizza Parlor by clicking on this [github pages link](https://jmlden36.github.io/Pizza-Parlor/)_ 

## Known Bugs

* _There are no know issues with Pizza Parlor._
* _If you have any issues or notice any bugs please email [jamesmattluker@gmail.com](mailto:jamesmattluker@gmail.com)._

## License

_[MIT](LICENSE.txt)_

Copyright (c) _2021_ _James Matt Luker_