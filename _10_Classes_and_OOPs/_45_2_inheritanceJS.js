class user {
    //Class constructor cannot be invoked without 'new'
    constructor (username){
        this.username = username
    }

    printME(){
        console.log(`${this.username}`) 
    }
}

// inheritance
class teacher extends user{
    constructor (username, userId, password){
         super(username) // [super is used with extend] do the work of user.call(this, username)
        this.userId = userId
        this.password = password
    }

    teacherInfo(){
        console.log(`${this.username} has changed password with userId ${this.userId}`);
    }
}

const obj1 = new teacher("Sheela", 12, 487)
// obj1.teacherInfo()
// obj1.printME() // teacher[class] having access of printME of  user [another class]

const obj2 = new user("Pritam")
// obj2.printME()

// console.log(obj1 === obj2); // false, checking two differnet instances 

const obj3 = new user("Manpeet")
// console.log(obj2 == obj3);  // false, checking two differnet instances of same class



// for checking if a object is instance of a class

console.log(obj1 instanceof teacher); // true
console.log(obj1 instanceof user); // true   //  instances of a child class are also instances of the parent class (due to inheritance), BUT instances of the parent class are not instances of the child class.

console.log(obj2 instanceof teacher); // false
console.log(obj2 instanceof user);  // true

console.log(user instanceof teacher); // false

