// js prototype and prototypal inheritance
// (Run following code on browser console)

// 1.
// const obj1 ={
//     userName :"Harry",
//     userId : 454,
//     userInfo (){
//         return `userName is ${this.userName} and userId is ${this.userId}`
//     }
// }

// const obj2 = Object.create(obj1);

// console.log(obj2); // empty object(not actually)
// // __proto__ in object is an object that can perserve 
// // variables and methods , actually obj2's prototype points
// // to p1 and has all the methods and properties that are inside
// // p1 
// console.log(obj2.__proto__);


// 2. (. operator)
// if fullName is an simple string then how we are able to
// access different names and methods by using (.) operator?
// same case with other datatypes
// let fullName = "Harry singh"
// console.log(fullName.at(1))


// 3. wrapper classes
// actually simple string like below 
let surname = "harry";
// is created like 
// let surname = new String("harry");
//  so actually surname is a object of String wrapper
// class

console.log(surname); // simple string
console.log(surname.__proto__); // but this points
// to String Wrapper class
// that's why below at() is accessible since actually first it 
// finds at() in surname but since at() is not in fname, it searchs in  __proto__
// where the String class is defined in which at() is defined
// console.log(surname.at(5));

// String.prototype has all the methods and properties
// which a normal string variable has  in its  variable.__proto__ 
// that is it points to String.prototype

// if(surname.__proto__ === String.prototype){
//     console.log("true") // actually true
// }


// 4. prototypal inheritance 
const p1 ={
    property1 :"This is p1"
} 
const p2 ={
    property2 :"This is p2",
    __proto__ : p1 // actually here p2's __proto__ points to p1's 
    // __proto__ . Now we can access p1 also
} 
const p3 ={
    property3 :"This is p3",
    __proto__:p2 // same case as above, p3's __proto__  points
    // to p2 and p2's __proto__ point to p1
    //  
} 

// console.log(p1);
// console.log(p2.property1);
// console.log(p3.property1); // prototype chaining

// Any class or anything's __proto__ points to object  at last
// and that object's __proto__  points to null 

let s= "hello";
// s.__proto__ -> string.__proto__ -> object.__proto__ = null
// console.log(s.__proto__.__proto__.__proto__);

class student {
    constructor() {
        this.fname = "Veer"
    }

    getName(){
        return `Inside getName() function`
    }
}

const obj3 = new student()
console.log(student.prototype);
// console.log(obj3.__proto__); // the obj's __proto__
// points to class's prototype

// working of new
// actually new sets obj3.__proto__ = Student.protoype

// actually does the work on new [verify also]
// const obj4 = {__proto__:student.prototype}
// console.log(obj4.getName());


// difference b/w __proto__ & Student.prototype
// __proto__ attaches to object and protoype is attached to base 
// class

// what if we make obj1.__proto__ = null? now obj1 is no 
// longer object of student class


// 5. if below is false
// let s = "hello"
// console.log(s instanceof String); //false
// then how can any string type variable can access string methods
// check concept of how js creates temporary wrapper classes 