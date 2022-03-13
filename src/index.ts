import "reflect-metadata";
import express_ from 'express';

import { initRoutes } from './Routes';
import { Connection, createConnection, EntityTarget, Repository } from "typeorm";
import bodyParser from "body-parser";

const configTypeorm = require('../ormconfig.json');

let express = express_  // *-* MaGiC Happens Here *-*
let app = express();
let router = express.Router();
export let connection: Connection;

const port = 3000;

export const queryConnection = async <T>(entity: EntityTarget<T>) => {
  connection = await createConnection(configTypeorm);
  return connection.manager.getRepository(entity);
}

const start = async () => {

    app.use(express.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    initRoutes(app, router);
    
    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    });
  };
  
  start().catch(console.error);
