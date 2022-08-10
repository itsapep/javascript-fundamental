let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers);

// in JavaScript, array can store any types of data type
let anyThings = [1,true,'doni',['satu','dua'], function() {
    console.log('hello')
}];
anyThings[4]();
console.log(anyThings);

// array in JavaScript is dynamic
let animals = [];
animals[0]='cat';
console.log(animals);

// dinamicity of array doesn't apply on const
const animals2 = [];
animals[0]='cat'; // result no error but declined
console.log(animals2);

// methods

// using push to append array element from the last order
animals.push('dog','bird','pigeon','turtle','snake','tiger');
console.log(animals);
console.log(animals.length);

// using pop to remove element of array from the last order
animals.pop();
console.log(animals);
console.log(animals.length);

// using shift to remove element of array from the first order
animals.shift();
console.log(animals);
console.log(animals.length);

// using unshift to append element of array from the first order
animals.unshift('whale','shrimp');
console.log(animals);
console.log(animals.length);

// using splice to removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
animals.splice(2,0,'black mamba'); // 0 in the 2nd args means no deletion needed
console.log(animals);
console.log(animals.length);