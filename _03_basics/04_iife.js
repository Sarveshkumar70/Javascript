// IIFE -> Immediately Invoked Function Expressions

// why to use IIFE? -> 
// 1. Avoiding Global Scope Pollution
// 2.  Executing a function immediately after its creation


// syntax -> (function definition)(for calling function, even we can pass arguments);

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

