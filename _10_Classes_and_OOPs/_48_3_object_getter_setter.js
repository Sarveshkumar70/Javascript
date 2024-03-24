// getter setter through Object

const User = {
    _email : "hello@gmail.fb",
    _password : 47,

    get email(){
        return this._email.toUpperCase()
    },

    set email(Value){
        this._email = Value
    }
}

const obj = Object.create(User)
console.log(obj.email);
