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