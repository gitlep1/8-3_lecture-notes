/*
Create an accumulator function which takes the following arguments:
  An array of strings including the names of each invitee to a dinner party
And returns the same array with each name replaced with the following message:
  "Dear <name>, you are cordially invited to my dinner party."
*/

let arr = ['tommy', 'joe', 'kim', 'sasha']

const dinnerParty = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = `Dear ${arr[i]} you are cordially invited to my dinner party.`
  // }
  // console.log(arr)
  // return arr

  let i = 0

  for (let ar of arr) {
    ar = `Dear ${ar} you are cordially invited to my dinner party.`
    arr[i] = ar
    i++
  }

  console.log(arr)
  return arr
}

dinnerParty(arr)