const myArray = [10, 20, 30, 40, 50, 60]

// what if we need to return something from foreach, like from a conditional statement wise ? 

// storing foreach in a variable 
//  const returnedVal = myArray.forEach( (value) => {
    // console.log(value);
    // return value  // doesn't get return
// })

// console.log(returnedVal); // prints undefined, no value is returned


// use filter for returing value
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const returnedVal2 = newArray.filter( (value) => value >= 4 )    // here implicit return is used

// see difference b/w above statement and below   

// const returnedVal2 = newArray.filter( (value) => { 
    // return value >= 4} )   // here explicit return is used

// console.log(returnedVal2);


// but if we want to return by foreach, use this approach->
// const storingValue = []

// newArray.forEach( (item) => {
//     if (item > 3) {
//         storingValue.push(item)
//     }
// })

// console.log(storingValue);
