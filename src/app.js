// aplicativo para iniciar a aplicacao
import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // adiciona o middleware para o express poder entender json
    this.server.use(express.json());
  }

  routes() {
    // essa linha chama o middleware de rotas, que esta em outro arquivo
    this.server.use(routes);
  }
}

export default new App().server;
