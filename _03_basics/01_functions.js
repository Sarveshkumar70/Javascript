// function -> is a block of code that is used to do perform a specific task again & again like ->

// function areaOfSquare(num){
//     console.log(num*num);
    
// }

// areaOfSquare(4)
// areaOfSquare(10)
// areaOfSquare(7)


// in function definition , i/p's are called parameters
function sumOfTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// in function call, i/p's passed are called arguments
// sumOfTwoNumbers(7, 8) // if unexpected datatype is passed then it will create unpredictable results ->
// sumOfTwoNumbers(2,null) // so type checking is necessary
// sumOfTwoNumbers(45,"7") 


// you can return value in function
function sumOfTwoNumbers2(num1, num2) {
    return (num1+num2)
}
// const result = sumOfTwoNumbers2(4,7)
// console.log(result);

function whoLoggedIn (username) {    // if (username = "harry") is passed  as parameter then , this will be treated as default value if no argument is passed
    if (!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just loggedIn`
}
// console.log(whoLoggedIn("parmvir"));
// console.log(whoLoggedIn(null)); // if no argument is passed, then it will result in undefined value



// Part - 2

// what if we don't know the exact number of arguments passed to a function, then how can we define parameters of a function -> we can use rest parameters i.e.

// function calculateTheSum(...num){ // rest parameter
//     return num
// }
// console.log(calculateTheSum(41,400,500,6000,70000))


function calculateTheSum(val1, val2, ...num){ 
    console.log(val1);
    console.log(val2);
    console.log(num);
}
// calculateTheSum(10,200,3000,40000,500000,111)


// passing object into a function
const myProfile = {
    name : "ustadJi",
    age : 28,
    gender : "male",
    nationality : "Indian"
}

function printProfile(objectReceived) {
    console.log(`My name is ${objectReceived.name} , i am ${objectReceived.age} years old ${objectReceived.gender} & my nationality is ${objectReceived.nationality}`);
}

// printProfile(myProfile) // or you can directly pass an object like ->
// printProfile({
//     name : "ustadJi",
//     age : 28,
//     gender : "male",
//     nationality : "Indian"
// }) 


// passing an array into function

const myArray = ["harman", "raman", "prabhu", "vishali"]

function printThirdName(getArray){
    return getArray[2]
}

// console.log(printThirdName(myArray)); //or

// console.log(printThirdName(["harman", "raman", "prabhu", "vishali"]));