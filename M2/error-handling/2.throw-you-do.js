// Please refactor this code with your partner(s) according to the prompts below.
// Select a driver to share their screen.

function guestIsValid(guest) {
  if (!guest.name && !guest.email) {
    throw "The following fields are required: email, name"
  } else if (!guest.name) {
    throw "The following fields are required: name"
  } else if (!guest.email) {
    throw "The following fields are required: email"
  }

  return true;
}

console.log(guestIsValid({ name: "Myra", email: "myra@pursuit.org" }))
// console.group(guestIsValid({ name: "Myra" }))
// console.log(guestIsValid({ email: "myra@pursuit.org" }))
// console.log(guestIsValid({}))

/**  1. Update guestIsValid so that instead of returning a string, it throws an error if the keys are missing. */

/**
 * 2. Now, update guestIsValid so that the error message is more specific depending on the input.
 * For example, if the guest is missing an email it should say:
 *
 *    => The following fields are required: email
 *
 * If both name and email are missing, it should print the following message:
 *    => The following fields are required: email, name
 */
