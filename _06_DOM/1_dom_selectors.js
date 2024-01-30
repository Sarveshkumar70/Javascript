// use this in browser's console
// all changes are reflected on web page temporarily

// 1. getElementById() 

// document.getElementById('myFirstPara')
// <p id=​"myFirstPara" class=​"paraClass">​Lorem ipsum dolor sit, amet consectetur adipisicing.​</p>​

// document.getElementById('myFirstPara').id
// 'myFirstPara'

// document.getElementById('myFirstPara').class  // not correct for class
// undefined

// document.getElementById('myFirstPara').className
// 'paraClass'

// document.getElementById('myFirstPara').getAttribute("id")
// 'myFirstPara'

// document.getElementById('myFirstPara').getAttribute("class")
// 'paraClass'


// overwrites the class with name newClass of tag with id myFirstPara ->
// document.getElementById('myFirstPara').setAttribute("class","newClass") 
// undefined

// defines two classes[you can keep current class also]
// document.getElementById('myFirstPara').setAttribute("class","newClass anotherclass")
// undefined


// 2. storing it in variable

// const mySelector = document.getElementById('myFirstPara')
// undefined

// mySelector  
// <p id=​"myFirstPara" class=​"paraclass lol">​Lorem ipsum dolor sit, amet consectetur adipisicing.​</p>​


// by this we can apply css properties like bg-color, padding etc.
// Selector.style  

// mySelector.style.backgroundColor = "grey"
// 'grey'

// mySelector.style.borderRadius = '20px'
// '20px'


// 3. innerText, textContent, innerHTML

// innerText -> deals with visible text content [only that is present on web Page], excluding HTML tags.
// textContent -> includes all text content, whether visible or hidden, and also excludes HTML tags.
// innerHTML -> includes the complete HTML content, including HTML tags, within an element.

// mySelector.innerHTML
// 'Lorem ipsum dolor sit,<span id="mySpan"> THIS IS INSIDE SPAN TAG </span> amet consectetur adipisicing.\n

// mySelector.innerText
// 'Lorem ipsum dolor sit, amet consectetur adipisicing.'

// mySelector.textContent
// 'Lorem ipsum dolor sit, THIS IS INSIDE SPAN TAG  amet consectetur adipisicing.\n        '


// 4. getElementsByClassName()

// document.getElementsByClassName('paraClass')
// HTMLCollection [p#myFirstPara.paraClass, myFirstPara: p#myFirstPara.paraClass]


// 5. 