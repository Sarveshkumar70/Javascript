// simple but twist arrives when we compare values of two different datatypes, it gives unpredictable results

// console.log(4 > 1);
// console.log(4 >= 1);
// console.log(4 <= 1);
// console.log(4 == 1);
// console.log(4 != 1);


// Avoid below type of comparisons------->

// console.log("2" >1 );

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// The reason is that an equality check == and comparisons <,>,<=,>= works differently.
// comparisons convert null to a number,treating it as 0.That's why null>=0 is true and null>0 is false

// === strict equality operator
console.log(2 === true);//false
console.log(false === true);//false
console.log(+0 === -0);//t
console.log("hlo" === "hlo");//t