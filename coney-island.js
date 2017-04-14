var totalBill = 0;
totalBill += getPriceOfDog(true, false);
totalBill += getPriceOfFries(true, true);
totalBill += getPriceOfDog(false);
totalBill += getPriceOfFries(false, false);
totalBill += getPriceOfDrink("sprite");
totalBill += getPriceOfDrink("water");

totalBill += calcTax(totalBill);

console.log("Your bill is $" + totalBill.toFixed(2));

function getPriceOfDog(hasChili, addMeat) {
    var price;
    if (hasChili) {
        price = 2.00;
    } else {
        price = 1.50;
    }
    if (addMeat) {
        price += 0.50;
    }
    return price;
}

function getPriceOfFries(addCheese, addChili) {
    var price = 2.00;
    if (addCheese) {
        price += 0.75;
    }
    if (addChili) {
        price += 0.75;
    }
    return price;
}

function getPriceOfDrink(choice) {
  switch (choice) {
      case "coke":
      case "diet coke":
      case "sprite":
      case "fanta":
          return 1.50;
      case "coffee":
      case "tea":
          return 2.00;
      case "lemonade":
          return 3.00;
      default:
          return 0.00;
  }
}

function calcTax(subtotal) {
  return subtotal * 0.06;  // 6% tax
}
