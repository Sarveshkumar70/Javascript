// old or prototype approach to getter, setter
// getter setter through function

function User(email, password) {
    this._email = email
    this._password = password


    Object.defineProperty(this, 'email', {
        get : function () {
            return this._email.toUpperCase()
        },
        set : function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function () {
            return this._password.toUpperCase()
        },
        set : function (value) {
            this._password = value
        }
    })
}

const obj1 = new User("mani@it.co", "puppy")

console.log(obj1.email);
console.log(obj1.password);