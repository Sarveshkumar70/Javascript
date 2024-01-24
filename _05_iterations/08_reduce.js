// reduce

const myArray = [1, 2, 3]

// const storeNum = myArray.reduce (function (accumulator, currentValue) {
//     console.log(`accumulator : ${accumulator} & currentValue : ${currentValue}`);
//     return accumulator+currentValue;
// },0)
// console.log(storeNum);


// // by arrow function
// const storeNum = myArray.reduce ((accumulator, currentValue) => accumulator+currentValue,0)
// console.log(storeNum);



const ourShoppingCart = [
    {
        courseName : "js course",
        price : 2999
    },
    {
        courseName : "fullStack dev course",
        price : 9999
    },
    {
        courseName : "py course",
        price : 999
    },
    {
        courseName : "digital marketing course",
        price : 999
    }
]

const totalPayment = ourShoppingCart.reduce( (accu, currentCourse) => accu+currentCourse.price, 0 )
console.log(totalPayment);