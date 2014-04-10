var fruits = ["Apple", "Orange"]

var apple = fruits.shift() // now we have only ["Orange"] left

console.log('Apple:' + apple);
console.log('fruits' + fruits);
//fruits.unshift("Lemon") // now got ["Lemon", "Orange"]
fruits.unshift('Lemon');
//fruits.shift();
console.log('Unshift:' + fruits);


