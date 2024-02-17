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
    //   docBody.style.backgroundColor = e.target.id
    // }
    // else if(getColor == 'white'){
    //   docBody.style.backgroundColor = e.target.id
    // }
    // else if(getColor == 'blue'){
    //   docBody.style.backgroundColor = e.target.id
    // }
    // else if(getColor == 'yellow'){
    //   docBody.style.backgroundColor = e.target.id
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