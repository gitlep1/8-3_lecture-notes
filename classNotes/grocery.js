const arr = [10, 20, 10, 10]


const groceryBudget = (receipt, budget) => {
  // let total = budget

  for (const money of receipt) {
    budget -= money
    // total = budget
  }
  console.log('budget:',budget)
  return budget
}

groceryBudget(arr, 60)