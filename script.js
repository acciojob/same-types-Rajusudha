function isSameType(value1, value2) {
  //your js code here
	
 if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the same and not NaN
  return typeof value1 === typeof value2 && !isNaN(value1) && !isNaN(value2);
}

// Examples
console.log(isSameType(1, 3));           // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));        // true
console.log(isSameType("3", 3));          // false

}

// do not change the code below.
let value1 =Number(prompt("Enter Start of the Range."));
let value2 =Number(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));
