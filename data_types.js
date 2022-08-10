// string
let fullName = 'Yurham Afif';
console.log('fullName: ',fullName);

// boolean
let benar = true;
console.log('bool: ',benar);

// integer
let numberInt = 10;
console.log('number: ',numberInt);
console.log(typeof numberInt);

// bigInt
let numberBig = 101234567890987654321234567899876543n;
console.log('number: ',numberBig);
console.log(typeof numberBig);

// null
let age = null;
console.log('age: ',age);
console.log(typeof age);

// undefined
let asome;
console.log('asome: ',asome);
console.log(typeof asome);

// symbol
// unique identifier, even when using same name and description
const id = Symbol('id');
console.log('id: ',id);
console.log(typeof id);
const id2 = Symbol('id');
console.log(id==id2); // result: false

