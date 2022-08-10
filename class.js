const products = {
    productId : 123,
    name : 'sabun',
    info : function () {
        console.log(`productId : ${this.productId}, productName : ${this.name}`);
    }
}
products.info();

// JavaScript uses function to create object
function product1(id,name) {
    let product = {};
    product.productId = id;
    product.name = name;
    return product;
}
let product1_1 = product1();
let product1_2 = product1();
// two objects stored in product1 and product2
console.log(product1_1);
console.log(product1_2);

// we also can create function inside a function and using data from inside
function product2(id,name) {
    let product = {};
    product.productId = id;
    product.name = name;
    product.info = function () {
        return `productId : ${this.productId}, productName : ${this.name}`
    }
    return product;
}
let product2_1 = product2(122,`melon`);
let product2_2 = product2(131,`jagung`);
// two objects stored in product1 and product2, but info entity will only show [Function (anonymous)] 
console.log(product2_1);
console.log(product2_2);

// as we don't need to show info entity, how to hide it?
// let's create another method to contain info entity
const productMethod = {
    info : function () {
        return `productId : ${this.productId}, productName : ${this.name}`
    }
}
function productObject(id,name) {
    let product = Object.create(productMethod); // let will copy the productMethod as a new object
    product.productId = id;
    product.name = name;
    return product;
}
let product3 = productObject(222,`mangga`);
console.log(product3);
console.log(product3.info);
console.log(product3.info());

// the above demonstration are not quite reliable as we need to create another object for the reusable object
// hence, JavaScript provide us `prototype` that will create the function as object automatically
function empty(){

}
console.log(empty.prototype);

// now let's refactor the above demonstration
function productPrototype(id, name) {
    let product = Object.create(productPrototype.prototype);
    product.productId = id;
    product.name = name;
    return product;
}
productPrototype.prototype.info = function () {
    return `productId : ${this.productId}, productName : ${this.name}`
}
let product4 = productObject(222,`mangga`);
console.log(product4);
console.log(product4.info);
console.log(product4.info());
console.log(productPrototype.prototype);

// here we'll introduce constructor in function
function newProduct(id,name) {
    this.productId = id;
    this.productName = name;
}
newProduct.prototype.info = function () {
    return `productId : ${this.productId}, productName : ${this.productName}`
}
// use `new` keyword to create object from function
let product5 = new newProduct(089,`jambu`)
console.log(product5);
console.log(product5.info);
console.log(product5.info());

function car(brand, name) {
    this.brand = brand;
    this.name = name;
    this.run = function () {
        console.log(`${this.brand} ${this.name} engine has started`);
    }
}
const corolla = new car(`Toyota`, `Corolla`);
const terios = new car(`Daihatsu`,`Terios`);
console.log(corolla);
console.log(terios);
corolla.run();
terios.run();