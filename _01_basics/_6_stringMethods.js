//  String functions

let myStr = "Consistency is the key to success"


// length property
// console.log(myStr.length);


// charAt() // use to access the character at specified index
// console.log(myStr.charAt(2)); 


// uppercase & lowercase
// console.log(myStr.toUpperCase())
// console.log(myStr.toLowerCase())


// also (uppercase & lowercase) + takes locale specific rules
// console.log(myStr.toLocaleUpperCase())
// console.log(myStr.toLocaleLowerCase())


// indexOf() // returns index at which the specified string is located
// console.log(myStr.indexOf("key",10));


// slice()
// console.log(myStr.slice(0,-12)); // returns substring & can have -ve values


// substring()
// console.log(myStr.substring(0,12)); // returns substring & -ve value is neglected


// trim() // cuts the starting & ending whitespace
let fname = "        manish     "
// console.log(fname.trim());
// trimStart(), trimEnd()
// console.log(fname.trimStart()); // trimLeft() is alias
// console.log(fname.trimEnd()); // trimRight()


// replace()
// console.log(myStr.replace("Consistency", "Hardwork"));


// repeat()
// console.log(myStr.repeat(5)); // appends string  count times


// split()
// console.log(myStr.split(" ",4)); // converts string on the basis of mentioned separator & returns in form of ARRAY


// concat() // concatenates strings [para() - str1,str2...... ]
// let str1 = " but that is not easy"
// console.log(myStr.concat(str1," so be wise."));

// valueOf() // converts object string to primitive string
// const strObj = new String("integrity")
// console.log(strObj); // typeof is object
// console.log(strObj.valueOf()); // typeof is string

