'use strict';

const events = require('../lib/events.js');

events.on('pickup', pickUpOrder);
events.on('in-transit', completeDelivery);

function pickUpOrder (payload) {
  setInterval(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);
}

function completeDelivery (payload) {
  setInterval(() => {
    console.log('delivered!');
    events.emit('delivered', payload);
  }, 3000);
}