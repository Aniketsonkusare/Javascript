// log and dir 

let x = document.getElementsByTagName('span')[0]
console.log(x)                                              // print the element
let z = document.getElementsByTagName('span')[0]            
console.dir(z)                                              // print span object

console.log(document.body.firstChild.nodeName)              // text 
console.log(document.body.firstElementChild.nodeName)       // span (object)


// inner and outer html

let A = document.getElementById('first').innerHTML     
console.log(A)                                               // print the element in inner text

let B = document.getElementById('first').outerHTML
console.log(B)                                               // print the elment and innet text is called outer heml

console.log(document.body.textContent)


// hidden property

let c = document.getElementById('first').hidden = true
console.log(c);

let d = document.getElementById('first').hidden = false
console.log(d);