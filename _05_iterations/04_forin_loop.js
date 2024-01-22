// forin used directly will give keys unlike forof give values

// forin loop can be used for object, etc.

// forin for object
 const myObject = {
    game1 : "gtaV",
    game2: "Assassins creed origin",
    game3 : "gta San Andreas"
 }


// for (const key in myObject) {              // prints keys only
//    console.log(key);
// }

// for (const key in myObject) {                 // prints key, value  
//    console.log(`${key} is ${myObject[key]}`);
// }


// forin for array
const person = ["kevin", "Jigglypuff", "Fraar", "Pepe"]

// for (const key in person) {
//   console.log(key + " : " + person[key]);
// }


// forin for map  -> not recommended approach [forin should not be used for iterating map ]

// const map = new Map
// map.set('India', '+91')
// map.set('United States', '+1')
// map.set('Japan', '+81')
// map.set('China', '+86')

// for (const key in map) {
//     console.log(key);
// }