// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES

let priceOfHouse = "€1.500.000";
let priceOfCar = "€20.000";
// let priceOfHouse = 'looo55ooll'
// let priceOfCar = 'wooo5ooow'

const moreExpensive = (priceOfHouse, priceOfCar) => {
  let price1 = ''
  let price2 = ''
  let noNums1 = ''
  let noNums2 = ''

  for (let i = 0; i < priceOfHouse.length; i++) {
    if (parseFloat(priceOfHouse[i]) || parseFloat(priceOfHouse[i]) === 0) {
      price1 += priceOfHouse[i]
    } else {
      noNums1 += priceOfHouse[i]
    }
  }

  for (let i = 0; i < priceOfCar.length; i++) {
    if (parseFloat(priceOfCar[i]) || parseFloat(priceOfCar[i]) === 0) {
      price2 += priceOfCar[i]
    } else {
      noNums2 += priceOfCar[i]
    }
  }

  if (noNums1.length >= priceOfHouse.length && noNums2.length >= priceOfCar.length) {
    return console.log('No strings contain numbers')
  } else if (noNums1.length >= priceOfHouse.length) {
    return console.log('String one contains no numbers')
  } else if (noNums2.length >= priceOfCar.length) {
    return console.log('String two contains no numbers')
  } else {
    if (Number(price1) > Number(price2)) {
      console.log("The house is more expensive.");
    } else {
      console.log("The car is more expensive.");
    }
  }
}

moreExpensive(priceOfHouse, priceOfCar)