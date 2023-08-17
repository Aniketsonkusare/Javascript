let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
    }, 2000);
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2")
        }, 2000);
    })
    return p2;
}).then((value) => {
    console.log(value)
    // console.log("we are done")
    return 2
}).then((value) => {
    // console.log(value)
    console.log("we are always done")
    // return 3
})

const loadScript = (src) => {
    return new Promise((resolve, reject) => {  
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
        script.onload = () => {
        resolve("script has been loaded")
        }
        script.onerror = () => {reject(0)}
    })
}

let p2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
p2.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("second script ready")
}).catch((Error) => {
    console.log("we are sorry but we are having problems loading this script")
})