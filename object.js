// object initialised by using either {} or Object()
const user = {
    firstName : 'Apep',
    lastName : 'miaw',
    age : 22,
    isActive : true
}
console.log(user);

// elements of object can be accessed by using . or []
console.log(user.firstName);
console.log(user['firstName']);

// elements of object can be reassigned
let newName = user.firstName = 'mamba';
console.log(user);
let newName2 = user['lastName'] = 'rawr';
console.log(user);

// but how come we change `const` value?
// the reason is that we are assigning new value, not change it, and not even fully rewrite the object

// now, how we can add new element in the object?
user.email = `mpusrawr@gmail.com`;
console.log(user);

// print object using for-loop
for (const key in user) {
    console.log(key);
    console.log(user[key]);
}

// we can add function in the object
user.hello = function sayHello(name) {
    console.log(`hello ${name}`);
};
user.hello2 = sayHello2 = (name) => {
    console.log(`hello using arrow ${name}`);
};
console.log(user);

// let's call the functions inside the object
user.hello(user.firstName)
user.hello2(user.lastName)

// now let's try to delete the element
delete user.isActive;
console.log(user);

// nested object?
user.address = {
    fullAddress : 'Keputih Surabaya',
    number : 200
}
console.log(user);
