setTimeout(() => {
    console.log("Hacking wifi... Please wait...")
}, 1000);

try{
    setTimeout(() => {
        console.log(abc)        // ---> try catch only for syncronce program access asyncronce program not access   
    }, 100);
}
catch(error){
    console.log("abc error is here " + error)
}

setTimeout(() => {
    console.log("Fetching username and password... please wait...")    
}, 2000);

setTimeout(() => {
    console.log("Hacking abc's facebook id... please wait...")
}, 3000);

setTimeout(() => {
    console.log("Username and password of abc (+9112132134) Fetched...please wait...")
}, 4000);