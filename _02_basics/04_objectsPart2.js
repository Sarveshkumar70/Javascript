// const instagramLite = new Object()

const instagramLite = {}
// console.log(instagramLite);

instagramLite.userName = "hey_arman45!"
instagramLite.postCount = 4
instagramLite.email = "arman45@gmail.com"

// console.log(instagramLite);


// object nested in object
const university = {
    timing:"From 9:00 am to 4:00pm",
    departments : {
        semesters : {
            mostHardworking : "5th",
            leastHardworking : "1st"
        }
    }
}

// console.log(university);
// console.log(university.departments.semesters.mostHardworking);


// combining two or more objects
const myObj1 = {a:1,b:2}
const myObj2 = {b:3,c:4}

// const myObjectTogether = {myObj1, myObj2} // not proper way
// console.log(myObjectTogether);


// difference between below two ? -> check how syntax works
// const myObjectTogether2 = Object.assign(myObj1,myObj2)
// const myObjectTogether2 = Object.assign({},myObj1,myObj2) // good practice

// console.log(myObjectTogether2);
// console.log(myObj1);
// console.log(myObjectTogether2 === myObj1); 


// more used way ->
const myobject = {...myObj1,...myObj2}
// console.log(myobject);


// when you get values from database, they are like [objects in array]
const users = [
    {
        userId : 1,
        emailId : "xxxxx@gmail.com"
    },
    {
        userId : 2,
        emailId : "xxxxx@gmail.com"
    },
    {
        userId : 3,
        emailId : "xxxxx@gmail.com"
    },
    {
        userId : 4,
        emailId : "xxxxx@gmail.com"
    },
]
// console.log(users[0].userId); // way to access them
// Topics to learn -> optional chaining in objects


// console.log(instagramLite);

// console.log(Object.keys(instagramLite)); // is in form of array
// console.log(Object.values(instagramLite)); // is in form of array

// console.log(Object.entries(instagramLite)); // gives array of key value pairs[also in arrays]

// console.log(instagramLite.hasOwnProperty('postCount')); // checks if object has a specific property

// Note: Object.hasOwn() is intended as a replacement for Object.prototype.hasOwnProperty().
// console.log(Object.hasOwn(instagramLite,'userName'));


// part3
const person = {
    nameIs : "manu",
    weightInKg : 70,
    gender : "male" 
}

// console.log(person);

// Destructuring [happens in objects & array(rarely)]
const {nameIs} = person
const {weightInKg : weight} = person // name is shorted

// console.log(nameIs);
// console.log(weight);
// console.log(nameIs === person.nameIs);

// API data format is normally in JSON , in old times it was used to be XML
// {
//     "name" : "raman",
//     "sex" : "female",
//     "age" : 20
// }

// the format can also be (objects in array)->
// [
//     {},
//     {},
//     {}
// ]