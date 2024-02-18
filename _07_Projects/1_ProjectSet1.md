# Projects related to DOM


## Solution code

### Project 1 - Color Changer

```javascript 

const myButtons = document.querySelectorAll('.button');
const docBody = document.querySelector('body');

myButtons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    const getColor = e.target.id;

    // if(getColor == 'grey'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'white'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'blue'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'yellow'){
    //   docBody.style.backgroundColor = getColor
    // }

    // or

    switch (getColor) {
      case 'grey':
        docBody.style.backgroundColor = getColor;
        break;
      case 'white':
        docBody.style.backgroundColor = getColor;
        break;
      case 'blue':
        docBody.style.backgroundColor = getColor;
        break;
      case 'yellow':
        docBody.style.backgroundColor = getColor;
        break;
    }
  });
});


```



### Project 2 - BMI calculator

```javascript

const myform = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)

// for above line - we dont want to send empty values on page loading, we want to send only in submit event so define this in addEventListener

myform.addEventListener('submit',function(e){

  e.preventDefault() // we don't want (here) to send form data to server, so prevent the default behavior of form

// used parseInt - to convert string values to int
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)

const result = (document.querySelector('#results'))


if(height === ''  || height < 0 || isNaN(height))
{
  result.innerHTML = `${height}, not valid Height`;
}
else if(weight === ''  || weight < 0 || isNaN(weight))
{
  result.innerHTML = `${weight}, not valid weight`;
}
else{
  const bmi = ( weight / ((height*height) /10000) ).toFixed(2);

  // displaying the result
  // result.innerHTML = `<span> ${bmi} </span>`
  if( bmi < 18.6){
    result.innerHTML  = `<span> Bmi = ${bmi}, which is under weight </span>`
  } else if(bmi >= 18.6 && bmi <= 24.9){
    result.innerHTML =  `<span> Bmi = ${bmi}, which is healthy </span>`
  }else{
    result.innerHTML = `<span> Bmi = ${bmi}, which is Overweight </span>`
  }
}

});


```


### Project 3 - Digital clock

```javascript

const clock = document.getElementById('clock');

// const date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {

  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);


```