let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
let array3 = ['five', 'six'];

// Before ES6:
var combinedArrayES5 = array1.concat(array2).concat(array3);
console.log(combinedArrayES5); 
// After ES6 (using spread operator):
let combinedArrayES6 = [...array1, ...array2, ...array3];
console.log(combinedArrayES6); 
