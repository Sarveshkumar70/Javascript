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
console.log(whoLoggedIn(null)); // if no argument is passed, then it will result in undefined value
