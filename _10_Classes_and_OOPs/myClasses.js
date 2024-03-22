

// class User{
    // constructor is automaticalled called when new object is created

//     constructor(username, userId, userPassword){
//         this.username = username
//         this.userId = userId
//         this.userPassword = userPassword
//     }

//     encryptPassword(){
//         return `${this.userPassword}*&()`
//     }

//     editUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const obj1 = new User("pinku", 1, 'hello1234');

// console.log(obj1.encryptPassword());
// console.log(obj1.editUsername());



// same case with functions
function Userfn(username, userId, userPassword) {
    this.username = username
    this.userId = userId
    this.userPassword = userPassword
}

Userfn.prototype.encryptPassword = function () {
    return `${this.userPassword}*&()`
}

Userfn.prototype.editUsername = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new Userfn("Adam", 3, 1234)

console.log(user2.editUsername());
console.log(user2.encryptPassword());