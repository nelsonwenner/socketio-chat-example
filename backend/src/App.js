import init from './services/socket/socket';
import SocketIO from 'socket.io';
import express from 'express';
import http from 'http';
import 'dotenv/config';

class App {
  constructor() {
    this.server = http.createServer(express());
    this.socket = SocketIO.listen(this.server);
  
    init(this.socket);
  }
}

export default new App();