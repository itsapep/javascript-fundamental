for (let index = 0; index <= 5; index++) {
    console.log('i am a developer');
}

// predefined condition value
let number = 5;
for (let index = 0; index <= number; index++) {
    console.log('i am a developer')
}

// printing index
for (let index = 0; index <= 5; index++) {
    console.log(index)
}

// break and continue
number = 10;
for (let index = 1; index <= number; index++) {
   if (index % 2 === 1) {
        continue
   }
   if (index > 8) {
        break
   }
   console.log(index)
}

const animals = ['bird','elephant','raindeer']
for (let index = 0; index < animals.length; index++) {
    console.log(animals[index])
}

for (let i in animals) {
    console.log(animals[i])

}

for (let i of animals) {
    console.log(i)
}