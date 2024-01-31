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


// 5. querySelector()
// can select all types of css selectors 

// document.querySelector('h1')                           // selects first occurrence of first selector
// <h1 class=​"myFirstHeading">​ DOM ​</h1>​

// document.querySelector('h2')
// <h2 id=​"firstH2Id">​Lorem ipsum dolor sit amet consectetur adipisicing.​</h2>​

// document.querySelector('.paraClass')                         // for class
// <p id=​"myFirstPara" class=​"paraClass">​…​</p>​

// document.querySelector('#myFirstPara')                       // for id
// <p id=​"myFirstPara" class=​"paraClass">​…​</p>​

// document.querySelector('input[type = "button"]')
// <input type=​"button" value=​" ">​



// Applying custom css on li in ul  
// 1. document.querySelector("ul")
// <ul>​…​</ul>​

// 2. const myul = document.querySelector("ul")
// undefined

// 3. myul.querySelector("li")
// <li>​…​</li>​

// 4. const myli = myul.querySelector("li")
// undefined

// 5. myli.style.backgroundColor = "grey"
// 'grey'

// 6. myli.style.borderRadius = "20px"
// '20px'


// NodeList & HTMLCollection are different from array despite having some similarities

// 6. querySelectorAll()

// const myliList = document.querySelectorAll("li")
// undefined

// myliList
// NodeList(3) [li, li, li]

// myliList.style.backgroundColor = "pink"
// VM2168:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
//     at <anonymous>:1:32
// (anonymous) @ VM2168:1

// myliList[0].style.backgroundColor = "pink"         // correct way
// 'pink'

// correct way to loop the NodeList
// myliList.forEach( (li) => {
//     li.style.backgroundColor = "green"
// })



// HTMLCollection

// document.getElementsByClassName("li-item")
// HTMLCollection(4) [li.li-item, li.li-item, li.li-item, li.li-item]

// const tempClassList = document.getElementsByClassName("li-item")
// undefined

// tempClassList
// HTMLCollection(4) [li.li-item, li.li-item, li.li-item, li.li-item]

// not correct way to loop the HTMLCollection
// tempClassList.foreach( (li)=>{
//     console.log(li)
// })
// VM2753:1 Uncaught TypeError: tempClassList.foreach is not a function
//     at <anonymous>:1:15


// for looping it, convert HTMLCollection into Array ->
// Array.from(tempClassList)
// (4) [li.li-item, li.li-item, li.li-item, li.li-item]

// const myConvertedArray = Array.from(tempClassList)

// myConvertedArray
// (4) [li.li-item, li.li-item, li.li-item, li.li-item]


// myConvertedArray.forEach((li)=> {
//     console.log(li)
// })
// <li class=​"li-item">​…​</li>​
// <li class=​"li-item">​…​</li>​
// <li class=​"li-item">​…​</li>​
// <li class=​"li-item">​…​</li>​
// undefined

// myConvertedArray.forEach((li)=> {
//     li.style.color = "brown"
// })