// if-else statement
let score = 90;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}

// use a variable as container
score = 80;
grade = '';
if (score < 90) {
    grade = 'B';
}
console.log(grade);

// use comparison as if condition
if (score === 90) {
    console.log('A');
} else if (score < 90) {
    console.log('B');
}

// use range as if condition
if (score >= 90 && score <=100) {
    console.log('A');
} else if (score>=80 && score < 90) {
    console.log('B');
} else if (score>=70 && score < 80) {
    console.log('C');
} else {
    console.log('D');
}

// nested if-condition
const competence = 2
score = 90
if (score >= 90 && score <=100) {
    console.log('A');
    if (competence === 2) { 
        console.log('This student is eligible to proceed the scholarship program');
    }
} else if (score>=80 && score < 90) {
    console.log('B');
} else if (score>=70 && score < 80) {
    console.log('C');
} else {
    console.log('D');
}