let marks = [90,89,67,87,65,"not present", false];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);

console.log(marks.length);


marks[2] = 23;

console.log(marks[2]);

console.log(typeof(marks));

// array method

let num1 = [1,2,3,4,5];
let b = num1.toString()  // b is now a string
console.log(b,typeof b);
let c = num1.join("_");
console.log(c, typeof c);

num.pop();
console.log(num);

let r = num.pop();
console.log(num,r);

let k = num.push(12);
console.log(num,k);

let l = num.shift();   // remove the first element 
console.log(num,l); 

let o = num.unshift(34);  // add the new array length
console.log(num,o);

let num2 = [1,2,3,4,5,6];
let num2_more = [1,2,3,4,5,6];
console.log(num2.length);
delete num2[0];
console.log(num2);
console.log(num2.length);

// concatinate

let num3 = [1,2,3,4,5,6];
let num3_more = [1,2,3,4,5,6];

let newArray = num3.concat(num3_more);
console.log(newArray);
console.log(num3,num3_more);


// sort method

let compare = (a,b) => {
    return b - a;
}
let num5 = [12,1,2,4,3];
num.sort();            // sort method
console.log(num5);


// let num = [12,1,2,4,3];
// num.sort(compare);            // sort method with compare high value
// console.log(num);


// reverse

// let a = [1,2,3,4,5];
// a.reverse();
// console.log(a);


// splice and slice

// let num = [1,2,3,4,5,6,7,,8,9];
// num.splice(2,3, 12,21,32,23,12,12);       // second index and three element remove and add new item
// console.log(num);


// let num = [1,2,3,4,5,6,7,,8,9];
// let deletedValues = num.splice(2,3, 12,21,32,23,12,12);      // print delete values 
// console.log(deletedValues);


// for each loop

// let num = [3,5,1,2,4];

// num.forEach((Element) =>{
//     console.log(Element*Element);
// })

// Array.from

// let name = "aniket";
// let arr = Array.from(name);
// console.log(arr);

// for...of

let name = "aniket";
for(let i of name){
    console.log(i);
}


// for...in

let num = "aniket";
for(let i in num){
    console.log(num[i]);
}


// map, filter and reduce

let arr = [45,23,21];

let a = arr.map((value) => {
    console.log(value);
    return value;
})

let arr1 = [45,23,21];


let a1 = arr1.map((value ,index ,array) => {
    console.log(value,index,array);
    return value + 1;
})
console.log(a1);

// array filter method

let arr2 = [45,23,21,1,2,3,4,];
let a2 = arr2.filter((a) => {
    return a < 10;
})

console.log(a2);


// array reduce method

let arr3 = [1,2,3,4,5];
let newarr3 = arr3.reduce((h1 , h2 ) => {
    return h1 + h2;
})

console.log(newarr3);


// a = prompt("enter a number");