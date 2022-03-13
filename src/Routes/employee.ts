import { Router } from "express";
import { Express, Request, Response } from "express-serve-static-core";
import { connection, queryConnection } from "..";
import { Employee } from "../entity/Employee";

const BASE_PATH = '/employee';

export default (app: Express, router: Router) => {
    router.post('/create', async (req: Request, res: Response) => {
        try {
            await (await queryConnection(Employee)).save({ ...req.body });
            await connection.close();
            res.status(201).send();
        } catch (error) {
            res.status(400).send(error);
        }

    });

    router.get('/:id', async (req: Request, res: Response) => {
        try {            
            const result = await (await queryConnection(Employee)).findOne(req.params.id);
            await connection.close();
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send('Usuário não encontrado');
            }
        } catch (error) {
            res.status(400).send(error);
        }
    })

    app.use(BASE_PATH, router);
}
