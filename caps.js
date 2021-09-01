'use strict';

require('dotenv').config();
const PORT = process.env.PORT;

console.log(PORT);

const io = require('socket.io')(PORT);

// const vendor = io.of('/vendor');
// const driver = io.of('/driver');

io.on('connection', (socket) => {

  socket.on('pickup', (payload) => {
    let EVENT = {
      event: 'pickup',
      time: new Date().getTime(),
      payload: payload,
    };
    io.emit('pickup', payload);
    console.log(EVENT);
  });
  
  socket.on('in-transit', (payload) => {
    let EVENT = {
      event: 'in-transit',
      time: new Date().getTime(),
      payload: payload,
    };
    console.log(EVENT);
  });
  
  socket.on('delivered', (payload) => {
    let EVENT = {
      event: 'delivered',
      time: new Date().getTime(),
      payload: payload,
    };
    io.emit('delivered', payload);
    console.log(EVENT);
  });

});




