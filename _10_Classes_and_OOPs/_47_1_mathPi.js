
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);



const chai = {
    typeOfChai : "adrakWaliChai",
    price : 30,
    isHot : true,

    drinkChai : function () {
        console.log("chai is drinkable");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined, since chai is an object not property
console.log(Object.getOwnPropertyDescriptor(chai, "price")); 

Object.defineProperty(chai, "price", {
    // writable: false,
    enumerable:false 
})
// console.log(Object.getOwnPropertyDescriptor(chai, "price")); 


for (const [key,value] of Object.entries(chai)) {

    if (typeof value !== "function") {
        console.log(`${key} : ${value}`); // will not print price if enumerable is false
    }
}