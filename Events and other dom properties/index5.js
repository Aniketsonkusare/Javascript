// settime out

// setTimeout with argument
document.write("hello")

const sum = (a,b,c) => {
    console.log("yes i am running " + (a + b + c) )
    a + b + c 
}
setTimeout(sum, 2000 , 1, 2, 4)


// setTimeout without argument

let a = setTimeout(function() {
    alert("i am inside of set time out")
}, 2000);

let b = prompt("Do you want to run the settimeout")
if ("n" == b) {
    clearTimeout(a)
}

console.log(a);


setinterval

// setinterval without argument

setInterval(function() {
   alert("setinterval") 
}, 3000);

// <----------------------------------------------------->

// setinterval with argument
// sum 

const sum1 = (a, b, c, d)   => {
    console.log("sum of this number " +( a + b + c +d))
    a + b + c + d
}
setInterval(sum1 ,3000 ,3 , 4 , 5 ,6)

// average number

const average = (a, b, c, d)   => {
    console.log("average of this number " +( a + b + c +d) / 4)
     a + b + c + d / 4
}
setInterval(average ,3000 ,3 , 4 , 5 ,6)