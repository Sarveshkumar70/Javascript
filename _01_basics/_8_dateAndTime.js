// Dates

let mydate = new Date()
// console.log(typeof (mydate)); // is object

// console.log(mydate); // not readible so convert it

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

// declaring our own date
// let createdDate = new Date(2021,7,16) // parameters can be more like time,zone etc.[then use corresponding method] 
// console.log(createdDate.toDateString());
// let createdDate = new Date(2021,7,16,4,3)
// console.log(createdDate.toString()); 

// date formats
// let createdDate = new Date("2021-12-1")
let createdDate = new Date("01-11-2021")
// console.log(createdDate.toLocaleString());

let newDate = Date.now() // always compare time in ms
// console.log(newDate); // in millisecond [time from the epoch to this moment]
// console.log(createdDate.getTime());
// console.log(Math.round(Date.now()/1000)); // in seconds

let date2 = new Date
// console.log(date2);
// console.log(date2.getFullYear());
// console.log(date2.getDate());
// console.log(date2.getDay());
// console.log(date2.getSeconds());


date2.toLocaleString('default',{ // customizable -> important feature
    weekday:"long"  
})

