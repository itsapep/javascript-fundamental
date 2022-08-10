let strNum = '10';
let num = 10;
let strNumConverted = Number(strNum)
let result = strNum + num;
console.log(result)
let result2 = strNumConverted + num;
console.log(result2)

// convert to string
let number = String(10);
console.log(number);
console.log(typeof number);

// convert to number
let number2 = Number(true); // you can use parseInt or parseFloat, too!
console.log(number2);
console.log(typeof number2);

// convert bool
let toBool1 = Boolean(1);
console.log(toBool1); // true

let toBool2 = Boolean(0);
console.log(toBool2); // false

let toBool3 = Boolean('');
console.log(toBool3); // false

let toBool4 = Boolean(' ');
console.log(toBool4); // true