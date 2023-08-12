// var a = 2; // global variable
// let b = 5; // local variable
// const c = 3 // const not change the value
// c = 4; not changable const

// console.log(a);
// console.log(b);
// console.log(c);

// let a = null;
// let b = 34;
// let c = true;   // can also be false
// let d = BigInt("567");
// let e = "Aniket";
// let f = Symbol("I am a nice symbol");
// let g = undefined;

// console.log(a,b,c,d,e,f,g);
// console.log(typeof(d));


// object in js
// const item = {
//     "aniket": true,
//     "harsh": false,
//     "abcd": 56,
//     "bdc": undefined,
// }

// console.log(item);
// console.log(item["aniket"]);


// preactice set
// Q.1
// let a = "aniket ";
// let b = 23;
// console.log(a+ b);

// Q.2
// console.log(typeof (a+b));

// Q.3
const a1 = {
    name: "aniket",
    section: 1,
    isprinciple: false,
}
// a1 = 34;   not change value
a1['friend'] = "shubham";
a1['name'] = "ABCD"
console.log(a1);