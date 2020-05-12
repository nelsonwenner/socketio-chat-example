import Express from 'express';
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