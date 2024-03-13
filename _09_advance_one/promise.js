// creating promise 1

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async. task
//     // DB calls, cryptography, network

//     setTimeout(function () {
//         console.log("Async. task is completed");
//         resolve() // necessary to connect resolve with then()
//     }, 1000)
// })

// // consuming promise
// promiseOne.then(function () {
//     console.log("Promise Consumed");
// } )



// or another way to do these above steps
// creating promise 2

// new Promise(function(resolve, reject){   // resolve, reject parametres are necessary here
//     setTimeout(function(){
//         console.log("2nd Async. task");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise 2 complete");
// })



// creating promise 3
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user: "Saitama", rollNum: 45, gender: "Male"})
//         // resolve(["Pumpkin", "Guava", "Kiwi"])
//         // resolve("Gulab jamun")
//     },1000)
// })
// promiseThree.then(function(user){    // resolve is related to then
//     console.log(user);
// })



// creating Promise 4 
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let ourError = true;
//         if (!ourError) {
//             resolve({username: "Guru Mann", passion: "Bodybuilding"})
//         }else{
//             reject("Na bro, you got an error")
//         }
//     }, 1000) 
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.passion
// })
// .then((user2) => {
//     console.log(user2);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Finally, the Promise has been either resolved or rejected");
// })



// creating promise 5
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let myError = true;

//         if (!myError) {
//             resolve({nameIs : "Pablo", age : 45})
//         } else {
//             reject("LOL, promise is rejected.")
//         }
//     },1000)
// })

// async function consumePromiseFive(){     // async can't directly handle errors 
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()




// async function getUserData(){

//     try {
//         const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/')

//        const data = await response1.json()
//        console.log(data);

//     } catch (error) {
//         console.log("An ERROR has ocurred");
//     }
// }

// getUserData()


fetch('https://jsonplaceholder.typicode.com/users')
.then(
     (response) => {
        return response.json()
    }
)
.then( (data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})

