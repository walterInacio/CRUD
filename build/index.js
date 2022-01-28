"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
let express = express_1.default; // *-* MaGiC Happens Here *-*
let app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
(0, Routes_1.initRoutes)(app);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
