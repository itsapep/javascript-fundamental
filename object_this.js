// `this` refers to its belonging part/element
// implisit binding, determined by the JS
const myObj = {
    x : 50,
    fun : function () {
        console.log(this.x);
    }
} 
myObj.fun();

// explicit binding, determined by us, the developer
// 3 ways: call(), apply(), bind()

const anotherObj = {
    x : 100
}

function lala(name,address) {
    console.log(name,address,this.x); // failed to call x
}
lala('apep','surabaya');

// use call() with variadic additional params
lala.call(anotherObj,'apep','surabaya');

// use apply() with array additional params
lala.apply(anotherObj,['apep','surabaya']);

// use bind() by declaring new variable
const data = lala.bind(anotherObj,'apep','surabaya');
data();