const marks=78
// console.log(marks);

const score = new Number(2)
// console.log(score);
// console.log(typeof score);

// console.log(score.toFixed(2));//no. of digits after decimal
// console.log(score.toString());//converts to string

const myMarks=1000000
// console.log(myMarks.toLocaleString('en-IN'))//to indian standard

const val=48.9878
// console.log(val.toPrecision(5));


// ***************** MATHS *****************

// console.log(Math);
// console.log(Math.abs(-7));// -ve to +ve only
// console.log(Math.round(7.8));// roundoff

// console.log(Math.floor(7.2)); //  closet smaller integer 
// console.log(Math.ceil(7.2));// closet greater integer

// console.log(Math.min(7.4, 7.3, 7.1, 7.2));
// console.log(Math.max(7.4 ,7.3 ,7.7 ,7.2));

// console.log(Math.random());//value b/w 0 and 1
// console.log((Math.random()*10)+1);// shifted one value to left(added 1 to avoid 0)
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)// to get random value between two numbers



