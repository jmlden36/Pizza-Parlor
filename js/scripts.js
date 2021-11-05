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
  toppingsPrice += toppingsMultiplier * 2;
  return toppingsPrice;
}

Pizza.prototype.toppingsArrayToArrayLength = function() {
  return this.toppings.length
}

Pizza.prototype.calculateTotalPrice = function() {
  let totalPrice = 0
  let toppingsPrice = this.calculateToppingsPrice();
  let sizePrice = this.calculateSizePrice();
  return totalPrice + sizePrice + toppingsPrice;
}

// UI
$("input[type=radio]").each(function() {
  var secondClick = true;
  $(this).change(function() {
      secondClick = false;
  });
  $(this).click(function() {
      if (secondClick) {
          $(this).prop("checked", false);
      }
      secondClick = true;
  });
});

$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();
    const sizeChoice = $("input:radio[name=size]:checked").val();
    const topping1Choice = $("input:radio[name=topping1]:checked").val();
    const topping2Choice = $("input:radio[name=topping2]:checked").val();
    const topping3Choice = $("input:radio[name=topping3]:checked").val();
    const topping4Choice = $("input:radio[name=topping4]:checked").val();
    const topping5Choice = $("input:radio[name=topping5]:checked").val();

    const yourPizza = new Pizza([topping1Choice, topping2Choice, topping3Choice, topping4Choice, topping5Choice], sizeChoice);
    yourPizza.toppings = yourPizza.toppings.filter(function( element ) {
      return element !== 'no topping';
    });    
    console.log(yourPizza);
    $("ul.output").text("Thank you for your order! Your pizza will cost $" + yourPizza.calculateTotalPrice());
  });
});