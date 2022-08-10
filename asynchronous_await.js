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

function drinkCoffee(reject, resolve) {
    return (error,output) => {
        if (error) {
            console.log(`dissapointed! ${error}`);
        } else {
            console.log(`thank you, slurrrpppp ${output} uhhh...`);
        }
    };
}

function orderDrinkAsync(order) {
    return new Promise((resolve, reject) => {
        orderDrink(order, drinkCoffee(reject,resolve))
    })
}

async function orderCoffee() {
    const order = await orderDrinkAsync(`americano`);
    console.log(order);
}

orderCoffee();