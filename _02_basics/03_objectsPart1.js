// singelton
// Object.create

// object literals

let mySym = Symbol("key1") // symbol

let myObj = {
    name : "harnoor",
    "last Name" : "kaur", // that's why second method is important for accessing data  
    age : 18,
    [mySym] : "mykey1", // for defining symbol in object
    emailId : "harnoor@gmail.com",
    isGirl : false,
    holidayTaken : ["monday", "wednesday"],

    // multiple ways for defining function in an object
    helloji() { 
        console.log("hello user");
    },

    myFunc : function(){
        console.log("this is also a function");
    }
}

// ways to access object data

// console.log(myObj.age) // 1st method
// console.log(myObj.last Name); //cannot access it with 1st method 
// console.log(myObj["last Name"]); // 2nd method

// console.log(myObj[mySym]); // way to access symbol from a object 

// overwriting data of object
myObj.name = "harman"
// console.log(myObj);
// Object.freeze(myObj) // will stop from overwriting data of object 
// myObj.age = 50 // after freezing object , overwriting will not give error , but will be neglected
// console.log(myObj);


// adding function to object [after objects initialization]
// myObj.greetings = function(){
//     console.log("My print statement");
// }
// myObj.greetings()

// myObj.helloji()
// myObj.myFunc()

// use of this 
// myObj.nameIntro = function(){
//     console.log(`Hello my name is ${this.name}`);
// }
// myObj.nameIntro()