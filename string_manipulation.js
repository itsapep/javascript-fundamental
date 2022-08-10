const bootcampName = 'Enigma';
console.log(bootcampName);

// uppercase
console.log(bootcampName.toUpperCase());

// lowercase
console.log(bootcampName.toLowerCase());

// substring from index x for y length
console.log(bootcampName.substr(2,3));

// find and replace
console.log(bootcampName.replace('ni','no'));

// backtick used to call variable directly in strings
console.log('I do train my skills in bootcampName'); // unable to call `bootcampName`
console.log(`I do train my skills in ${bootcampName}`);

// escape
// \'
let quote = 'sekarang hari jum\'at'
console.log(quote)
// \n create new line
quote='name: Apep \naddress: Surabaya'
console.log(quote)
// \t create one tab
quote='name: Apep \t address: Surabaya'
console.log(quote)