// Promise.all

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

let promise_all = Promise.all([p1,p2,p3])         // ---> all promises resolve
promise_all.then((value) => {
    console.log(value)
})


// Promise.allSettled

let p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("value 1")
    }, 1000);
})

let p5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let p6 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

let promise_allSettled = Promise.allSettled([p4,p5,p6])    // ---> one or more promises rejected but fulfilled promises show the browser

promise_allSettled.then((value) => {
    console.log(value)
})



Promise.race

let p7 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("value 1")
    }, 10000);
})

let p8 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let p9 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})


let promise_race = Promise.race([p7,p8,p9])    // --->  first value resolve show the promise.race    (ans. value 2)
promise_race.then((value) => {
    console.log(value)
})





// Promise.any

let a1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 10000);
})

let a2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("value 2")
    }, 2000);
})

let a3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})


let promise_any = Promise.any([a1,a2,a3]) // any resolve value selected first (ans. value 3)
promise_any.then((value) => {
    console.log(value)
})




// Promise.resolve

let b1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
})

let b2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let b3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})


let promise_resolve1 = Promise.resolve(6) // promise.resolve resolve the problem
promise_resolve.then((value) => {
    console.log(value)
})




// Promise.reject

let c1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
})

let c2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let c3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})


let promise_resolve = Promise.reject(new Error("Hey")) // promise.resolve resolve the problem
promise_resolve.then((value) => {
    console.log(value)
})
