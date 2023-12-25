// An array of names
// const names = ['Gideon', 'Courage', 'Jude', 'Psalm'];
// console.log(names)

// calculating the length of an array 
// const len = names.length;
// console.log(len)

// Another way to create a new array 
// const arr = new Array(3);
// arr [0] = 'first element'
// arr [1] = 'second element'
// arr [2] = 'third element'
// arr [3] = 'fourth element'

// console.log(arr)

// push() methods in arrays
// const vowels = ['a', 'e', 'i', 'o'];
// console.log(vowels)
// vowels.push("u");
// console.log(vowels);

// pop() method in arrays 
// it is used to remove the last element from an array 
// const numbers = [2, 4, 6, 8];
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// unshift() method in arrays 
// It is used to add an element to the begining of an array 
// const ages = [ 12, 14, 16, 18, 20];
// console.log(ages);
// ages.unshift(10);
// console.log(ages);

// shift() method in arrays
// it is used to remove the first element in an array 
// const evenNumbers = [1, 2, 4, 6, 8, 10];
// console.log(evenNumbers);
// evenNumbers.shift();
// console.log(evenNumbers);

// reverse() method in arrays
// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers);
// oddNumbers.reverse();
// console.log(oddNumbers);

// sort() method in arrays
// const names = ['Gideon', 'Jude', 'Courage', 'Psalm', 'Shekinah'];
// console.log(names);
// names.sort();
// console.log(names);

// splice() method for adding in arrays 
// const fruits = ["apple", "Banana", "Cherry"];
// console.log(fruits);
// fruits.splice(3,4, "Orange", "lemon")
// console.log(fruits)


// splice() method for removing from arrays
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.splice(3,3);
// console.log(numbers)

// concat() meethod in arrays
// const oddNumbers = [1, 3, 5, 7, 9];
// const evenNumbers = [2, 4, 6, 8, 10];

// const sortedNumbers = oddNumbers.concat(evenNumbers);

// sortedNumbers.sort((a, b) => a - b);

// console.log(sortedNumbers);


// indexOf() method in arrays
// const names = ['Gideon', 'Jude', 'Courage', 'Psalm', 'Shekinah'];
// console.log(names);

// const psalm = names.indexOf('Psalm');
// console.log(`Index of psalm is ${psalm}`)

// lastIndexOf() method in arrays 

const names = ['Gideon', 'Jude', 'Courage', 'Psalm', 'Shekinah', 'Gideon', 'Courage']; 
console.log(names);
const position = names.lastIndexOf('Femi');
const great = names.join('>')
console.log(great)
console.log(position);

//

