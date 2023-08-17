// synchronous
let a = prompt("what is your name: ");
let b = prompt("what is your age: ");
let c = prompt("what is your favorite color: ");
console.log(a + " is " + b + " years old and has " + c + " favorite color ");

// Asynchronous
setTimeout(function()  {
    console.log("Hey I am good")
}, 3000);


// callbacks
function loadscript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loded script with SRC:" + src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("error loading script with src: " + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}

function hello(error,src) {
    if (error) {
        console.log(error)
        return
    }
    alert("hello " + src)
}

function goodmorning(error,src) {
    if (error) {
        console.log(error)
        return  
    }
    alert("goodmorning " + src)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)


