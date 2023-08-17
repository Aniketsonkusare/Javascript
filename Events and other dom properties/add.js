let x = function(e) {
    console.log(e.target)
    console.log(e.type,e.clientX,e.clientY)
    // alert("Hello world 1!")
}

let y = function(e){
    console.log(e)
    alert("Hello world 2!")
}


btn.addEventListener('click' , x)

// btn.addEventListener('click' , y)

// let a = prompt("What is your favorite number? ");

// if (a == "2") {
//     btn.removeEventListener('click', x);
// }