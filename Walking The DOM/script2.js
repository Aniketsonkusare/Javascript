const changecolorRed = () => {
    document.body.firstElementChild.style.color = "red" 
}
const changebgblack = () => {
    document.body.firstElementChild.style.background = "black" 
         
}
let b = document.body
console.log("first child of b is: ", b.firstChild)
console.log("first Element child of b is: ", b.firstElementChild)