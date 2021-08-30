'use strict';

// pull in global events pool
const events = require('./lib/events.js');

// pull in the vendor module
require('./modules/vendor.js');
// pull in the driver module
require('./modules/driver.js');

events.on('pickup', (payload) => {
  let EVENT = {
    event: 'pickup',
    time: new Date().getTime(),
    payload: payload,
  };
  console.log(EVENT);
});

events.on('in-transit', (payload) => {
  let EVENT = {
    event: 'in-transit',
    time: new Date().getTime(),
    payload: payload,
  };
  console.log(EVENT);
});

events.on('delivered', (payload) => {
  let EVENT = {
    event: 'delivered',
    time: new Date().getTime(),
    payload: payload,
  };
  console.log(EVENT);
});

