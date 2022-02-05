import "reflect-metadata";
import express_ from 'express';

import { initRoutes } from './Routes';
import { createConnection } from "typeorm";
import bodyParser from "body-parser";

const configTypeorm = require('../ormconfig.json');

let express = express_  // *-* MaGiC Happens Here *-*
let app = express();
let router = express.Router();

const port = 3000;

const start = async () => {
    const connection = await createConnection(configTypeorm);

    app.use(express.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    initRoutes(app, router, connection);
    
    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    });
  };
  
  start().catch(console.error);
