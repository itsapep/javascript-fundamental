// while
const animals = ['bird','elephant','raindeer'];
let i = 0;
let result = '';

while (animals[i]) {
    result += animals[i] + '\n';
    i++;
}
console.log(result)

let a = 0;
let b = 0;
while (a<3) {
    a++
    b+=a
}
console.log(a)
console.log(b)

// do-while
// do-first, check-later
let counter = 0;
do {
    counter++;
    console.log(counter)
} while (counter>10);