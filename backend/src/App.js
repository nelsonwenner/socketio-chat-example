import router from './routes/index.router';
import SocketIO from 'socket.io';
import Express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';

class App {
  constructor() {
    this.server = Express();
    
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(router);
  }

  middlewares() {
    this.server.use(Express.json());
    this.server.use(cors());
  }
}

export default new App().server;