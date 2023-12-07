function isSameType(value1, value2) {
  //your js code here
	function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the same
  return typeof value1 === typeof value2;
}

// Examples
console.log(isSameType(5, 10));            // true
console.log(isSameType('hello', 'world')); // true
console.log(isSameType(3, '3'));            // false
console.log(isSameType(NaN, NaN));          // true

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
