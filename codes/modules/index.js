// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

// console.log(uuid());

// The below is code for event emitter, I don't want to set up another node modules folder
// so I reuse the modules from previous session
const logEvents = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  //Emit event
  myEmitter.emit('log', 'Log event emitted!')
}, 2000);