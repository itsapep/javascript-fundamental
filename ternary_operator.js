// shorter way to write conditional clause
// syntax:
// condition ? expressionIfTrue : expressionIfFalse
// WARNING: recommended ONLY for two conditions

number = 10;
let result = number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`;
console.log(result);

// try nested ternary operator
// the NOT recommended way
number = 'sepuluh';
result = number % 2 === 0 ? `${number} is an even number` : number % 2 === 1 ? `${number} is an odd number` : `${number} is not a number`;
console.log(result);

// truthy and falsy?!
// falsy is zero value for each data type, the result equals to false, and for truthy is the otherwise
let firstName = ''; // falsy
if (firstName) {
    console.log(`hello ${firstName}`);
} else {
    console.log(`firstName is empty`);

}
console.log('' == false);
