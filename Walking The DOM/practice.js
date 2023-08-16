// Q.1
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"


// Q.3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red"


// Q.4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
});