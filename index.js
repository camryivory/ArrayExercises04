let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];


let holdCabinet3 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet4 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//REVERSE ALTERS ORIGINAL ARRAY//

console.log(holdCabinet1)
console.log(holdCabinet1.reverse())
console.log(holdCabinet1)


//SORT ALTER ORIGINAL ARRAY//
console.log("Does sort alter the original array?")
 console.log(holdCabinet2)
console.log(holdCabinet2.sort());



if ((holdCabinet2 === holdCabinet2.sort()) === false) {
  console.log(`No, the 'sort' method does not alter the original array`)
} else {
  console.log(`Yes, the 'sort' method alters the original array`)
};


//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let newCabinet = [];

 newCabinet = holdCabinet1.concat(holdCabinet2)
 console.log(newCabinet)
 console.log(holdCabinet1)



//b) Print a slice of two elements from each array. Does slice alter the original arrays?

console.log(holdCabinet1.slice(1,3))
console.log(holdCabinet1)
//Slice does not alter original arrays//

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

console.log(holdCabinet3)
console.log(holdCabinet3.reverse())
console.log(holdCabinet3)


console.log(holdCabinet4)
console.log(holdCabinet4.sort())
console.log(holdCabinet4)
