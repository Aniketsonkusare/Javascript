let promise = new Promise(function(resolve, reject) {
        alert("Hello")
    resolve(56)
})

console.log("Hello 1") // first execute
setTimeout(function() {
    console.log("Hello 2")     // third execute
}, 2000);

console.log("Hello 3")     // second execute

console.log(promise)