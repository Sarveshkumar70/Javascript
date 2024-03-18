function sqrOfNum(num) {
    return Math.pow(num,2)
}

sqrOfNum.power = 2  

console.log(sqrOfNum(1000))
console.log(sqrOfNum.power)
console.log(sqrOfNum.prototype)




function createUser(username, value) {
    this.username = username
    this.value = value
}

// injecting functionalities (user-defined functions)
createUser.prototype.increment = function () {
    // value++ // no context, creates confusion who is calling b/w user1 and user2
    this.value++ // .this -> jis ne bhi bulaya hae uske pass jao
}

createUser.prototype.printVal = function () {
    // console.log(`value : ${value}`); // no context, creates confusion
    console.log(`value : ${this.value}`); // jis ne bhi bulaya hae uske pass jao
}

// both will give error since we haven't told it about additional properties, to inform it use 'new' keyword
// const user1 =  createUser("Porcshe", 20) 
// const user2 = createUser("Ferarri", 30)

const user1 = new createUser("Porcshe", 20) 
const user2 = new createUser("Ferarri", 30)

user1.printVal()
