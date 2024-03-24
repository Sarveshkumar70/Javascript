// getter setter through class
class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    // Modern way for getter, setter
    // Both getter and setter has to be defined, inCase either of them is defined
    
    // see a new variable is been defined i.e. _password instead of password [as problems will arise if used]
    get password(){
        return `${this._password}Private`
    }

    set password(Value){
         this._password = Value
    }

    // for email
    get email(){
        return this._email.toUpperCase()
    }

    set email(Value){
        this._email = Value
    }
}

const obj1 = new User("Pappu@info.in", 478)
console.log(obj1.password);
console.log(obj1.email);