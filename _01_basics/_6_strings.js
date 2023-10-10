const myStr="ustad"
const age =28

// console.log(myStr+age+"ji");// not recommended way

// console.log(`My name is ${myStr} and my age is ${age}`);// Modern recommended way

// another way to declare string
const gameName =new String('Assassins')

// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

// const newString=gameName.substring(0,5)
// console.log(newString);

// const newString2=gameName.slice(-8,5)
// console.log(newString2);

// removes whitespace
const mystring3="         hlo  ji   "
console.log(mystring3);
console.log(mystring3.trim());

// for replacing
const url="https://mygym%20/DC.org"
console.log(url.replace('gym','homie'));

console.log(url.includes('org'));

console.log(url.split('/'));

