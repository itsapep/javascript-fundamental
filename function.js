// why using function?
// 1. avoid code repetition
// 2. reusable code
// 3. structured code

function sayHello() {
    console.log('hello world');
}
sayHello();

// can function calls another function?
function anotherSayHello() {
    sayHello();
}
anotherSayHello();

// use parameter in function
function helloWithParams(name) {
    console.log(name);
}
helloWithParams("apep");

function addition(a,b) {
    console.log(a + b);
}
addition(5,10);

function run() {
    let a = 'mlayu' // use block scoped variable for data safety
    console.log(a);
}
run();

// what if we only assign one value for two-paramed function?
function show(a,b) {
    console.log(a, b);
}
show('5'); // output: 5 undefined

// use return method
function returnHello(name) {
    return `hello ${name}`
}
let result = returnHello('Apep');
console.log(result)

// return may only be used once
function showThree(a,b,c) {
    return console.log(a, b);
    return console.log(c); // no error but inaccessible
}
console.log(showThree(1,2,3));

// use fuction as params
function calculator(num1,num2,operator) {
    return operator(num1,num2)
}
console.log(calculator(1,2,addition));

// assign default value in params
function defaultParams(firstName = 'Apep',lastName = 'Miaw') {
    console.log(`${firstName} ${lastName}`);
}
defaultParams();
defaultParams('Rawr');
defaultParams(0,'Rawr');


// IIFE? Immediately Invoked Function Expression is a JavaScript function that runs as soon as it is defined
let final = function multiplication(a,b) {
    return(a * b);
}(4,5);
console.log(final);

(function substraction(a,b) {
    console.log(a - b);
})(3,1);

// The () Operator Invokes the Function
// Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.
// Accessing a function without () will return the function object instead of the function result.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
Document.getElementById("demo").innerHTML = toCelsius;