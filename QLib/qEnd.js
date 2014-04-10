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
