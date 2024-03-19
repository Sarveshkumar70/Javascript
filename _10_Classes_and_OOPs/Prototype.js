let herName = "Angel     "

// console.log(herName.length); // gives whitespace count also
// although we can use trim, but we want to make a method that is accessible directly by string
// [for soln. see at end of file]


// for understanding below concept[prototype] think of object as root node and other datatypes like function,
// string and array as childrens. Children inherit the properties of parent, something defined at root 
// level can be access by childrens[string etc.] but something defined at leaf level cannot be 
// accessed  by parent or siblings

let mcPower = {
    Eren : "Iitan",
    luffy : "Dragon fruit",
    
    getLuffyPower : function () {
        console.log(`Luffy has power of ${this.luffy}`);
    }
}

// injected printVal() at object level, now any string, Array, object can access it.
Object.prototype.printVal = function () {
    console.log(`printVal function `);
}

// mcPower.printVal()  // accessing printVal from a object

let bestMc = ['Eren', 'luffy']
// bestMc.printVal()  // accessing printVal from a Array



// now injecting new fn. at Array
Array.prototype.customFn = function () {
    console.log("Injected in Array ");
}

// accessing by Array
// bestMc.customFn()

// accessing by object - fail
// mcPower.customFn() // since customFn is injectd at array level so it is only acccessible to Arrays[
// no object, string, function]



// inheritance - ideas is to share data 
const user = {
    username : "Pappi",
    emailId : "pappi10@gmail.com"
}

let teacher = {
    makeVideo : false
}

let assistantTeacher = {
    isAvailable : true
}

let TAsupport = {
    makeAssignment : true,
    fullTime : false,

    // inheritance
    __proto__: assistantTeacher
}

// but it is actually an old approach [so it is used less]
teacher.__proto__ = user


// modern syntax for inheritance
// Object.setPrototypeOf(assistantTeacher, teacher)
// assistantTeacher inherits all properties of teacher

// console.log(assistantTeacher.makeVideo)// accessing properties of teacher through assistantTeacher



// now for our above problem
let newString = "HelloWorld!         "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

newString.trueLength()
'codingIsFun!'.trueLength()
'lol'.trueLength()