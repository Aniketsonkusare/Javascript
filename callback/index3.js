let p1 = new Promise((resolve, reject) => {
    console.log("promises is pending")
    setTimeout(() => {
        // console.log("i am a promise and i am a resolve")
        resolve(true)
    }, 4000);
})
let p2 = new Promise((resolve, reject) => {
    console.log("promises is pending")
    setTimeout(() => {
        // console.log("i am a promise and i am a rejected")
        reject(new Error("I am an error"))
    }, 4000);
})

console.log(p1,p2)
p1.then((value) => {
    console.log(value)
})
p2.catch((error) => {
    console.log("some error occurred in p2")
})

p2.then((value) => {
    console.log(value)
}) 
// (error) => {
//     console.log(error)   
// })