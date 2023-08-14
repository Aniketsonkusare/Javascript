// Q.1
// let a = "aniket\"";
// console.log(a.length);

// Q.2
// const sentence = 'the quick brown fox jumps over the lazy dog';
// const word = 'fox';
// console.log(sentence.includes(word));
// console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// const str1 = 'cats are the best!';
// console.log(str1.startsWith('best'));

// const str2 = 'cats are the best!';
// console.log(str1.endsWith('best!'));

// Q.3
// let a = "ANIKET";
// console.log(a.toLowerCase(a));

// Q.4

let str2 = "please give rs 1000";
let amount = str2.slice("please give rs" .length);
console.log(amount);
console.log(typeof amount);

// Q.5
let friend = "harsh";
friend[3] = "w";
console.log(friend);