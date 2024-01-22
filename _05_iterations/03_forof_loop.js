// forof loop
// for (const iterator of object) {
// }

//  object [in syntax is used here in broader term] can be any array, string, object, etc. iterator is like any variable , similar to i in for loop


// myArray = [1, 2, 3, 4, 5, 6]

// for (const val of myArray) {
//     console.log(val);    
// }

// let myString = "Hello World!"

// for (const character of myString) {

//     if (character == " ") {
//         console.log("-");
//         continue
//     }
//     console.log(`The value is ${character}`);
// }



// forof loop on map

const map = new Map
map.set('India', '+91')
map.set('United States', '+1')
map.set('Japan', '+81')
map.set('China', '+86')
// map.set('India', 'yoyo')  // see the change -> element's value got updated

// console.log(map);

// for (const key of map) {
//    console.log(key);
// }

// for (const [key, value1] of map) {
//    console.log(key + " : " + value1);
// }


// forof on object
let myObject = {
    name1 : "sahil",
    name2 : "Verma",
    name3 : "Pinku"
}


// not iterable [directly]
// for (const names of myObject) {
//     console.log(names);
// }

// not iterable [directly]
// for (const [names, value2] of myObject) {
//     console.log(names + " : " + value2);
// }

// how to iterate object using these different type of loops? in next file