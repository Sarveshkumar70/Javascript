// a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.


// const val = "pappu"
const val = ""

// if (val) {
//     console.log("if statement is executed");
// }
// else {
//     console.log("else statement is executed");
// }

// falsy values ->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values ->
// "0", 'false', " ", [], {}, function(){}




// proper way to check some values

// to check array, if it is empty->
const myArray = []
// if (myArray.length === 0) {
//     console.log("Array is empty & this is  correct way to check the difference if an array is empty or contain falsy values ");
// }

// not recommended way->
// if (myArray) {
//     // console.log("Not recommended way");
// }


// to check object, if it is empty
const myObject = {}
// if (Object.keys(myObject).length === 0) {
//     console.log("Object is empty");
// }



// Nullish coalescing operator (??) -> it works like a fallback value
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its  
// left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// const valueIs = 10 ?? 45          // o/p-> 10
// const valueIs = null ?? 45        // o/p-> 45
// const valueIs = undefined ?? 45   // o/p-> 45
// const valueIs = "" ?? 45          //o/p-> 
// const valueIs = 0 ?? 45           // o/p-> 0

// let var1;
// const valueIs = var1 ?? "hello"  // since var1 is also undefined o/p is hello

// const valueIs = null ?? undefined  // o/p-> undefined (interesting)

// const valueIs = null ?? 100 ?? 20;  // o/p-> 100


// console.log(valueIs);


// Ternary Operator
// condition ? true : false

const chai_with_biscuit = 30
chai_with_biscuit >= 50 ? console.log("More than 50 rupees") : console.log("Less than 50 rupees");
