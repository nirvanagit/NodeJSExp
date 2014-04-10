var events = require('events');

var eventEmitter = new events.EventEmitter();

function mainLoop(){

console.log('Logging into application');
eventEmitter.emit('loggingin');

console.log('Starting application console');
eventEmitter.emit('ApplicationStarted');

console.log('Stopping Application');
eventEmitter.emit('StopApplication');

}

function onLogging(){
console.log('This is the logging in event');
}

function onApplicationStart(){
console.log('This is application start');
}

function onStopping(){
console.log('This is stopping the application');
}

eventEmitter.on('loggingin', onLogging);
eventEmitter.on('StopApplication', onStopping);
eventEmitter.on('ApplicationStarted', onApplicationStart);
mainLoop();
