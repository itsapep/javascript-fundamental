// print command
// console.log('hello world');

// variables: var, let, const
// var a = 10; // old-school version of variable, avoid to use it
// let b = 10; // modern-style variable
// const c = 10; // constant variable
// var can be redeclared, reassign, and hoist, even with different data types
// var a = 10;
// var a = 20; // redeclared
// console.log(a);
// a = 30; // reassign
// console.log(a);
// b = 10; // hoisted
// var b;
// console.log(b);

// let's find out the same properties for let-declared function
// let a = 10
// let a = 20 // redeclared a will result an error
// a = 30; // reassign results no error, even with different data types
// console.log(a);
// b = 10; // hoisted
// let b; // this will result error: Cannot access 'b' before initialization
// console.log(b);

// let's find out the same properties for const-declared function
// const a = 10
// const a = 20 // redeclared a will result an error
// a = 30; // reassign results error: Assignment to constant variable.
// console.log(a);
// b = 10; // hoisted
// const b; // this will result error: 'const' declarations must be initialized.
// console.log(b);

// global and local varialbe
// var a = 10; // global var
// function example() {   
//     var a = 20; // local var
//     console.log(a);
// }
// console.log(a); // result: 10
// example(); // result: 20

// is it possible to call local as global variable?
var a = "apep";
console.log(a);
function example() {   
    a = 20; // local var must be assigned without declaration, and this will reassign the global a var
    console.log(a);
}
example(); // this func will export the local variable as global var, result: 20
console.log(a); // result: 20
var a = "apep";
console.log(a);
console.log(global)
