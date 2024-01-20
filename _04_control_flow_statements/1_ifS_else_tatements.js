
// Control statements are programming language constructs that manage the flow of execution in a program
// they use comparison operators like >, <, >=, <=, ==, ===, !=, !==

// 1. conditional statements-> control the flow based on conditions.

// if statements -> 
// if(condition_is_true){
//   console.log("These statements will be executed")
// }


// const isDbConnected = true
// if (isDbConnected) {
//     console.log("executed");
// }


// if (2 != '2') {
//     console.log("!= do type conversion")
// }

// if (2 !== '2') {
//     console.log("!== doesn't do type conversion")
// }


// const val = 2
// if (val >= 4) {
//     console.log(`${val} is > than 4`);
// }
// else {
//     console.log(`${val} is < than 4`);
// }


// if (!false) {
//     let firstVariable = "successful" 
//     console.log(`DB connection is ${firstVariable}`);
// }
// console.log(`DB connection is ${firstVariable}`); // variables defined inside if have block scope, means they are not defined outside the block [use let or const to define variables not var]


// shorthand property -> w/o {}, implicit scope 
const balance = 45454
// if (true) console.log(balance);

// below code is not good practice, code not readible at all, not recommended
// if (true) console.log(balance), console.log("you can write more statements separated by commas & at end a 
// semicolon");


// bike license criteria
const age = 16

// if (age > 18) {
//     console.log("You are eligible for bike license");
// }
// else if (age >=16  &&  age <= 18) {
//     console.log("You can apply for learning license");
// }
// else if (age < 16) {
//     console.log("You are not eligibe for license");
// }
// else {
//     console.log("Enter correct entry");
// }


const user1LoggedIn = true
const user2LoggedIn = false

// if (user1LoggedIn || user2LoggedIn) {
//     console.log("Atleast one user is logged in");
// }