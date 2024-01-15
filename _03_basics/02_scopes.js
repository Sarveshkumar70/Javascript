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
console.log(num3);  // will give wrong result because of var


// Problem with var -> if we define a variable with same name in gloal scope & local scope having different values using var, then while printing that variable   outside the local scope, it will print local scope variable value,ignoring global scope variable, . i.e. local scope value gets leaked from that scope to  global scope.

// This can be avoided by simply defining the variables with let instead of var