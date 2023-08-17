let a = first.getAttribute("class")
console.log(a)                              // text first word is print

console.log(first.hasAttribute("class"))   // true
console.log(first.hasAttribute("style"))    // false

// setAttribute
first.setAttribute("hidden" , "true")    
first.setAttribute("class" , "true such")


// remove attribute
first.removeAttribute("class" , "true such")
let second = first.removeAttribute("class", "true such")
console.log(second) 


// elem attribute

console.log(first.attributes)


// data attribute

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)