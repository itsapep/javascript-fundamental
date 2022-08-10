function p1() {
    console.log(`enigma camp 1`);
}

function p2(callback) {
    setTimeout(
        function () {
            console.log(`enigma camp 2`);  
            callback();
        }, 1000
    );
}

function p3() {
    console.log(`enigma camp 2`);
}

// p1();
// p2(p3);

function drinkCoffee(error, output) {
    if (error) {
        console.log(`dissapointed! ${error}`);
    } else {
        console.log(`thank you, slurrrpppp ${output} uhhh...`);
    }
}

function orderDrink(order, sendOrder) {
    console.log(`waiting order ${order} for being proceed...`);
    setTimeout(() => {
        if (order === `tea`) sendOrder(`order ${order} is not available`)
        else {
            const result = `Coffee ${order}`
            sendOrder(null,result)
        }
    }, 2000);
}

// orderDrink(`latte`,drinkCoffee)
// orderDrink(`tea`,drinkCoffee)

// callback hell
function drinkCoffee2(error, output) {
    if (error) {
        console.log(`dissapointed! ${error}`);
    } else {
        console.log(`thank you, slurrrpppp ${output} uhhh...`);
    }
}
function orderDrink2(order, sendOrder) {
    console.log(`waiting order ${order} for being proceed...`);
    setTimeout(() => {
        if (order === `tea`) {
            console.log(`input`);
            sendOrder(`order ${order} is not available`,null)
        }
        else {
            setTimeout(() => {
                console.log(`order ${order} is proceed...`);
                const result = `Coffee ${order}`
                sendOrder(null,result)
            }, 3000);
            
        }
    }, 2000);
}
let orders = [`latte`,`tea`];
orderDrink2(orders[0], (error,order) => {
    drinkCoffee2(error,order)
    orderDrink2(orders[1], (error,order) => {
        drinkCoffee2(error,order)
    })
})