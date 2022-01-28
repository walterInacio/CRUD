import express_ from 'express';
import { initRoutes } from './Routes';

let express = express_  // *-* MaGiC Happens Here *-*
let app = express();
let router = express.Router();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

initRoutes(app, router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});