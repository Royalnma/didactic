// Number one question

// What are the difference between mutating arrays methods and non-mutating array methods?
// Mutating array methods is basically changing the array itself instead of returning a new array with the new changes whereas non-mutation method is returning a whole new array which has all the changes.
// Some examples of the Mutating array method are: array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse().
// Some examples of the Non-nutation array methods are: array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf.

// Number Two Question 

let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

console.log(languages)

 // To add to the end of the array
languages.push("Kotlin");
console.log(languages)

// To add in the middle
languages.splice(3, 0, "Java");
console.log(languages)

// To remove the first element
 const removedElementFirst = languages.shift();
console.log(languages)

// To add to the beginning of the array
languages.unshift("Swift", "Scala");
console.log(languages)

// To replace in the middle of an array 
let removedElements = languages.splice(5, 1, "Go", "Rust");
console.log(languages)

// Number Three Question

// The value of the fruit will still be , apple ,mango and banana

// Number Four Question