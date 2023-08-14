// for(let i = 0; i < 100 ;i++){
//     console.log(i);
// }

// let sum = 0;
// let n = prompt("enter the value of n");
// n = Number.parseInt(n);
// for(let i = 0; i < n; i++){
//     sum += (i + 1)  
// }
// console.log("sum of first " + n + " natural number is " + sum);


// factorial

// program to find the factorial of a number

// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }


// let obj = {
//     aniket: 90,
//     a: 89,
//     b: 78,
//     c: 67,
//     d: 56,
// }

// for(let z in obj){
//     console.log("marks of " + z + " are " + obj[z]);
// } 
// for(let r of "aniket"){
//     console.log(r);
// } 


// while loop

// let n = prompt("enter the number of n ");
// n = Number.parseInt(n);

// let i = 0;
// while (i < n) {
//     console.log(i);
//     i++;
// }


// do-while loop
// let a = prompt("enter the number of n ");
// a = Number.parseInt(a);

// let j = 10;
// do{
//     console.log(j);
//     j++;
// }while (j < a); 


// factorial 
// let fact = 1;
// let n = prompt("ENTER A NUMBER");
// n = Number.parseInt(n);
// let i = 1;
// while(i<=n){
//     fact *= (i);
//     i++;
// }
// console.log(`The factorial of ${n} is ${fact}`)


// function 

// function onePlusaverage(a,b){
//     // console.log("done");
//     return 1 + (a + b) /2;
// }

// a = 1;
// b = 2;
// c = 3;

// console.log("average of a and b is ", onePlusaverage(1 ,2));
// console.log("average of b and c is ", onePlusaverage(2 ,3));
// console.log("average of c and a is ", onePlusaverage(3 ,1));

// const sum = (a,b) =>{
//     return a + b;
// }

// console.log("sum of a and b is ", sum(2,4));

// without argument is passed

const hello = () => {
    console.log ("hello my name is aniket");
    return "hi";
}

hello();
let v = hello();
console.log(v);

