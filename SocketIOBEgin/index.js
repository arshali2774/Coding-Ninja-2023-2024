import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

const app = express();

// create server using http
const server = http.createServer(app);

// create socket server
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// use socket events
io.on('connection', (socket) => {
  console.log('connection is established');

  socket.on('join', (data) => {
    socket.username = data;
  });

  socket.on('new_message', (message) => {
    console.log('new message recevied from client, broadcasting the message');
    let userMessage = {
      username: socket.username,
      message: message,
    };
    //broadcast this message to all users
    socket.broadcast.emit('broadcast_message', userMessage);
  });

  socket.on('disconnect', () => {
    console.log('connection is disconnected');
  });
});

//listen
server.listen(3000, () => {
  console.log('App listening on port 3000');
});
