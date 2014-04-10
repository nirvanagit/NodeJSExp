//Qlib
//1
return foo()
.then(function () {
    console.log('bar');
    return "bar";
});

foo()
.then(function () {
    console.log('bar');
    return "bar";
})
.done();

//2
var Q = require('q');
return Q.all([
    eventualAdd(2, 2),
    eventualAdd(10, 20)
]);

function eventualAdd(a, b) {
    return Q.spread([a, b], function (a, b) {
       console.log(a+b); 
       return a + b;
    })
}
