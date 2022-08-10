class Animal {
    constructor(name) {
        this.name = name;
    }

    communicate(sound) {
        console.log(`The ${this.name} is communicating with ${sound} sound`);
    }

    walk() {
        console.log(`the ${this.name} is walking`);
    }
}

class Cat extends Animal {
    constructor() {
        // the `super` keyword is used to call the constructor's super or parent class
        super(`Cat`);
    }

    roll() {
        console.log(`The ${this.name} is rolling`);
    }
}

const cat = new Cat();
cat.communicate(`miaw`);
cat.walk();
cat.roll();