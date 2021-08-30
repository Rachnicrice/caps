'use strict';

require('dotenv').config();
const events = require('../lib/events.js');
const faker = require('faker');

const STORE = process.env.STORE;

// vendor emits pickup
// .emit('pickup')

events.on('new-order', initiatePickup);
events.on('delivered', logDelivery);

function initiatePickup (payload) {
  events.emit('pickup', payload);
}

// vendor also needs to know about when it's delivered
// .on('delivered', tell me this has been delivered)

function logDelivery () {
  console.log('Thank you!');
}

setInterval(() => {
  let order = {
    store: STORE,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('new-order', order);
}, 5000);