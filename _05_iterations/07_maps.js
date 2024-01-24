// filter is used for selecting elements based on a condition, and it may result in a smaller array.
// map is used for transforming elements, and it produces a new array with the same length as the original array.
// Both functions do not modify the original array; they return new arrays.

// map returns all elements
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNum.map( (numbers) => numbers*10)
// console.log(newNum);


// chaining of methods
const newNumbers = myNum
                        .map( (num) => num*10)
                        .map( (num) => num-1)
                        .filter( (num) => num > 50)

console.log(newNumbers);

