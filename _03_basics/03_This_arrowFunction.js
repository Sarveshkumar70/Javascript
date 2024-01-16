// this -> provides reference to the current context


// this in object
const onlineCourse = {
    username : "Manu",
    Subject : "Networking",
    cost : 999,

    myFunc : function(){
        console.log(`${this.username} has purchased the ${this.Subject} course`)
        // console.log(this);  // will tell current reference
    }
}

// *this* -> will also reflect changes done in the object[here], example ->
// onlineCourse.myFunc()
// onlineCourse.username = "Baljit singh" 
// onlineCourse.Subject = "Maths"
// onlineCourse.myFunc() 

// console.log(this); // output -> {} 
// In node environment, printing *this* in global scope will print empty object or parenthesis but in browser [in console], console.log(this) will print window, i.e. window is global object.



// this in function
function printFunc(){
    // console.log("hello ji");
    // console.log(this); // print a lot of info

    // let myName = "babbu"
    // console.log(`${this.myName}`); // prints undefined, this means we cannot use this in function, normally
}
// printFunc()


// in function expression
// const isFunction = function(){
//     console.log(this); // print a lot of info

//     // let myName = "babbu"
//     // console.log(`${this.myName}`); // prints undefined, this means we cannot use this in function, normally
// }

// isFunction()



// arrow function
const isFunction = () => {
    // console.log(this); // prints {}

    // let myName = "babbu"
    // console.log(`${this.myName}`); // prints undefined, this means we cannot use this in function, normally
}
// isFunction()



// arrow Function -> syntax 
// () => {}

// const function1 = (num1,num2) => {
//     return (num1+num2)
// }
// console.log(function1(7,2))

// if curly braces {} in arrow function are used, then return is  necessary to be written in function (in case, is needed) oherwise if {} not used in arrow function, then no need to write return example ->

// implicit return [used in React]
// const function1 = (num1, num2) => (num1 + num2)

// returing object implicitly
const function1 = (num1, num2) => ({mynameIs : "Pappu"})


console.log(function1(7,2))