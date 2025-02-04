// global scope
var num3 = 100 // avoid using var

let a = 48

if (true) {
    // local scope or block scope
    let num1 = 10
    const num2 = 20
    var num3 = 30 // avoid using var

    let a = 99
    // console.log(`Inner val : ${a}`); // output:99 
}

// console.log(`Outer val : ${a}`); // output:48

// console.log(num1);
// console.log(num2);
// console.log(num3);  // will give wrong result because of var


// Problem with var -> if we define a variable with same name in gloal scope & local scope having different values using var, then while printing that variable   outside the local scope, it will print local scope variable value,ignoring global scope variable, . i.e. local scope value gets leaked from that scope to  global scope.

// This can be avoided by simply defining the variables with let instead of var



// How scope is handled in nested functions 
function one(){
    let username = "Prabh"

    function two(){
        let emailId = "Prabh45@gmail.com"
        console.log(username);
    }
    // console.log(emailId); // will give error

    two()
}

// one()


// scope in nested if statemnets
if (true) {
    const fname = "Harry"

    if (fname === "Harry") {
        const lname = " Potter"
        // console.log(fname+lname);
    }
    // console.log(lname); // error
}
// console.log(fname); // error



// different ways of declaring function ->

console.log(incrementNumOne(5)) // can be called before function definition

function incrementNumOne(num) {
    return (num + 1)
}
// console.log(incrementNumOne(5))



// console.log(incrementNumTwo(10)) // in this type of function decalaration, we cannot call func. before definition
// reason behind this concept is because of how memeory is assigned to variables(check global execution concept)
const incrementNumTwo = function(num){
    return (num + 2)
}
// console.log(incrementNumTwo(10))
