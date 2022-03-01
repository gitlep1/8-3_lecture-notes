// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.


const fasterCommute = (cars, trains) => {
  let result1 = 0
  let result2 = 0

  for (const car of cars) {
    result1 += car
  }
  for (const train of trains) {
    result2 += train
  }

  result1 /= cars.length
  result2 /= trains.length

  if (result1 > result2) {
    console.log('The train is the faster commute.')
  } else {
    console.log('The car is the faster commute.')
  }
}

fasterCommute(carCommuteTimes, trainCommuteTimes)