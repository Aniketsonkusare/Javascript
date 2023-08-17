let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // alert("hey i am not resolve")
        resolve(1)
    }, 2000);
})

p1.then(()=>{
    console.log("congratulation this promose is now resolved")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(4)
        }, 3000);
    })  
}).then((value) => {console.log(value)})

p1.then(()=>{
    console.log("hey my name is aniket")
})