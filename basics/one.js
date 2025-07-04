const isUserloggedIn = true
const temperature = 41

if (temperature === 41){
  //console.log('less than 50')
}else{
    // console.log('temperature is greater than 50')
}

const balance = 1000

// if (balance < 500) {
//   console.log('less than 500');
// }else if (balance < 750){
//   console.log('less than 750');
// }else if (balance < 900){
//   console.log('less than 900');
// }else if (balance < 1200){
//   console.log('less than 1200');
// }

const userIslogIn = true
const debitCard = true
const loggedInFormEmail = true
const loggedInGoogle = false

if (userIslogIn && debitCard){
  console.log("Allow to buy a couser");
}
if (loggedInFormEmail || loggedInGoogle){
  console.log("User is logged in");
}