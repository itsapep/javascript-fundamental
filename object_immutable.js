// immutable variable type means the data type is unchangeable 
// otherwise, mutable variable type is changeable, i.e. array and object

const car = {
    name : 'Avanza',
    seats : {
        count : 4,
        type : 'leather'
    }
}
car.colour = 'white' // car object is changeable
console.log(car);

const newCar = car; // the newCar will mirror car object (by reference)
newCar.name = 'Mazda'; // this will also change car object
console.log(`car : ${car.name}`);
console.log(`newCar : ${newCar.name}`);

// how to copy object and its elements?
// use keyword Object.assign()
const newCopyCar = Object.assign({},car);
newCopyCar.name = 'Jaguar'; // this will not change car object
console.log(`car : ${car.name}`);
console.log(`newCopyCar : ${newCopyCar.name}`);

// use spread operator (...)
const newCopyCar2 = {...car};
newCopyCar2.name = 'Avanza'; // this will not change car object
newCopyCar2.seats.type = 'wood' // but this will also change car.seats object
console.log(`car : ${JSON.stringify(car)}`);
console.log(`newCopyCar2 : ${JSON.stringify(newCopyCar2)}`);
// spread operator will only copy one object level

// how to solve it?
// call additional spread operator !
const newCopyCar3 = {...car, seats:{...car.seats}};
newCopyCar3.name = 'Avanza'; // this will not change car object
newCopyCar3.seats.type = 'leather' // and this will also not change car.seats object
console.log(`car : ${JSON.stringify(car)}`);
console.log(`newCopyCar3 : ${JSON.stringify(newCopyCar3)}`);