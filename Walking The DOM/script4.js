let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red" 

// queryselectorall use select all element
let ctitle2 = document.querySelectorAll(".card-title")
ctitle2[0].style.color = "red"
ctitle2[1].style.color = "green"
ctitle2[2].style.color = "purple"
console.log(ctitle2)

let ctitle1 = document.getElementById("card")
ctitle1.style.color = "blue" 

let ctitle3 = document.querySelectorAll("#card")   
ctitle3[0].style.color = "blue"
ctitle3[1].style.color = "orange"
ctitle3[2].style.color = "green"
console.log(ctitle3)

// queryselector select one element
document.querySelector(".this").style.color = "yellow"

// take a tag name
console.log(document.getElementsByTagName("a"))


console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

