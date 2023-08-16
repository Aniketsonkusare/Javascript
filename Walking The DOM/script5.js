// matches
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class"))   // false
console.log(id1.matches(".box"))       // true

// closest
console.log(sp1.closest(".box"))       
console.log(sp1.closest("#sp1"))       

// containes
console.log(id1.contains(sp1))   // true    
console.log(sp1.contains(sp1))   // true
console.log(sp1.contains(id1))   // false
