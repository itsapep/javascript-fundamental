// let score = 'C';
// switch (score) {
//     case 'A':
//         console.log(`you got ${score} score!`);
//         break;
//     case 'B':
//         console.log(`you got ${score} score!`);
//         break;
//     case 'C':
//         console.log(`you got ${score} score!`);
//         // withoout break, the below command will also be run
//     case 'D':
//         console.log(`you got ${score} score!`);
//     default:
//         console.log(`you may not pass the test ...`)
// }
// output:
// you got C score!
// you got C score!
// you may not pass the test ...

// this will print a same output for input 'B' or 'C'
let score = 'A';
switch (score) {
    case 'A':
        console.log(`you got a perfect score!`);
        break;
    case 'B':
    case 'C':
        console.log(`congratulations you're passed!`);
        break
    default:
        break
}