var firstArray = ["Matthew", "Adam", "Dog", "Food"];
var secondArray = [25,6,14,8,9,2,14,5];
var isStudent = true;
var thirdArray = [true, false, false, true, isStudent];

console.log(firstArray.pop());
//removes the last element of the array
console.log(firstArray);
console.log(secondArray.indexOf(14));
// gets the first index value of the specified value, even if there are more copys of that value
console.log(thirdArray.slice(1,3));
// creates a new array that contains the values of the first index values, up until, but not including, the second index value.
// In this case, the new array is a small array, containing the thirdArray values at index 1 and 2, stopping at index value 3.

var finalArray = firstArray.concat(secondArray);
console.log(finalArray);
console.log(`My name is ${finalArray[0]} ,and I am ${finalArray[3]} years old, and my dog is ${finalArray.slice(-1).pop()} years old.` )