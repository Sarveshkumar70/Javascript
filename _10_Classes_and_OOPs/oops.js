// object literal
const student = {
    studentId : 4545,
    studentName : "Nimbu",
    gender : "Male",

    greetingByStudent: function () {
        // console.log(`Hello ji! by ${this.studentName}`)
        console.log(this);
    }
} 
// student['greetingByStudent']();


// Global context changes, according to environment
// console.log(this); // {}


// constructor function

function user(username, loggedIN, userId) {
    this.username = username
    this.loggedIN = loggedIN
    this.userId = userId

    this.greetings = function () {
        console.log(" GM! ");
    }
    return this;
}

const userOne = new user("user1", "true", "1")
const userTwo = new user("user2", "false", "2")

// console.log(userOne);
// console.log(userTwo);

// console.log(user.constructor); 



// TOPIC -> read about instanceof 
