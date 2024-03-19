function createUsername(username) {
    this.username = username

    console.log("It is called actually");
    // console.log(this.username);

}

function setValues(username, isLoggedIn, age){

    // createUsername(username) 
    // it is actually called but it is not setting value of username in setValues beacuse 
    // in call satck, when setValues() is called, it contains  createUsername() which is further called but then
    // createUsername() is removed from call satck i.e. its execution context is destroyed. so it is not setting value in setValues 

    // use
    createUsername.call(this, username) // by this we are pasing current context of this fn. to createUsername()
    this.isLoggedIn = isLoggedIn
    this.age = age
}


const user1 = new setValues("hitesh", true, 19)
console.log(user1);

