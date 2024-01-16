// IIFE -> Immediately Invoked Function Expressions or also known as Self-Executing Anonymous Function

// why to use IIFE? -> 
// 1. Avoiding Global Scope Pollution
// 2.  Executing a function immediately after its creation

// syntax -> (function definition)(for calling function, even we can pass arguments);

// IIFE contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// Named IIFE
(function connectionWithDB(){
    console.log(`DB Connected`);
})() ;// must apply semicolon(;) as IIFE then only knows when to end context


// with arrow func.[unnamed iife]
// (  () => {
//     console.log(`DB Connected Two`)
// }) ();


// with arguments
( function connectionWithDBTwo(user) {
    console.log(`DB Connected Two by ${user}`)
})("Pappu");

