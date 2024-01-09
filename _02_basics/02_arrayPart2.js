// difference b/w push() and concat()

let anime_protagonist = ["luffy", "naruto", "deku", "itadori"]
let anime_antagonist = ["MarshalDTeach", "OneForAll", "Sakuna"]


// using push() -> it appends the items into existing array
// anime_protagonist.push(anime_antagonist)
// console.log(anime_protagonist); // anime_antagonist becomes a element of other array
// console.log(anime_protagonist[4][0]); // for access of anime_antagonist values


// using concat() -> it returns a new array
// let anime_Chatacters = anime_protagonist.concat(anime_antagonist) 
// console.log(anime_Chatacters);


// spread syntax(...) -> analogy to remember -> when a glass breaks, it spreads into pieces 
// let all_characters = [...anime_antagonist, ...anime_protagonist]
// console.log(all_characters);
// or
//  anime_protagonist.push(...anime_antagonist)
// console.log(anime_protagonist);



// flat()
let complex_array = [1, 2, 3, [4 , 5 , 6 ], 7 ,8, [9, [10, 11]], 12]
// console.log(complex_array);
// let optimize_array = complex_array.flat(Infinity)
// console.log(optimize_array);


// console.log(Array.isArray("hello"))
// console.log(Array.from("hello"));
// console.log(Array.from({name : "raman"})); // interesting


// let marks_phy = 56
// let marks_chem = 78
// let marks_math = 77
// console.log(Array.of(marks_chem, marks_math, marks_phy)); // kind of binds together


