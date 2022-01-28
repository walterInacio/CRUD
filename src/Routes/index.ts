import { Router } from "express";
import { Express, Request, Response } from "express-serve-static-core";
import employee from "./employee"

export const initRoutes = (app: Express, router: Router) => {
    console.log(router);
    router.get('/', (req: Request, res: Response) => {
        res.send("Hello Man");
    });

    employee(app, router);
};