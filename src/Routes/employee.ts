import { Router } from "express";
import { Express, Request, Response } from "express-serve-static-core";
import { Connection, createConnection } from "typeorm";
import { Employee } from "../entity/Employee";

const BASE_PATH = '/employee';

export default (app: Express, router: Router, connection: Connection) => {
    router.post('/create', async (req: Request, res: Response) => {
        try {
            await connection.manager.getRepository(Employee).save({ ...req.body });
            res.status(201).send();
        } catch (error) {            
            console.log(error);
            res.status(400).send(error);
        }

    });

    router.get('/get', (req: Request, res: Response) => {
        // TODO: Create return from get data
        res.send('');
    })

    app.use(BASE_PATH, router);
}
