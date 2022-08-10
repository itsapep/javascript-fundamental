// Promise has two params, resolve and reject

let userName = `apep`;
let password = `1234`;
const newPromise = new Promise((resolve, reject) => {
    let id = 1234;
    // here the promise status is pending
    setTimeout(() => {
        if (userName === `apep` && password === `123`){
            // resolved as promise are fullfilled
            resolve(id);
            // console.log(id); // this promise should be consumed by using `then` operator
        }else{
            // rejected as promise are not fullfilled
            reject(`invalid username or password`)
        }
    }, 3000);
});
// console.log(newPromise);

// let's use `then` to consume promise
// const newPromise2 = new Promise(executorFunction);

// resolve pending --> fullfilled
function handleResolve(resolveValue) {
    console.log(resolveValue);
    console.log(newPromise);
}
// reject pending --> rejected
function handleReject(rejectValue) {
    console.log(rejectValue);
    console.log(newPromise);
}

// there're ways to consume promise
// newPromise.then(handleResolve,handleReject);
// newPromise.then(handleResolve);
// newPromise.then(null,handleReject);
// newPromise.catch(handleReject);
// newPromise.finally(() => console.log(`finally`));
