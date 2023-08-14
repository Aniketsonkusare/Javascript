// Q.1
// enter the new number of arr

// let arr = [12,13,14,15];
// let a = prompt("enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Q.2

// let arr = [10,12,13,14,15];
// let a;

// do{
//     a = prompt("enter a number");
//     a = Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr);

// Q.3
// use filter and divisible by 10

// let arr = [12,13,14,15,90,80,70];

// let n = arr.filter((x) => {
//     return x % 10 == 0;
// })
// console.log(n);

// Q.4
// use the filter and find the square

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let n = arr.map((x)=>{
//     return x * x;
// })
// console.log(n);

// Q.5
// find the factorial using reduce function

let arr = [1,2,3,4,5];

let n = arr.reduce((x1 ,x2) => {
    return x1 * x2
})

console.log(n);