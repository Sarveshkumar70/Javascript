// Prop = properties

class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }


    // suppose every time you create a user, a new Id is generated and we don't want everybody to access it.
    // so we use static
    static createId(){
        console.log(Math.round( Math.random()*100 + 1))
    }
}


const obj1 = new user("Raman")
// obj1.logMe()
// obj1.createId() // will give error with static 


// not even child can access static data, in inheritance
class userChild extends user{

    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Obj2 = new userChild("Hitman", "47Agent@gmail.com")  
Obj2.logMe()
// Obj2.createId() // error because of static
