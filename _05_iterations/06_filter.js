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



// example of how we receive data from database
const mybooks = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2021 },
    { title: 'Book Two', genre: 'History', publish: 1984, edition: 2020 },
    { title: 'Book Three', genre: 'Adventure', publish: 1980, edition: 2002 },
    { title: 'Book Four', genre: 'Action', publish: 1989, edition: 2004 },
    { title: 'Book Five', genre: 'Thriller', publish: 2001, edition: 2005 },
    { title: 'Book Six', genre: 'Seinen', publish: 2004, edition: 2008 },
    { title: 'Book Seven', genre: 'History', publish: 1991, edition: 2009 },
    { title: 'Book Eight', genre: 'Action', publish: 1971, edition: 2008 },
    { title: 'Book Nine', genre: 'Thriller', publish: 1999, edition: 2007 },
    { title: 'Book Ten', genre: 'Seinen', publish: 1994, edition: 2014 },
    { title: 'Book Eleven', genre: 'Seinen', publish: 1988, edition: 2015 },
]

// let bk = mybooks.filter( (bookNeeded) => bookNeeded.genre == "Seinen" && bookNeeded.publish == 1994)

// let bk = mybooks.filter( (bookNeeded) => bookNeeded.publish >= 2000)

// let bk = mybooks.filter( (bookNeeded) => bookNeeded.publish >= 1990 && bookNeeded.edition <= 2010)


console.log(bk);