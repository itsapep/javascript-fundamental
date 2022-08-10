const stock = {
    coffeeBean : 100,
    water : 10000
}

function orderCoffee(order) {
    console.log(`waiting order ${order} for being proceed...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order === `tea`) reject(`order ${order} is not available`)
            else {
                resolve(`coffee ${order} is being proceed ...`)
            }
        }, 1500);
    });
}

function checkStock() {
    console.log(`checking stocks...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.coffeeBean > 0 && stock.water > 0) resolve(`coffee stock is available!`)
            else {
                reject(`coffee stock is unavailable!`)
            }
        }, 1500);
    });
}

function brewCoffee(order) {
    console.log(`brewing the coffee ${order} ...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`coffee ${order} is ready!`);
        }, 3000);
    });
}

// promise all
// create function that runs together at the same time
function boilWater() {
    console.log(`boiling the water ...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`hot water is ready!`);
        }, 3000);
    });
}

function grindCoffeeBean() {
    console.log(`grinding the coffee bean ...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`coffee bean is ready!`);
        }, 3000);
    });
}

function orderDrink(order) {
    orderCoffee(order)
        .then(result => {
            console.log(result);
            return checkStock();
        })
        .then(result => {
            console.log(result);
            return Promise.all([boilWater(),grindCoffeeBean()]); // implemented here
        })
        .then(result => {
            console.log(result);
            return brewCoffee(order);
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error(error));
}

orderDrink(`latte`);