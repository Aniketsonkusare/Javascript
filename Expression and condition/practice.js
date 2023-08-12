// // not run in terminal prompt
// let a = prompt("what is your age?");
// a = Number.parseInt(a);
// if(a > 0 && a < 18){
//     alert("you can not drive");
// }

// else if(a >= 18 && a <= 70){
//     alert("you can drive");
// }

// else{
//     alert("you are old you cannot drive");
// }


// practice set

// Q.1
// let age = prompt("what is your age")
// age = Number.parseInt(age);
// if(age > 10 && age < 20){
//     console.log("your age lies between 10 and 20");
// }

// Q.2
// let age = prompt("what is your age")

// switch(age){
//     case '12':
//         console.log("your age is 12");
//         break;
//     case '20':
//         console.log("your age is 20");
//         break;
//     case '30':
//         console.log("your age is 30");
//         break;
//     case '40':
//         console.log("your age is 40");
//         break;
//     default:
//         console.log("your age is not special");
//         break;
// }

// Q.3
// let num = prompt("enter the number");
// num = Number.parseInt(num);
// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("your num is divisible 2 and 3");
// }
// else{
//     console.log("your num is not divisible 2 and 3");
// }

// Q.4
// let num = prompt("enter the number");
// num = Number.parseInt(num);
// if (num % 2 == 0 ) {
//     console.log("your num is divisible by 2");
// }
// else if(num % 3 == 0){
//     console.log("your num is divisible by 3");
// }
// else{
//     console.log("your num is not divisible by 2 and 3");
// }


// Q.4
let age = 19;
let a = age > 18 ? "you can drive" : "you cannot drive";
console.log(a);
