// array ->  enables storing a collection of multiple items(of different datatype) under a single variable name
// array is object & creates shallow copies (not deep copies)

let myArray = [1,2,3,4,5]
let bestAnime = ["one piece", "charlotte", "mushi", "Naruto"]

let arr1 = new Array(10,20,30,40,50)
// console.log(typeof bestAnime); // is object

// console.log(myArray[0]);
// console.log(bestAnime);


// ARRAY Methods

// bestAnime.push("solo leveling") // push() -> inserts element at the end of array
// bestAnime.push("steins gate")

// bestAnime.pop() // pops elements from last indice of array
// console.log(bestAnime);


// console.log(bestAnime.unshift("Bleach")); // adds element at starting indice of array
// bestAnime.unshift("bob") 
// bestAnime.shift() // removes 0 indice element
// console.log(bestAnime);


// console.log(bestAnime.includes("mushi")); // returns T or F if value is present or not  
// console.log(bestAnime.indexOf("mushi")); // finds the index of that value

// let array2 = bestAnime.join()
// console.log(bestAnime);
// console.log(array2);


// slice & splice -> difference -> splice manipulates the Original array
// console.log("A",arr1); // before slice

// const newArray = arr1.slice(0,4)
// console.log(newArray);
// console.log("B",arr1); //after slice

// const newArray2 = arr1.splice(0,4) 
// console.log(newArray2);
// console.log("C",arr1); // after splice

//  splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let arr3 = [100,200,300,400,500,600]
// const newArr = arr3.splice(1,4,1000)
// console.log(newArr); // 200, 300, 400, 500
// console.log(arr3); // 100, 1000, 600