// iterations = loops 

// for loop

// for (let i = 0; i <= 8; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i <= 8; i++) {
//     const element = i;
//     if ( element%2 == 0 ) {
//         console.log(`${element} is even number`);
//     }
//     else{
//         console.log(element, "is odd number");   
//     }
// }


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Value : ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Value : ${j} & Outer Value : ${i}`);

        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// for Array
const myArray = ["Pineapple", "Banana", "Guava"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);
// }



// Break and continue

// for (let index = 1; index <= 10; index++) {

//     if (index == 5) {
//         console.log("5 is detected");
//         // break; // control execution jumps out of loop
//     }
//     console.log(index);   
// }



// for (let index = 1; index <= 10; index++) {

//     if (index == 5) {
//         console.log("5 is detected");
//         continue; // control execution jumps to next iteration immediately after continue
//     }

//     console.log(index);   // will not be executed incase  of index = 5
// }