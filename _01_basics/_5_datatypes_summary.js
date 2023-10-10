/* In official documentation-> 2 types(on the basis of how data is kept in memory and how it is accessed)
*/

// 1. Primitive--> 7 types(string,Number,boolean,null,undefined,symbol,BigInt)
   const score = 100
   const scorePoint = 100.3

   const myString="hello"

   const isLoggedIn=true

   let temp=null

   let sum;

   const id = Symbol('12')
   const myId = Symbol('12')

   let bigNum=454554974643n

// 2. Referenced(non-primitive)--> Array,object,functions
   const genders=["male","female","others"];

   let myObj = {
      name : "manu",
      age : "18",
   }

   const myFunc = function(){
      console.log("Hello world");
   }

// To check datatype of a variable use-
console.log(typeof scorePoint ); 
console.log(typeof bigNum ); 

// Read -->// https://262.ecma-international.org/5.1/#sec-11.4.3


// **********************************************************

// types of memory-> stack(primitive) and heap(non-primitive)

// stack(primitive) example
let mystr="Ram sweet shop"
let anotherStr=mystr

anotherStr="hlo ji"
console.log(anotherStr);
console.log(mystr);

// heap(reference)
let user1={
   email:"ustadji@google.com",
   upi:"user54545bl"
}

let user2=user1

user2.email="fighterGame@google.com"

console.log(user1.email);
console.log(user2.email);