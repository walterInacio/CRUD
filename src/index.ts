import "reflect-metadata";
import express from "express";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import bodyParser from "body-parser";

import configTypeorm from "./config/ormconfig.json";
import employeeRoutes from './routes/employee';

class App {
  public express: express.Application;
  public port = 3000;
  public connection: Connection;

  public constructor() {
    this.express = express();
    this.database();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.listen(this.port, () => {
      return console.log('Listening on port: ', this.port);
    })
  }

  private database(): void {
    createConnection(configTypeorm as ConnectionOptions)
      .then(async (conn) => {
        this.middleware();
        this.routes();
      })
      .catch((e) => console.log(e));
  }

  private routes(): void {
    employeeRoutes(this.express);
  }
}

export default new App().express;
