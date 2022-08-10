// how to keep original array immutable?
// use Array.from()
let numbers = [1,2,3];
let nums = Array.from(numbers)
console.log('numbers ' + numbers);
console.log('nums ' + nums);

// use spread operator (...)
let nums2 = [...numbers];
nums2[0] = 7;
console.log('numbers ' + numbers);
console.log('nums2 ' + nums2);


let array = [1,23,234,34];
let forEach = array.forEach((e) => {
    return e * 2;
})
let map = array.map((e) => {
    return e * 2;
})
let filter = array.filter((e) => {
    return e != array[1];
})
console.log(array);
console.log(forEach);
console.log(map);
console.log(filter);

// destructuring array
let array2 = [2,3,4,5,6];
let [a,b,...c] = array2;
console.log(a,b,...c);
console.log(...c);

