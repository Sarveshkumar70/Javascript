// foreach  method is a built-in method available for arrays
//  It is used to iterate over the elements of an array and execute a callback function for each element.


// array
const myarr = ["Panda", "giraffe", "lion", "monkey", "snake"] 

// use anonymous function here i.e. without name [for normal cases]
// myarr.forEach( function(val) {
//     console.log(val);
// } )


// // using arrow function
// check syntax of foreach to find how we are using index [can be any name] here 

// myarr.forEach( (val,index) => {     
//     console.log(`At index ${index} value is ${val}` );
// })


// incase using named function [ ensures code reusability ]
function myVal (values) {
    console.log(`The values are ${values}`);
}

// myarr.forEach(myVal);   // just give refernce here, of that function


// foreach has also parameters like index, full array [check syntax]
// myarr.forEach( (value, index, arr) => {
//     console.log(value, index ,arr );
// })



// foreach for [ {}, {}, {} ] format

const newArray = [
    {
        codingLanguage : "c",
        Creator: "Dennis Ritchie"
    },
    {
        codingLanguage : "c++",
        Creator: "Bjarne Stroustrup"
    },
    {
        codingLanguage : "javascript",
        Creator: "Brendan Eich"
    }
]

newArray.forEach( (val) => {
    console.log(val.codingLanguage +" & creator is "+ val.Creator);
})