// 1. call() → Immediately invokes function, passing this and arguments separately.
// 2. apply() → Immediately invokes function, passing this and arguments as an array.
// 3. bind() → Returns a new function, which can be called later.
// 1.
const username = {
    username : "Rakesh",
    userId : 45,
    printUserData : function (params) {
        console.log(this.username +" is "+this.userId);
    }
}
// username.printUserData()

const user2 = {
    username : "broo",
    userId : "48512",
    // suppose we need the same fn. here as printUserData
}
// then we can do
// username.printUserData.call(user2) // bro is 48512


// 2.
// but if we need to pass a function like that we define it outside like 

// const user3 ={
//     gender :"male",
//     age:21
// }

// const printData = function () {
//     console.log("Data is ",this.gender, " and ",this.age);
// }
// printData.call(user3)


// 3.
const user4 = {
    fname:"Pankaj",
    lname:"lal",
}

const printData2  = function (state,country) {
    console.log(`Full name is ${this.fname} ${this.lname} and state is ${state} in ${country} `);
}
// first parameter is for this and all other are passed down to function
printData2.call(user4 ,"Ohio","US")


// apply()
// diff. b/w call & apply is how we pass arguments to function
// like in call()
printData2.call(user4 ,"UP","India")

// & apply
printData2.apply(user4,["Washington DC","US"])


// bind() syntax somewhat similar to call()
// bind() method does n't directly invokes the method
// but gives you the copy of method which you can invoke later
let result = printData2.bind(user4,"Paris","France")
console.log(result)
result()
