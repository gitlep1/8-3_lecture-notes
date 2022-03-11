function guestIsValid(guest) {
  let requiredFields = ["name", "email"];
  let missingFields = requiredFields.filter(
    (field) => !guest.hasOwnProperty(field)
  )

  if (missingFields.length) {
    throw `The following fields are required: ${missingFields.join(", ")}`;
  }

  return true;
}

/** 1. How can you handle errors that may occur in a program you've written? */
try {
  console.log("guest is valid", guestIsValid({}))
  console.log("guest is valid", guestIsValid({}))
} catch (err) {
  console.log("WE CAUGHT A WILD ERROR!", err)
}

/** 2. How is a try/catch block similar to an if/else statement? */

  // -> It's a control flow construct that helps us implement a specific kind of conditional logic
  // -> DO THE STUFF IN TRY. 


/** 3. The catch block includes access to a variable, error, when it is used. What is this variable used for? */
