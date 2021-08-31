'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:8080';
const capsConnect = io.connect(host);
// const vendorConnect = io.connect(`${host}/vendor`);

capsConnect.on('pickup', pickUpOrder);

function pickUpOrder (payload) {
  setInterval(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    capsConnect.emit('in-transit', payload);
  }, 1000);

  setInterval(() => {
    console.log('delivered!');
    capsConnect.emit('delivered', payload);
  }, 3000);
}

