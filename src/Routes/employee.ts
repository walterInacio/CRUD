import { Router } from "express";
import { Express, Request, Response } from "express-serve-static-core";

const BASE_PATH = '/employee';

export default (app: Express, router: Router) => {
    router.post('/create', (_req: Request, res: Response) => {
        res.status(200).send('OK');
    });

    router.get('employee/get', (req: Request, res: Response) => {
        res.send('WALTER TRABAIADOR');
    })

    app.use(BASE_PATH, router);
}
