'use strict';

require('dotenv').config();
const faker = require('faker');

const io = require('socket.io-client');

let host = 'http://localhost:8080';
const capsConnect = io.connect(host);
// const driverConnect = io.connect(`${host}/driver`);

const STORE = process.env.STORE;

capsConnect.on('delivered', logDelivery);

function logDelivery (payload) {
  console.log(`Thank you for completing delivery: ${payload.orderID}`);
}

setInterval(() => {
  let order = {
    store: STORE,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  capsConnect.emit('pickup', order);
}, 5000);